import { defineNuxtConfig } from "nuxt";

export default defineNuxtConfig({
  buildModules: ["@pinia/nuxt"],
  modules: ["@nuxtjs/color-mode"],
  css: [
    "primevue/resources/themes/md-dark-indigo/theme.css",
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
  colorMode: {
    preference: "dark",
    fallback: "light",
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
});
