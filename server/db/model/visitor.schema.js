const mongoose = require('mongoose')

const Schema = mongoose.Schema

const VisitorSchema = new Schema({
  ipAddress: {
    type: String,
    default: 'not found',
    trim: true
  },
  tag: {
    type: String,
    default: '',
    trim: true
  },
  platForm: {
    type: String,
    default: 'not clear',
    trim: true,
  },
  region: {
    type: String,
    default: 'not clear',
    trim: true
  },
  createTime: {
    type: Date,
    default: Date.now
  },
  userName: {
    type: String,
    default: '',
    trim: true
  }
})

/**
 * basic validation
 */
VisitorSchema.path('ipAddress').required(true, 'ip address can not be blank')
VisitorSchema.path('tag').required(true, 'tag can not be blank')


/**
 * Methods 
 * bind on the instance
 */
VisitorSchema.methods = {

}

/**
 * Statics
 */
VisitorSchema.statics = {
  loadTimePeriod: (opt) => {
    const startTime = new Date(opt['startTime']) || new Date('2000-01-01')
    const endTime = new Date(opt['endTime']) || new Date()
    const reqOption = {
      createTime: {
        '$gte': startTime.toISOString(),
        '$lte': endTime.toISOString()
      }
    }
    return this.find(reqOption)
  }
}