/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const VisitorSchema = mongoose.model('VisitorSchema')

const requestIp = require('request-ip')

exports.create = async (function* (req, res) {
  const clientIp = requestIp.getClientIp(req)
  console.log(clientIp, req.body)
  const pv = new VisitorSchema(req.body)
  try {
    yield pv.save()
    res.status(200).json({
      result: 'success'
    })
  } catch (err) {
    console.log(err)
    res.status(422)
  }
})