const path = require('path')
require('dotenv').config()
const entries = {
  dev: './server/index.js',
}

module.exports = {
  webpack: (config, options, webpack) => {
    delete config.entry.main
    config.entry[process.env.BACKPACK_ENTRY] = [
      'babel-polyfill', entries[process.env.BACKPACK_ENTRY]
    ]
    config.output.filename = process.env.BACKPACK_ENTRY + '.js'
    config.module.rules.push(
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /(node_modules)/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: __dirname,
        exclude: /node_modules/
      })
    config.plugins.push(
      new webpack.ProvidePlugin({
        logger: 'consola'
      }),
      new webpack.DefinePlugin({
        'process.env.NUXT_ENV': JSON.stringify(process.env.NUXT_ENV),
        'process.env.BASE_URL': JSON.stringify(process.env.BASE_URL),
      }),
    )
    return config
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src-nuxt'),
    }
  }
}
