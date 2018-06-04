/**
 * Module dependencies
 */
const mongoose = require('mongoose')
const PVSchema = mongoose.model('PVSchema')


exports.create = async (function* (req, res) {
  const pv = new PVSchema(req.body)
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