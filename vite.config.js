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
        about: resolve(__dirname, 'about.html'), 
        groupSchools: resolve(__dirname, 'group-schools.html'), 
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

