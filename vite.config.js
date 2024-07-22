import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 3000,  // Use the PORT environment variable if available
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
