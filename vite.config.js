import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    target: 'esnext',
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
  server: {
    port: 3000,
    open: true,
  },
})
