// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  app: {
    head: {
      title: 'Luis',
      meta: [
        { name: 'description', content: 'Luis' }
      ],
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ]
    }
  },
  alias: {
    "@": "../src",
  },
  dir: {
    pages: "./src/app/routes",
    layouts: "./src/app/layouts",
  },
  css: ["@/app/styles/index.scss"],
})
