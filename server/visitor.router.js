const express = require('express')
const requestIp = require('request-ip')
const visitorRouter = express.Router()
const controller = require('./db/controller/visitor.controller')

visitorRouter.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 

visitorRouter.post('/count', controller.create)

visitorRouter.post('/scan', controller.scan)

module.exports = visitorRouter
