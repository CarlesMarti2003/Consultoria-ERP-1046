import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/Consultoria-ERP-1046/',
  plugins: [react(), tailwindcss()],
})
