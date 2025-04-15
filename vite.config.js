import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/my-portfolio/', // ✅ 必須跟 GitHub repo 名稱一模一樣
  plugins: [react()],
})
