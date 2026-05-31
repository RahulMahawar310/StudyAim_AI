import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
 optimizeDeps: {
    include: ['recharts'],
    force: true,         // force re-bundle on next start
  },
  build: {
    commonjsOptions: {
      include: [/recharts/, /node_modules/],
    },
  },
})
