/**
 * Module dependencies
 */

const express = require('express')
const fs = require('fs')
const join = require('path').join;
const path = require('path')
const bodyParse = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const redis = require('redis')
const child_process = require('child_process')
const requestIp = require('request-ip')
const config = require('./server/config')
const pkg = require('./package.json')

require('dotenv').config()

const port = process.env.PORT || 3005;

const resolve = file => path.resolve(__dirname, file)

app.use('/dist', express.static(resolve('./dist')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

app.use(requestIp.mw())

const models = join(__dirname, 'server/db/model')
fs.readdirSync(models)
  .filter(file => ~file.search(/^[^\.].*\.js$/))
  .forEach(file => require(join(models, file)))

// router init
const router = require('./server/router')
const visitorRouter = require('./server/visitor.router')
const eventRouter = require('./server/event.router')

app.use('/', router)
app.use('/visitor', visitorRouter)
app.use('/event', eventRouter)
app.use(cors({
  credentials: true
}))

connect()
  .on('error', console.log)
  .on('disconnected', connect)
  .once('open', listen)

function listen () {
  if (app.get('env') === 'test') return;
  app.listen(port);
  console.log('Express app started on port ' + port);
}

function connect () {
  var options = { server: { socketOptions: { keepAlive: 1 } } };
  return mongoose.connect(config.db, options).connection;
}

app.get('*', function (req, res) {
  let html = fs.readFileSync(resolve('./' + 'index.html'), 'utf-8')
  res.send(html)
})

// const keyClient = redis.createClient({db: 1})
// const pubClient = redis.createClient()

// child_process.execSync('redis-cli config set notify-keyspace-events Ex')

// pubClient.psubscribe('__keyevent@1__:expired')
// keyClient.set('mykey', 'hello', () => {
//   keyClient.pexpireat('mykey', +new Date('2018/5/29 21:59:00'))
// });

// let futureFun = () =>{
//   console.log('hello world');
// };

// pubClient.on('pmessage', (channel, listen, key)=>{
//   key == 'mykey' && futureFun();
// });