import { createVuetify, ThemeDefinition } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

export default defineNuxtPlugin(nuxtApp => {
  const myCustomeTheme: ThemeDefinition = {
    dark: false,
    colors: {
      primary: '#9AC1F0',
      menu: '#45496A',
      warn: '#FB0C0C'
    }
  }
  const vuetify = createVuetify({
  theme: {
    defaultTheme: 'myCustomeTheme',
    themes: {
      myCustomeTheme
    }
  },
    components,
    directives,
  })

  nuxtApp.vueApp.use(vuetify)
})