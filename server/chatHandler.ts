import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import { SYSTEM_PROMPT } from './portfolioKnowledge';
import { generateLocalKnowledgeReply } from './localKnowledgeResponder';

// Ensure environment variables are loaded
dotenv.config();

const DEFAULT_GEMINI_MODEL = 'gemini-3.8-flash';

/**
 * Resolves configured model name, automatically mapping legacy/deprecated
 * Gemini model identifiers to the current active free-tier flash model.
 */
function resolveGeminiModel(configuredModel?: string): string {
  const trimmed = configuredModel?.trim();
  if (!trimmed) return DEFAULT_GEMINI_MODEL;

  const legacyMap: Record<string, string> = {
    'gemini-1.5-flash': DEFAULT_GEMINI_MODEL,
    'gemini-2.0-flash': DEFAULT_GEMINI_MODEL,
    'gemini-2.5-flash': DEFAULT_GEMINI_MODEL,
    'models/gemini-1.5-flash': DEFAULT_GEMINI_MODEL,
    'models/gemini-2.0-flash': DEFAULT_GEMINI_MODEL,
    'models/gemini-2.5-flash': DEFAULT_GEMINI_MODEL,
  };

  return legacyMap[trimmed] || trimmed;
}

interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface ChatRequestBody {
  message: string;
  history?: ChatMessage[];
}

export interface ChatHandlerResponse {
  status: number;
  data: {
    reply?: string;
    error?: string;
  };
}

// In-memory sliding window rate limiter: max 15 requests per 60s per IP
interface RateLimitRecord {
  count: number;
  resetAt: number;
}
const rateLimitMap = new Map<string, RateLimitRecord>();
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 15;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetAt) {
    rateLimitMap.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return true;
  }

  if (record.count >= MAX_REQUESTS_PER_WINDOW) {
    return false;
  }

  record.count += 1;
  return true;
}

// Periodically clean up expired rate-limit records
const cleanupInterval = setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetAt) {
      rateLimitMap.delete(ip);
    }
  }
}, 5 * 60 * 1000);

if (typeof cleanupInterval.unref === 'function') {
  cleanupInterval.unref();
}

/**
 * Handles incoming chat request with strict security, rate limiting, and dual-layer AI response:
 * 1. Live Google Gemini API (gemini-3.8-flash)
 * 2. Automatic Smart Local Portfolio Knowledge-Base Responder (100% reliable zero-fail fallback)
 */
export async function handleChatRequest(
  rawBody: unknown,
  clientIp = '127.0.0.1'
): Promise<ChatHandlerResponse> {
  // 1. Rate Limit Enforcement
  if (!checkRateLimit(clientIp)) {
    return {
      status: 429,
      data: {
        error: 'Too many requests. Please slow down and try again in a minute.',
      },
    };
  }

  // 2. Body Validation
  if (!rawBody || typeof rawBody !== 'object') {
    return {
      status: 400,
      data: { error: 'Invalid request body. JSON object expected.' },
    };
  }

  const { message, history } = rawBody as ChatRequestBody;

  if (typeof message !== 'string' || message.trim().length === 0) {
    return {
      status: 400,
      data: { error: 'Message cannot be empty.' },
    };
  }

  const trimmedMessage = message.trim();
  if (trimmedMessage.length > 500) {
    return {
      status: 400,
      data: { error: 'Message exceeds the maximum limit of 500 characters.' },
    };
  }

  // Sanitize history (max 6 items, valid roles, length bounds)
  const sanitizedHistory: Array<{ role: 'user' | 'assistant'; content: string }> = [];
  if (Array.isArray(history)) {
    const recentHistory = history.slice(-6);
    for (const item of recentHistory) {
      if (
        item &&
        (item.role === 'user' || item.role === 'assistant') &&
        typeof item.content === 'string'
      ) {
        sanitizedHistory.push({
          role: item.role,
          content: item.content.trim().slice(0, 500),
        });
      }
    }
  }

  // 3. API Key Verification
  if (!process.env.GEMINI_API_KEY) {
    dotenv.config();
  }

  const apiKey = (process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY)?.trim();

  // If no Gemini API key configured, seamlessly answer using the smart local knowledge-base
  if (!apiKey || apiKey === 'your_gemini_api_key_here') {
    console.info(
      '[Ask Abir AI] No active GEMINI_API_KEY found in .env. Responding via smart local portfolio knowledge-base.'
    );
    const reply = generateLocalKnowledgeReply(trimmedMessage);
    return {
      status: 200,
      data: { reply },
    };
  }

  // 4. Model Selection with automatic legacy normalization
  const targetModel = resolveGeminiModel(process.env.GEMINI_MODEL);

  // 5. Build alternating conversation turns for Gemini
  const rawTurns: Array<{ role: 'user' | 'model'; text: string }> = [];
  for (const item of sanitizedHistory) {
    rawTurns.push({
      role: item.role === 'assistant' ? 'model' : 'user',
      text: item.content,
    });
  }
  rawTurns.push({
    role: 'user',
    text: trimmedMessage,
  });

  // Drop leading model turns if any
  while (rawTurns.length > 0 && rawTurns[0].role === 'model') {
    rawTurns.shift();
  }

  // Coalesce consecutive turns with the same role to adhere to Gemini alternating turns
  const contents: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = [];
  for (const turn of rawTurns) {
    const lastTurn = contents[contents.length - 1];
    if (lastTurn && lastTurn.role === turn.role) {
      lastTurn.parts.push({ text: turn.text });
    } else {
      contents.push({
        role: turn.role,
        parts: [{ text: turn.text }],
      });
    }
  }

  // 6. Gemini Client Request with Dual-Layer Fallback
  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: { timeout: 15000 },
    });

    const generateWithTimeout = async (modelName: string): Promise<string | undefined> => {
      const timeoutPromise = new Promise<never>((_, reject) => {
        const timer = setTimeout(() => {
          reject(new Error('TIMEOUT_EXCEEDED'));
        }, 15000);
        if (typeof timer.unref === 'function') {
          timer.unref();
        }
      });

      const completionPromise = ai.models.generateContent({
        model: modelName,
        contents,
        config: {
          systemInstruction: SYSTEM_PROMPT,
          temperature: 0.3,
          maxOutputTokens: 500,
        },
      });

      const response = await Promise.race([completionPromise, timeoutPromise]);
      return response.text?.trim();
    };

    let reply: string | undefined;

    try {
      reply = await generateWithTimeout(targetModel);
    } catch (initialErr: unknown) {
      console.warn(
        `[Ask Abir AI] Gemini API call with model "${targetModel}" encountered an issue:`,
        (initialErr as Error)?.message || initialErr
      );

      // Try fallback model if the requested model wasn't the default
      if (targetModel !== DEFAULT_GEMINI_MODEL) {
        try {
          console.info(`[Ask Abir AI] Retrying with default model "${DEFAULT_GEMINI_MODEL}"...`);
          reply = await generateWithTimeout(DEFAULT_GEMINI_MODEL);
        } catch (fallbackErr: unknown) {
          console.warn(
            `[Ask Abir AI] Default model retry also failed:`,
            (fallbackErr as Error)?.message || fallbackErr
          );
        }
      }
    }

    // If Gemini API succeeded and returned text, return it immediately
    if (reply && reply.trim().length > 0) {
      return {
        status: 200,
        data: { reply: reply.trim() },
      };
    }

    // If Gemini API returned empty or failed, seamlessly answer using the smart local knowledge-base
    console.info(
      '[Ask Abir AI] Seamlessly using smart local portfolio knowledge-base responder for 100% reliability.'
    );
    const localReply = generateLocalKnowledgeReply(trimmedMessage);
    return {
      status: 200,
      data: { reply: localReply },
    };
  } catch (err: unknown) {
    // Zero-fail guarantee: On ANY unexpected failure (timeout, network drop, credential issue),
    // always return a helpful, verified response from the smart local portfolio responder!
    console.warn(
      '[Ask Abir AI] Gemini API exception handled. Answering via smart local knowledge-base:',
      (err as Error)?.message || err
    );
    const localReply = generateLocalKnowledgeReply(trimmedMessage);
    return {
      status: 200,
      data: { reply: localReply },
    };
  }
}
