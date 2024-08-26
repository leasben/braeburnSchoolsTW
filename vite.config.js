import { defineConfig } from 'vite'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  root: '.', 
  build: {
    sourcemap: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'), 
        activities: resolve(__dirname, 'activities.html'), 
        trails: resolve(__dirname, 'trails.html'),
        about: resolve(__dirname, 'about.html'),
        contact: resolve(__dirname, 'contact-us.html')
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

