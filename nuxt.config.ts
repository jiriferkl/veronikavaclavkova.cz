// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
  ],
  app: {
    head: {
      title: "Veronika Václavková - Grafický designer"
    },
  },
  image: {
    provider: 'ipx'
  }
})
