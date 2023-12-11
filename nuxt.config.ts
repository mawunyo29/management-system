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
    // '/**': { isr: 60 },
    // this page will be generated on demand and then cached permanently
    // '/static': { isr: true },
    // this page is generated at build time and cached permanently
    '/*': { prerender: true },
    // this page will be always fresh
    //  '/dynamic': { isr: false },
    // you can do lots more with route rules too!
    // '/redirect': { redirect: '/static' },
    // '/headers': { headers: { 'x-magic-of': 'nuxt and vercel' } },
    // '/spa': { ssr: false },
  },
  // build: {
    
  // },
  pwa: {
    manifest: {
      name: '/',
      short_name: 'home',
      description: 'Supporters',
      lang: 'en',
      theme_color: '#ffffff',
      display: 'standalone',
    },
    workbox: {
      runtimeCaching: [
        {
          urlPattern: 'https://management-system-olive.vercel.app/.*',
          handler: 'CacheFirst',
          method: 'GET',
          
        },
        {
          urlPattern: 'https://fonts.gstatic.com/.*',
          handler: 'CacheFirst',
          method: 'GET',
         
        },
       
        
      ],
    },
  
  
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