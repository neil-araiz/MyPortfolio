import path from "path";
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['@vercel/analytics/react'],
  },
  build: {
    rollupOptions: {
      external: ['@vercel/analytics/react'],
    },
  },
});
