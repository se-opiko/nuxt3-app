import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  strict: true,
  typeCheck: true,
  components: {
    global: true,
    dirs: ['~/components']
  },
})
