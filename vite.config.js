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
        contact: resolve(__dirname, 'contact.html'), 
        enquire: resolve(__dirname, 'enquire.html'), 
        latestNews: resolve(__dirname, 'laest-news.html'), 
        careers: resolve(__dirname, 'careers.html'),
        breburngardens: resolve(__dirname, 'braeburngardens.html'),
        whyUs: resolve(__dirname, 'why-us.html'),
        joinUs: resolve(__dirname, 'join-us.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

