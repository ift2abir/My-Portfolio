import React from 'react';

interface SafeMarkdownProps {
  content: string;
}

/**
 * Safely parses a limited subset of Markdown (bold, italic, inline code, links, and bullet points)
 * directly into React elements without using dangerouslySetInnerHTML, completely preventing XSS.
 */
export const SafeMarkdown: React.FC<SafeMarkdownProps> = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div className="space-y-2 text-sm leading-relaxed break-words">
      {lines.map((line, lineIdx) => {
        const trimmed = line.trim();

        // Empty line becomes a small spacer
        if (!trimmed) {
          return <div key={lineIdx} className="h-1.5" />;
        }

        // Bullet point
        if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
          return (
            <div key={lineIdx} className="flex items-start gap-2 ml-1">
              <span className="text-accent-orange font-bold text-base leading-none select-none">•</span>
              <span className="flex-1">{parseInline(trimmed.substring(2))}</span>
            </div>
          );
        }

        // Numbered list item: e.g. "1. "
        const numMatch = trimmed.match(/^(\d+)\.\s+(.*)$/);
        if (numMatch) {
          return (
            <div key={lineIdx} className="flex items-start gap-2 ml-1">
              <span className="text-accent-orange font-mono text-xs font-bold leading-relaxed select-none">
                {numMatch[1]}.
              </span>
              <span className="flex-1">{parseInline(numMatch[2])}</span>
            </div>
          );
        }

        // Standard paragraph line
        return <p key={lineIdx}>{parseInline(line)}</p>;
      })}
    </div>
  );
};

function parseInline(text: string): React.ReactNode[] {
  // Regex to split on bold (**), italic (*), inline code (`), and markdown links ([text](url))
  const tokenRegex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const parts = text.split(tokenRegex);

  return parts.map((part, idx) => {
    if (!part) return null;

    // Bold: **text**
    if (part.startsWith('**') && part.endsWith('**') && part.length >= 4) {
      return (
        <strong key={idx} className="font-bold text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }

    // Italic: *text*
    if (part.startsWith('*') && part.endsWith('*') && part.length >= 2) {
      return (
        <em key={idx} className="italic text-content-secondary">
          {part.slice(1, -1)}
        </em>
      );
    }

    // Inline Code: `code`
    if (part.startsWith('`') && part.endsWith('`') && part.length >= 2) {
      return (
        <code
          key={idx}
          className="px-1.5 py-0.5 rounded bg-[#2A2A2A] text-accent-orange font-mono text-xs border border-dark-border"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    // Link: [label](url)
    const linkMatch = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      const href = linkMatch[2];
      // Basic URL protocol safety (support web links, email, and internal site file links)
      const isSafeProtocol =
        href.startsWith('https://') ||
        href.startsWith('http://') ||
        href.startsWith('mailto:') ||
        href.startsWith('/');
      if (isSafeProtocol) {
        return (
          <a
            key={idx}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent-orange underline decoration-accent-orange/50 hover:text-white hover:decoration-white transition-colors font-medium inline-flex items-center gap-0.5"
          >
            {linkMatch[1]}
          </a>
        );
      }
      return <span key={idx}>{linkMatch[1]}</span>;
    }

    // Raw text
    return <span key={idx}>{part}</span>;
  });
}
