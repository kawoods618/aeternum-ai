import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    hmr: { overlay: false },
    allowedHosts: [
      'db946abd-48b1-4785-88c2-f719f6eabb03-00-ido9euq3ietn.spock.replit.dev'
    ]
  }
});