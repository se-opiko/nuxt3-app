import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  strict: true,
  typeCheck: true,
  components: {
    global: true,
    dirs: ['~/components/common']
  },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
    server: {
      watch: {
        usePolling: true
      }
    }
  },
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    treeShake: true
  },
})
