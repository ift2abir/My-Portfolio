import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import { handleChatRequest } from './server/chatHandler';

// Load server-side environment variables from .env if present
dotenv.config();

function chatApiPlugin(): Plugin {
  return {
    name: 'ask-abir-chat-api',
    configureServer(server) {
      server.middlewares.use('/api/chat', async (req, res) => {
        if (req.method !== 'POST') {
          res.statusCode = 405;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('Allow', 'POST');
          res.end(JSON.stringify({ error: 'Method Not Allowed. Use POST.' }));
          return;
        }

        const clientIp =
          (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
          req.socket?.remoteAddress ||
          '127.0.0.1';

        const chunks: Buffer[] = [];
        let totalSize = 0;
        const MAX_SIZE = 32 * 1024; // 32 KB limit

        let exceeded = false;
        req.on('data', (chunk: Buffer) => {
          if (exceeded) return;
          totalSize += chunk.length;
          if (totalSize > MAX_SIZE) {
            exceeded = true;
            res.statusCode = 413;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Payload Too Large. Max size is 32 KB.' }));
            req.destroy();
            return;
          }
          chunks.push(chunk);
        });

        req.on('end', async () => {
          if (exceeded) return;
          try {
            const raw = Buffer.concat(chunks).toString('utf-8').replace(/^\uFEFF/, '').trim();
            const body = raw ? JSON.parse(raw) : {};
            const result = await handleChatRequest(body, clientIp);

            res.statusCode = result.status;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(result.data));
          } catch {
            res.statusCode = 400;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: 'Malformed JSON payload.' }));
          }
        });
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), chatApiPlugin()],
  server: {
    port: 3000,
    open: true,
  },
});
