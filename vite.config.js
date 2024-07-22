import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import envCompatible from 'vite-plugin-env-compatible';

export default defineConfig({
  plugins: [react(), envCompatible()],
  server: {
    port: process.env.PORT || 3000,  // Use the PORT environment variable if available
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
