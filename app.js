const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParse = require('body-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const router = require('./server/router')
const app = express()
const redis = require('redis')
let child_process = require('child_process')

const resolve = file => path.resolve(__dirname, file)

app.use('/dist', express.static(resolve('./dist')))
app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use(router)

// session
app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'blog',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: true,
    maxAge: 2592000000
  },
  store: new MongoStore({
    url: 'mongodb://localhost:27017/blog'
  })
}))

app.get('*', function (req, res) {
  let html = fs.readFileSync(resolve('./' + 'index.html'), 'utf-8')
  res.send(html)
})

app.listen(3000, function () {
  console.log('访问地址为 localhost:3000')
})

const keyClient = redis.createClient({db: 1})
const pubClient = redis.createClient()

child_process.execSync('redis-cli config set notify-keyspace-events Ex')

pubClient.psubscribe('__keyevent@1__:expired')
keyClient.set('mykey', 'hello', () => {
  keyClient.pexpireat('mykey', +new Date('2018/5/29 15:37:00'))
});

let futureFun = () =>{
  console.log('hello world');
};

pubClient.on('pmessage', (channel, listen, key)=>{
  key == 'mykey' && futureFun();
});