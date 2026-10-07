import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api-phonebook': { target: 'http://127.0.0.1:3001', rewrite: path => path.replace(/^\/api-phonebook/, '') },
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: resolve(import.meta.dirname, 'index.html'),
        diagrams: resolve(import.meta.dirname, 'part0/index.html'),
        courseinfo: resolve(import.meta.dirname, 'part1/courseinfo/index.html'),
        unicafe: resolve(import.meta.dirname, 'part1/unicafe/index.html'),
        anecdotes: resolve(import.meta.dirname, 'part1/anecdotes/index.html'),
        courses: resolve(import.meta.dirname, 'part2/courseinfo/index.html'),
        phonebook: resolve(import.meta.dirname, 'part2/phonebook/index.html'),
        countries: resolve(import.meta.dirname, 'part2/countries/index.html'),
      },
    },
  },
})

