import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { axiosClient } from './src/utils/axiosClient'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  // server:{
  //   port:4500,
  //   proxy:{
  //     axiosClient:{
  //       target:'http://localhost:3000',
  //       changeOrigin:true
  //     }
  //   }
  // }
})
