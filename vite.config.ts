import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      // source: https://stackoverflow.com/a/66515600
      '@': path.resolve(__dirname, './src'),
    },
  },
})
