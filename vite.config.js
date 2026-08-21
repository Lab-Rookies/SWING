import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Relative asset paths make the build work both at username.github.io
  // and at username.github.io/repository-name/.
  base: '/SWING/',
})
