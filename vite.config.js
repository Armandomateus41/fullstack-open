import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        diagrams: resolve(import.meta.dirname, 'part0/index.html'),
        courseinfo: resolve(import.meta.dirname, 'part1/courseinfo/index.html'),
        unicafe: resolve(import.meta.dirname, 'part1/unicafe/index.html'),
        anecdotes: resolve(import.meta.dirname, 'part1/anecdotes/index.html'),
      },
    },
  },
})

