import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  publicRuntimeConfig: {
    apiUrlBrowser: process.env.API_URL_BROWSER,
  },
  privateRuntimeConfig: {
    apiUrlServer: process.env.API_URL_SERVER,
  }
})