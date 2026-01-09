import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/ba-timeline/", // <--- QUAN TRỌNG: Phải trùng tên repository của bạn
})