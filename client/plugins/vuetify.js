// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import colors from 'vuetify/lib/util/colors'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: colors.blue.darken1, // #E53935
                    secondary: colors.grey.lighten2, // #FFCDD2
                    error: colors.red.darken1, // #FFCDD2
                    accent: colors.amber.lighten2, // #FFCDD2
                },
            },
        },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})