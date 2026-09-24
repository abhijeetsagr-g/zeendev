import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// base './' keeps asset URLs relative so the site works on GitHub Pages
// project sites (served under /owner/repo/) without any repo-name config.
export default defineConfig({
  plugins: [react()],
  base: './',
})
