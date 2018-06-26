/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const VisitorSchema = require('../model/visitor.schema')
const IP2Region = require('ip2region')

const requestIp = require('request-ip')

exports.create = async (function* (req, res) {
  const clientIp = requestIp.getClientIp(req)
  let visitorData = Object.assign(req.body, { ipAddress: clientIp })
  const query = new IP2Region()
  console.log(clientIp, query.search(clientIp))
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