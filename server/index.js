const express = require('express')
const fs = require('fs')
const path = require('path')
import { Nuxt, Builder } from 'nuxt'
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const requestIp = require('request-ip')
const session = require('express-session')
const expressValidator = require('express-validator')
const MongoStore = require('connect-mongo')(session)
const nuxtConfig = require('../nuxt.config.js')
const config = require('./config')

require('dotenv').config()
const app = express()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3005

const resolve = file => path.resolve(__dirname, file)

app.set('port', port)
app.use('/dist', express.static(resolve('./dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(requestIp.mw())
app.use(cors())
app.use(expressValidator())

/**
 * Router register
 */
const basePath = `/${nuxtConfig.env.basePath}` || ''

import router from './router.js'
app.use(`${basePath}`, router)

nuxtConfig.dev = !(process.env.NODE_ENV === 'production')

const nuxt = new Nuxt(nuxtConfig)
if (nuxtConfig.dev) {
  new Builder(nuxt).build()
    .catch((error) => {
      console.error(error)
      process.exit(1)
    })
}

app.use(nuxt.render)

app.get('*', function (req, res) {
  let html = fs.readFileSync(resolve('./' + 'index.html'), 'utf-8')
  res.send(html)
})

mongoose.connect(config.db, {
  server: {
    socketOptions: {
      keepAlive: 1
    }
  }
})

app.use(session({
  store: new MongoStore({
    mongooseConnection: mongoose.connection
  })
}))

app.listen(port, host)
logger.success(`Server listening on http://localhost:${port}${basePath}`) // eslint-disable-line no-console
