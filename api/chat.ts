import type { IncomingMessage, ServerResponse } from 'http';
import { handleChatRequest } from '../server/chatHandler';

interface CustomRequest extends IncomingMessage {
  body?: unknown;
}

export default async function handler(req: CustomRequest, res: ServerResponse) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Allow', 'POST');
    res.end(JSON.stringify({ error: 'Method Not Allowed. Use POST.' }));
    return;
  }

  // Get Client IP
  const clientIp =
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
    req.socket.remoteAddress ||
    '127.0.0.1';

  try {
    let bodyData: unknown = req.body;

    // If body is not yet parsed by platform
    if (!bodyData && typeof req.on === 'function') {
      const chunks: Buffer[] = [];
      let totalSize = 0;
      const MAX_SIZE = 32 * 1024; // 32 KB limit

      await new Promise<void>((resolve, reject) => {
        req.on('data', (chunk: Buffer) => {
          totalSize += chunk.length;
          if (totalSize > MAX_SIZE) {
            reject(new Error('PAYLOAD_TOO_LARGE'));
            return;
          }
          chunks.push(chunk);
        });
        req.on('end', () => {
          const raw = Buffer.concat(chunks).toString('utf-8').replace(/^\uFEFF/, '').trim();
          try {
            bodyData = raw ? JSON.parse(raw) : {};
            resolve();
          } catch {
            reject(new Error('INVALID_JSON'));
          }
        });
        req.on('error', reject);
      });
    }

    const result = await handleChatRequest(bodyData, clientIp);

    res.statusCode = result.status;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(result.data));
  } catch (err: unknown) {
    if (err instanceof Error && err.message === 'PAYLOAD_TOO_LARGE') {
      res.statusCode = 413;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Payload Too Large. Max size is 32 KB.' }));
      return;
    }

    if (err instanceof Error && err.message === 'INVALID_JSON') {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Malformed JSON payload.' }));
      return;
    }

    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Internal Server Error' }));
  }
}
