const express = require('express')
const requestIp = require('request-ip')
const get_ip = require('ipware')().get_ip
const visitorRouter = express.Router()

visitorRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

visitorRouter.post('/visitor', (req, res) => {
  console.log(req.body)
  const clientIp = requestIp.getClientIp(req)
  res.status(200).json({
      data: 2
  })
})

visitorRouter.get('/test-ip', (req, res) => {
  const clientIp = requestIp.getClientIp(req)
  console.log(clientIp)
  const realIp = get_ip(req)
  console.log('----', realIp)
  res.status(200).json({data:1})
})

module.exports = visitorRouter
