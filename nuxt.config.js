const WebpackBar = require('webpackbar')
require('dotenv').config()
const path = process.env.NUXT_ENV || ''

module.exports = {
    /*
    ** Headers of the page
    */
    head: {
      title: 'nuxt',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Nuxt.js project' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css' },
      ]
    },
    /*
    ** Customize the progress bar color
    */
    loading: { color: '#3B8070' },
    /**
     * Gobal CSS import
     */
    css: [
    ],
    env: {
      basePath: `${path}`,
      baseURL: (process.env.BASE_URL || 'http://localhost:3005') + `/${path}`
    },
    /**
     * plugins
     */
    plugins: [
        '~/plugins/element-ui'
    ],
    srcDir: 'src-nuxt/',
    /*
    ** Build configuration
    */
    build: {
      vendor: ['babel-polyfill', 'axios', '~/plugins/element-ui.js'],
      extractCSS: true,
      /*
      ** Run ESLint on save
      */
      extend (config, { isDev, isClient }) {
        if (isDev && isClient) {
          config.module.rules.push({
            enforce: 'pre',
            test: /\.(js|vue)$/,
            loader: 'eslint-loader',
            exclude: /(node_modules)/
          })
        }
        const urlLoader = config.module.rules.find((rule) => rule.loader === 'url-loader')
        config.module.rules.splice(config.module.rules.indexOf(urlLoader), 1)
        config.module.rules.push({
          test: /\.(png|jpe?g|gif|svg)$/,
          loader: 'url-loader',
          exclude: /(assets\/svg)/,
          query: {
            limit: 500 * 1000, // 500KO
            name: 'img/[name].[hash:7].[ext]'
          }
        })

        config.plugins.push(new WebpackBar())
      }
    }
  }
  