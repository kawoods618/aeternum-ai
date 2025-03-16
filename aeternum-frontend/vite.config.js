import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default {
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    allowedHosts: [
      'aeternum-ai-backend-kawoods618.replit.app',
      'db946abd-48b1-4785-88c2-f719f6eabb03-00-ido9euq3ietn.spock.replit.dev'
    ]
  }
}
