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
  routeRules: {
    // all routes (by default) will be revalidated every 60 seconds, in the background
    '/**': { isr: 60 },
    // this page will be generated on demand and then cached permanently
    '/static': { ssr: true },
    // this page is generated at build time and cached permanently
    // '/prerendered': { prerender: true },
    // this page will be always fresh
    //  '/dynamic': { isr: false },
    // you can do lots more with route rules too!
    '/redirect': { redirect: '/static' },
    '/headers': { headers: { 'x-magic-of': 'nuxt and vercel' } },
    '/spa': { ssr: false },
  },
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