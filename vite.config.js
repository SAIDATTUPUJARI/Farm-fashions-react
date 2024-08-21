import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    fs: {
      allow: [
        './', // Allows serving files from the project root
        'C:/Users/PUJARI SAI DATTHU/node_modules' // Allows serving from node_modules
      ]
    }
  }
})
