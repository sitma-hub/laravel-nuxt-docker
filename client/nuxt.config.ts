import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  css: [
    'vuetify/lib/styles/main.sass',
    'mdi/css/materialdesignicons.min.css',
  ],
  build: {
    transpile: ['vuetify'],
  },
  publicRuntimeConfig: {
    apiUrlBrowser: process.env.API_URL_BROWSER,
  },
  privateRuntimeConfig: {
    apiUrlServer: process.env.API_URL_SERVER,
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})