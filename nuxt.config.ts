// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  spaLoadingTemplate:true,
  components: [
    {
      path: '~/components',
     pathPrefix: false,
    },
  ],
  
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "@element-plus/nuxt",
    "@vite-pwa/nuxt"
  ],
  

  
})