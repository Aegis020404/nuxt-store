export default {
  head: {
    title: 'nuxt-store',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'store' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap' },
      {rel: "preconnect", href: "https://fonts.googleapis.com"},
      {rel: "preconnect" ,href: "https://fonts.gstatic.com",crossorigin:true },
      {href: "https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap" ,rel: "stylesheet"}
    ]
  },

  css: [
    '~assets/styles/_normalize.css',
    '~assets/styles/index.sass'
  ],


  plugins: [],
  components: true,
  build: {
  }
}
