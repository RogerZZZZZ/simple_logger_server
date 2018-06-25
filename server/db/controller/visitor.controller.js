/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const VisitorSchema = mongoose.model('VisitorSchema')


exports.create = async (function* (req, res) {
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