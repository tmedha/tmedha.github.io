import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Published at https://tmedha.github.io/Portfolio — assets must resolve
  // under the /Portfolio/ sub-path on GitHub Pages.
  base: '/Portfolio/',
  plugins: [react(), tailwindcss()],
})
