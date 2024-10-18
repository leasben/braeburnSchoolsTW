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
        schools: resolve(__dirname, 'schools.html'),
        about: resolve(__dirname, 'about.html'),
        newsAndEvents: resolve(__dirname, 'schools-and-events.html'),
        professionalOpportunities: resolve(__dirname, 'professional-opportunities.html'),
        apply: resolve(__dirname, 'apply.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

