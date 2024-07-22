import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Ensure the server binds to 0.0.0.0
    port: 3000,  // Use the PORT environment variable if available
    open: true,
  },
  build: {
    outDir: 'dist',
  },
});
