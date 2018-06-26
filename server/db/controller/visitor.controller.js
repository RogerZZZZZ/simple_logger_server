/**
 * Module dependencies
 */
const VisitorSchema = require('../model/visitor.schema')
const IP2Region = require('ip2region')
const { wrap: async } = require('co');
const requestIp = require('request-ip')
const { only } = require('../utils/')

exports.create = async(function* (req, res) {
  const clientIp = requestIp.getClientIp(req)
  const query = new IP2Region()
  let d = Object.assign(req.body, only(query.search(clientIp), 'region country city'))
  let visitorData = Object.assign(d, { ipAddress: clientIp })
  console.log(visitorData)
  const visitor = new VisitorSchema(visitorData)
  try {
    yield visitor.save()
    res.status(200).json({
      result: 'success'
    })
  } catch (err) {
    console.log(err)
    res.status(422)
  }
})