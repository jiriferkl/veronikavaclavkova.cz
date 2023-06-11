// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-simple-sitemap',
    '@nuxtjs/robots',
  ],
  app: {
    head: {
      title: "Veronika Václavková - Grafický designer",
      meta: [
        { name: 'description', content: 'Ráda příjmu nové výzvy! 3DS Max, Unity, Substance 3D Painter, Photoshop, Illustrator, Figma..' },
        { name: 'og:type', content: 'website' },
        { name: 'og:url', content: 'https://veronikavaclavkova.cz/' },
        { name: 'og:title', content: 'Veronika Václavková - Grafický designer' },
        { name: 'og:description', content: 'Ráda příjmu nové výzvy! 3DS Max, Unity, Substance 3D Painter, Photoshop, Illustrator, Figma..' },
        { name: 'og:image', content: 'https://veronikavaclavkova.cz/ogimage.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://veronikavaclavkova.cz/' },
        { name: 'twitter:title', content: 'Veronika Václavková - Grafický designer' },
        { name: 'twitter:description', content: 'Ráda příjmu nové výzvy! 3DS Max, Unity, Substance 3D Painter, Photoshop, Illustrator, Figma..' },
        { name: 'twitter:image', content: 'https://veronikavaclavkova.cz/ogimage.png' },
      ],
    },
  },
  sitemap: {
    siteUrl: 'https://veronikavaclavkova.cz/',
  },
})
