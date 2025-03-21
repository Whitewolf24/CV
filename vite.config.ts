import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mkcert from 'vite-plugin-mkcert'
//import MillionLint from "@million/lint";


// https://vitejs.dev/config/
export default defineConfig({
  server: { https: false },
  plugins: [react(), mkcert()],
})
