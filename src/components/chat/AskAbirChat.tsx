import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Sparkles, RefreshCw, AlertCircle, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { SafeMarkdown } from './SafeMarkdown';
import { personalInfo } from '../../data/portfolioData';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isError?: boolean;
}

const SUGGESTED_QUESTIONS = [
  'Who is Ifta Abir?',
  'What projects has Abir built?',
  'What technologies does Abir use?',
  "What are Abir's career goals?",
  'How can I contact Abir?',
];

const INITIAL_MESSAGE: Message = {
  id: 'welcome-1',
  role: 'assistant',
  content: `Hello! I'm **Ask Abir AI**, Ifta Abir's personal portfolio assistant.\n\nI can answer questions about Abir's software engineering background, university studies at Daffodil International University, technical skills, projects, and contact channels.\n\nHow can I help you today?`,
  timestamp: new Date(),
};

export const AskAbirChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorBanner, setErrorBanner] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  // Auto-scroll to bottom of messages
  const scrollToBottom = (behavior: ScrollBehavior = 'smooth') => {
    messagesEndRef.current?.scrollIntoView({ behavior });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom('auto');
      setTimeout(() => inputRef.current?.focus(), 150);
    } else {
      launcherRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      scrollToBottom('smooth');
    }
  }, [messages, isLoading]);

  // Handle ESC key to close chat
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    if (query.length > 500) {
      setErrorBanner('Message must be 500 characters or fewer.');
      return;
    }

    setErrorBanner(null);
    setInput('');

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: new Date(),
    };

    const nextMessages = [...messages, userMessage];
    setMessages(nextMessages);
    setIsLoading(true);

    try {
      // Bounded history: send only the last 6 messages
      const historyPayload = nextMessages
        .filter((m) => !m.isError)
        .slice(-6)
        .map((m) => ({
          role: m.role,
          content: m.content,
        }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          history: historyPayload,
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.reply) {
        const errorText =
          data?.error ||
          (response.status === 503
            ? 'The AI assistant is currently offline. Please reach out to Abir directly on WhatsApp.'
            : 'Sorry, I encountered an issue processing your request. Please try again.');

        const errorMessage: Message = {
          id: `error-${Date.now()}`,
          role: 'assistant',
          content: errorText,
          timestamp: new Date(),
          isError: true,
        };
        setMessages((prev) => [...prev, errorMessage]);
      } else {
        const assistantMessage: Message = {
          id: `assistant-${Date.now()}`,
          role: 'assistant',
          content: data.reply,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
      }
    } catch {
      const networkErrorMessage: Message = {
        id: `net-err-${Date.now()}`,
        role: 'assistant',
        content:
          'Unable to connect to the assistant service. Please check your network or contact Abir directly on WhatsApp.',
        timestamp: new Date(),
        isError: true,
      };
      setMessages((prev) => [...prev, networkErrorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleRetryLast = () => {
    // Find last user message
    const lastUserMsg = [...messages].reverse().find((m) => m.role === 'user');
    if (lastUserMsg) {
      handleSendMessage(lastUserMsg.content);
    }
  };

  const resetConversation = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorBanner(null);
  };

  return (
    <>
      {/* 1. Floating Chat Launcher (Bottom-Right) */}
      {!isOpen && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 group flex items-center gap-3 px-4 py-3 rounded-full bg-[#1F1F1F] hover:bg-[#252525] border border-dark-border hover:border-accent-orange/60 text-white shadow-panel hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
          aria-label="Open Ask Abir AI chat"
          title="Open Ask Abir AI chat"
        >
          <div className="relative w-8 h-8 rounded-full bg-accent-orange flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform">
            <Bot className="w-4 h-4" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#1F1F1F]" />
          </div>
          <div className="text-left hidden sm:block">
            <span className="block text-xs font-bold uppercase tracking-wider text-white">
              Ask Abir AI
            </span>
            <span className="block text-[10px] text-content-muted font-mono leading-none">
              Portfolio Assistant
            </span>
          </div>
        </button>
      )}

      {/* 2. Floating Chat Modal / Drawer */}
      {isOpen && (
        <section
          aria-label="Ask Abir AI chat window"
          className="fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 w-[calc(100vw-1.5rem)] sm:w-[410px] h-[560px] max-h-[85vh] flex flex-col rounded-2xl bg-[#171717] border border-dark-border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-5 py-4 bg-[#202020] border-b border-dark-border flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl bg-accent-orange/15 border border-accent-orange/30 flex items-center justify-center text-accent-orange">
                <Bot className="w-5 h-5" />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#202020]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-sm font-bold text-white tracking-tight">Ask Abir AI</h3>
                  <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-accent-orange/20 text-accent-orange">
                    BETA
                  </span>
                </div>
                <p className="text-xs text-content-muted">Abir's personal portfolio assistant</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={resetConversation}
                className="p-1.5 rounded-lg text-content-secondary hover:text-white hover:bg-dark-hover transition-colors"
                aria-label="Reset conversation"
                title="Reset conversation"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-content-secondary hover:text-white hover:bg-dark-hover transition-colors focus:outline-none focus:ring-2 focus:ring-accent-orange"
                aria-label="Close Ask Abir AI chat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick WhatsApp Action Strip */}
          <div className="px-4 py-2 bg-[#1B1B1B] border-b border-dark-border/60 flex items-center justify-between text-xs flex-shrink-0">
            <span className="text-content-secondary flex items-center gap-1.5 text-[11px]">
              <Sparkles className="w-3.5 h-3.5 text-accent-orange" />
              <span>Need a fast reply?</span>
            </span>
            <a
              href={personalInfo.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-bold text-accent-orange hover:text-white transition-colors text-[11px] uppercase tracking-wider"
              aria-label="Contact Abir directly on WhatsApp"
            >
              <WhatsAppIcon className="w-3 h-3" />
              <span>Contact Abir on WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Scrollable Message List */}
          <div
            className="flex-1 p-4 overflow-y-auto space-y-3.5 focus:outline-none"
            tabIndex={0}
            role="log"
            aria-live="polite"
            aria-label="Chat history"
          >
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl ${
                      isUser
                        ? 'bg-accent-orange text-white rounded-tr-xs shadow-sm font-sans'
                        : msg.isError
                        ? 'bg-[#261E1E] border border-red-500/30 text-red-200 rounded-tl-xs'
                        : 'bg-[#202020] border border-dark-border text-white rounded-tl-xs shadow-sm'
                    }`}
                  >
                    {msg.isError ? (
                      <div className="flex items-start gap-2 text-xs">
                        <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <p className="leading-relaxed">{msg.content}</p>
                          <button
                            type="button"
                            onClick={handleRetryLast}
                            className="mt-2 inline-flex items-center gap-1 text-[11px] font-bold text-accent-orange hover:text-white underline cursor-pointer"
                          >
                            <RefreshCw className="w-3 h-3" />
                            <span>Retry question</span>
                          </button>
                        </div>
                      </div>
                    ) : isUser ? (
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <SafeMarkdown content={msg.content} />
                    )}
                  </div>
                  <span className="text-[10px] text-content-muted mt-1 px-1 font-mono">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              );
            })}

            {/* Typing / Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2">
                <div className="p-3.5 rounded-2xl rounded-tl-xs bg-[#202020] border border-dark-border flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-accent-orange animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-2 h-2 rounded-full bg-accent-orange animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-2 h-2 rounded-full bg-accent-orange animate-bounce" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions (only visible if conversation has only initial welcome) */}
          {messages.length === 1 && (
            <div className="px-4 py-2 bg-[#1A1A1A] border-t border-dark-border/60 flex-shrink-0">
              <span className="text-[10px] font-mono uppercase text-content-muted block mb-1.5">
                Suggested questions:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {SUGGESTED_QUESTIONS.map((q, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSendMessage(q)}
                    disabled={isLoading}
                    className="px-2.5 py-1 rounded-full text-xs bg-[#242424] hover:bg-[#2C2C2C] border border-dark-border hover:border-accent-orange/40 text-content-secondary hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {q}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Error Banner */}
          {errorBanner && (
            <div className="px-4 py-1.5 bg-red-950/40 border-t border-red-500/30 text-red-300 text-xs flex items-center justify-between">
              <span>{errorBanner}</span>
              <button
                type="button"
                onClick={() => setErrorBanner(null)}
                className="text-red-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {/* Input & Controls */}
          <div className="p-3 bg-[#202020] border-t border-dark-border flex-shrink-0">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="flex items-end gap-2 bg-[#171717] rounded-xl border border-dark-border focus-within:border-accent-orange/60 px-3 py-2 transition-colors"
            >
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                maxLength={500}
                placeholder="Ask about Abir's skills, projects, or background..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-sm text-white placeholder-content-muted resize-none focus:outline-none max-h-24 leading-normal disabled:opacity-50"
                aria-label="Message input"
              />

              <div className="flex items-center gap-1.5 flex-shrink-0 pb-0.5">
                {input.length > 400 && (
                  <span className="text-[10px] font-mono text-content-muted">
                    {input.length}/500
                  </span>
                )}
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="w-8 h-8 rounded-lg bg-accent-orange hover:bg-accent-orange-hover disabled:opacity-40 disabled:cursor-not-allowed text-white flex items-center justify-center transition-all focus:outline-none focus:ring-2 focus:ring-accent-orange"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
            <div className="mt-1.5 flex items-center justify-between text-[10px] text-content-muted px-1 font-mono">
              <span>Enter to send · Shift+Enter for new line</span>
              <span>Ask Abir AI v1.0</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
