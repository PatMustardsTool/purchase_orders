import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const root = path.resolve(import.meta.dirname, 'src')
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': root
    }
  }
})