// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  devtools: { enabled: true },
  routeRules: {
    // Homepage pre-rendered at build time
    '/': { prerender: true },
    // Product page generated on-demand, revalidates in background
    '/auth/**': { swr: true },
    // Blog post generated on-demand once until next deploy
    '/blog/**': { isr: true },
    // Admin dashboard renders only on client-side
    '/admin/**': { ssr: false },
    // Add cors headers on API routes
    '/api/**': { cors: true },
    // Redirects legacy urls
    '/dashboard': { redirect: '/' }
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  // routeRules: {
  //   // all routes (by default) will be revalidated every 60 seconds, in the background
  //   // '/**': { isr: 60 },
  //   // this page will be generated on demand and then cached permanently
  //   // '/static': { isr: true },
  //   // this page is generated at build time and cached permanently
  //   '/*': { prerender: true },
  //   // this page will be always fresh
  //   //  '/dynamic': { isr: false },
  //   // you can do lots more with route rules too!
  //   // '/redirect': { redirect: '/static' },
  //   // '/headers': { headers: { 'x-magic-of': 'nuxt and vercel' } },
  //   // '/spa': { ssr: false },
  // },
  // // build: {

  // // },
  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Nuxt Vite PWA',
      short_name: 'NuxtVitePWA',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },


  // app: {
  //   head: {
  //     charset: 'utf-8',
  //     viewport: 'width=device-width, initial-scale=1',
  //   }
  // },
  modules: [
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "@nuxtjs/google-fonts",
    "@element-plus/nuxt",
    "@vite-pwa/nuxt"
  ],



})