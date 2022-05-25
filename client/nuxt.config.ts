import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["@pinia/nuxt"],
  css: [
    "primevue/resources/themes/saga-blue/theme.css",
    "primevue/resources/primevue.css",
    "primeicons/primeicons.css",
  ],
  build: {},
  publicRuntimeConfig: {
    apiUrlBrowser: process.env.API_URL_BROWSER,
  },
  privateRuntimeConfig: {
    apiUrlServer: process.env.API_URL_SERVER,
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
});
