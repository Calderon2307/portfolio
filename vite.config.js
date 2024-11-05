import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': new URL('./src', import.meta.url).pathname,
      '@assets': new URL('./src/assets', import.meta.url).pathname,
      '@components': new URL('./src/components', import.meta.url).pathname,
      '@context': new URL('./src/context', import.meta.url).pathname,
      '@data': new URL('./src/data', import.meta.url).pathname,
      '@pages': new URL('./src/pages', import.meta.url).pathname,
      '@utils': new URL('./src/utils', import.meta.url).pathname,
    },
  },
});
