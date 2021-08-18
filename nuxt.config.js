export default {
  /**
   * Rendering mode
   */
  mode: "universal",
  /**
   * Environment setting
   */
  env: {
    baseUrl: process.env.BASE_URL || "http://localhost:3000/",
    baseApiUrl: process.env.BASE_API_URL || "http://localhost:3000/api/",
    // reCaptchaV3ClientKey: ''
  },
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.META_TITLE || 'This is title',
    htmlAttrs: { lang: 'en' },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
   ** Global CSS
   */
  css: [
    'ant-design-vue/dist/antd.css',
    '~/assets/scss/vendors/bootstrap.min.4.5.2.css',
    '~/assets/scss/main.scss'
  ],

  /*
   * Doc: https://www.npmjs.com/package/@nuxtjs/style-resources
   */
  styleResources: {
    scss: ['./assets/scss/helpers/_variables.scss']
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/antd-ui',
    '~/plugins/axios',
    "~/plugins/api-service",
    { src: "~/plugins/bootstrap", mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/moment'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/style-resources',
    "@nuxtjs/axios",
    '@nuxtjs/auth-next',
    '@nuxtjs/sitemap',
    "@nuxtjs/pwa",
    [
      "nuxt-i18n",
      {
        locales: [
          {
            name: "Tiếng Việt",
            code: "vi",
            iso: "vi-VN",
            file: "vi.js"
          },
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "en.js"
          }
        ],
        loadLanguagesAsync: true,
        langDir: "languages/",
        lazy: true,
        // defaultLocale: "vi",
        seo: true
      }
    ],
    // [
    //   '@nuxtjs/recaptcha', {
    //     version: 3,
    //     size: 'normal',
    //     siteKey: ''
    //   }
    // ]
  ],

  /*
   ** Auth configuration
   * Doc: https://auth.nuxtjs.org/
   */
  auth: {
    redirect: {
      home: false,
      login: '/login',
      logout: '/',
      callback: '/login',
    },
    strategies: {}
  },

  /*
   ** Progressive Web Apps configuration
   * Doc: https://pwa.nuxtjs.org/
   */
  pwa: {
    icon: false,
    manifest: {
      lang: 'en',
      short_name: 'Nuxt',
      name: 'Demo_nuxt',
      start_url: '/',
      display: 'standalone',
      theme_color: '#00b5ad'
    },
    meta: {
      viewport: 'width=device-width, initial-scale=1',
      mobileApp: false,
      mobileAppIOS: false,
      /* Facebook options */
      ogSiteName: '',
      ogTitle: '',
      ogDescription: 'meta Facebook',
      ogImage: '',
      /* Twitter options */
      twitterCard: 'meta Twitter',
      twitterSite: '',
      twitterCreator: '',
    },
    workbox: {
      /* workbox options */
      // dev: false,
      // offlineStrategy: 'StaleWhileRevalidate',
      runtimeCaching: [
        {
          urlPattern: '',
          handler: 'cacheFirst',
          method: '',
          strategyOptions: {
            cacheName: '',
            cacheExpiration: {
              maxEntries: 100,
              maxAgeSeconds: 60 * 60 * 24 * 10 // 10 days
            }
          }
        }
      ]
    }
  },

  /*
   ** Sitemap configuration
   * Doc: https://sitemap.nuxtjs.org/
   */
  sitemap: {
    hostname: 'http://localhost:3000',
    lastmod: new Date(),
    gzip: true,
    // shortcut notation (basic)
    i18n: true,
    sitemaps: [
      // {
      //   path: '',
      //   routes: ['', '']
      // },
    ]
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.BASE_API_URL || "http://localhost:3000/"
  },

  /*
   ** Build configuration
   */
  build: {},

  /*
   ** Router configuration
   */
  router: {
    extendRoutes(routes, resolve) {
      // routes.push({
      //   path: '*',
      //   component: resolve(__dirname, 'pages/404.vue')
      // })
    }
  }
}
