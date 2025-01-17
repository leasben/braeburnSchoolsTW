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
        latestNews: resolve(__dirname, 'latest-news.html'), 
        careers: resolve(__dirname, 'careers.html'),
        breburngardens: resolve(__dirname, 'braeburngardens.html'),
        whyUs: resolve(__dirname, 'why-us.html'),
        joinUs: resolve(__dirname, 'join-us.html'),
        learnWithUs: resolve(__dirname, 'learn-with-us.html'),
        latestNewsEvents: resolve(__dirname, 'latest-news-events.html'),
        bbGardensEnquire: resolve(__dirname, 'garden-estate-enquire.html'),
        bbGardensContact: resolve(__dirname, 'garden-estate-contact.html'),
        bbGardensExperience: resolve(__dirname, 'braeburn-experience.html'),
        contentPage: resolve(__dirname, 'content-page.html'),
        bgeContentPage: resolve(__dirname, 'bge-content-page.html'),
      },
      output: {
        dir: 'dist', // Output directory for the build
       
      },
    },
  },
})

