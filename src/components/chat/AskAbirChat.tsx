import React, { useState, useEffect, useRef } from 'react';
import { X, Send, Bot, Sparkles, RefreshCw, ArrowUpRight } from 'lucide-react';
import { WhatsAppIcon } from '../icons/WhatsAppIcon';
import { SafeMarkdown } from './SafeMarkdown';
import { personalInfo } from '../../data/portfolioData';
import { generateLocalChatResponse } from './localChatKnowledge';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const SUGGESTED_QUESTIONS = [
  'Who is Ifta Abir?',
  "What is Abir's education?",
  'What skills does Abir have?',
  'What projects has Abir built?',
  'How can I contact Abir?',
];

const INITIAL_MESSAGE: Message = {
  id: 'welcome-1',
  role: 'assistant',
  content: `Hello! I'm **Ask Abir AI**, Ifta Abir's personal portfolio assistant.\n\nI can answer questions about Abir's software engineering background, university studies at Daffodil International University, technical skills (Python, C, HTML, CSS, React, Git), projects, and contact channels.\n\nHow can I help you today?`,
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

  const handleSendMessage = (textToSend?: string) => {
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

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Smooth realistic conversational typing delay (280ms) for natural UI feel
    setTimeout(() => {
      const reply = generateLocalChatResponse(query);
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: reply,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 280);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetConversation = () => {
    setMessages([INITIAL_MESSAGE]);
    setErrorBanner(null);
  };

  return (
    <>
      {/* 1. Floating Chat Launcher (Bottom-Right) - Compact on Mobile, Pill on Desktop */}
      {!isOpen && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 group flex items-center gap-2.5 p-2.5 sm:px-4 sm:py-3 rounded-full bg-[#1F1F1F] hover:bg-[#252525] border border-dark-border hover:border-accent-orange/60 text-white shadow-panel hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-orange"
          aria-label="Open Ask Abir AI chat"
          title="Open Ask Abir AI chat"
        >
          <div className="relative w-9 h-9 sm:w-8 sm:h-8 rounded-full bg-accent-orange flex items-center justify-center text-white shadow-sm group-hover:scale-105 transition-transform flex-shrink-0">
            <Bot className="w-4 h-4 sm:w-4 sm:h-4" />
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

      {/* Mobile Backdrop Overlay when chat is open */}
      {isOpen && (
        <div
          className="sm:hidden fixed inset-0 bg-black/60 backdrop-blur-xs z-50"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 2. Floating Chat Modal / Drawer - Clean App-like Placement on Mobile */}
      {isOpen && (
        <section
          aria-label="Ask Abir AI chat window"
          className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:right-6 sm:bottom-6 z-50 sm:w-[420px] h-[540px] max-h-[84vh] flex flex-col rounded-2xl bg-[#171717] border border-dark-border shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        >
          {/* Header */}
          <div className="px-4 py-3.5 sm:px-5 sm:py-4 bg-[#202020] border-b border-dark-border flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5 sm:gap-3">
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-accent-orange/15 border border-accent-orange/30 flex items-center justify-center text-accent-orange">
                <Bot className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="absolute bottom-0 right-0 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-emerald-400 border-2 border-[#202020]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">Ask Abir AI</h3>
                  <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-mono font-bold bg-accent-orange/20 text-accent-orange">
                    SMART AI
                  </span>
                </div>
                <p className="text-[11px] sm:text-xs text-content-muted">Instant verified portfolio assistant</p>
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
          <div className="px-3.5 py-2 sm:px-4 sm:py-2 bg-[#1B1B1B] border-b border-dark-border/60 flex items-center justify-between text-xs flex-shrink-0">
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
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

          {/* Scrollable Message List */}
          <div
            className="flex-1 p-3.5 sm:p-4 overflow-y-auto space-y-3 sm:space-y-3.5 focus:outline-none"
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
                    className={`max-w-[90%] sm:max-w-[88%] p-3 sm:p-3.5 rounded-2xl ${
                      isUser
                        ? 'bg-accent-orange text-white rounded-tr-xs shadow-sm font-sans'
                        : 'bg-[#202020] border border-dark-border text-white rounded-tl-xs shadow-sm'
                    }`}
                  >
                    {isUser ? (
                      <p className="text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
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
                <div className="p-3 sm:p-3.5 rounded-2xl rounded-tl-xs bg-[#202020] border border-dark-border flex items-center gap-1.5">
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
            <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#1A1A1A] border-t border-dark-border/60 flex-shrink-0">
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
          <div className="p-2.5 sm:p-3 bg-[#202020] border-t border-dark-border flex-shrink-0">
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
                placeholder="Ask about Abir's skills, education, projects..."
                disabled={isLoading}
                className="flex-1 bg-transparent text-xs sm:text-sm text-white placeholder-content-muted resize-none focus:outline-none max-h-20 sm:max-h-24 leading-normal disabled:opacity-50"
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
              <span className="hidden sm:inline">Enter to send · Shift+Enter for new line</span>
              <span className="sm:hidden">Tap send icon</span>
              <span className="text-emerald-400">● 100% Reliable · Client AI</span>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
