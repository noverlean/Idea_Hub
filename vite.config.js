import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components' : path.resolve(__dirname, 'src/components'),
      '@css' : path.resolve(__dirname, 'src/styles'),
      '@assets' : path.resolve(__dirname, 'src/assets'),
      '@content' : path.resolve(__dirname, 'src/content'),
      '@contexts' : path.resolve(__dirname, 'src/contexts'),
      '@hooks' : path.resolve(__dirname, 'src/hooks'),
    }
  }
})
