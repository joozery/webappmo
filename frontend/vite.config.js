import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: './', // ตั้งค่า base ให้เป็นแบบ relative สำหรับ assets
  plugins: [react()],
  build: {
    outDir: 'dist', // กำหนดโฟลเดอร์สำหรับผลลัพธ์การ build (Netlify จะใช้โฟลเดอร์นี้ในการ deploy)
    rollupOptions: {
      input: './index.html' // กำหนด entry point เป็น index.html
    }
  },
  server: {
    port: 3000, // ตั้งค่าพอร์ตของเซิร์ฟเวอร์ระหว่างการพัฒนา
    open: true // เปิดเบราว์เซอร์อัตโนมัติเมื่อรันเซิร์ฟเวอร์พัฒนา
  }
})
