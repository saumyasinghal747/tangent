import colors from 'vuetify/es5/util/colors'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  //ssr: false,
  generate: {
    fallback: "404.html"
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - Tangent',
    title: 'Tangent',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name:'og:title', hid:'og:title',content: 'Tangent - 3D Graphing Calculator'},
      { name:'og:description', hid:'og:description', content:'A 3D graphing calculator that will serve your 3D graphing needs.'},
      { name:'og:image',hid:'og:image', content:'/tangentflower.png'},
      { name: 'og:site_name',hid:'og:site_name', content: 'Tangent - YMath.io'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel:'style', href:'/css/all.css'}
    ],
    script:[
      {src:'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js'}
    ]
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src:'~/plugins/mathquill.js', mode:'client'},
    {src:'~/plugins/jquery.js', mode:'client'},
    {src:'~/plugins/logging.js', mode:'client'},
    {src:'~/plugins/vue-threejs.js', mode:'client'},

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  router: {
    // tangent.ymath.io
    //base: '/tangent/'
  },
  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['grapheme']
  }
}
