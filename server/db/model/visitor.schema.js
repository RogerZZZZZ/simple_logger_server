const mongoose = require('mongoose')

const Schema = mongoose.Schema

const Visitor = new Schema({
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
  platform: {
    type: String,
    default: '',
    trim: true,
  },
  family: {
    type: String,
    default: '',
    trim: true,
  },
  architecture: {
    type: String,
    default: '',
    trim: true,
  },
  version: {
    type: String,
    default: '',
    trim: true
  },
  page: {
    type: String,
    default: '',
    trim: true
  },
  region: {
    type: String,
    default: '',
    trim: true
  },
  country: {
    type: String,
    default: '',
    trim: true
  },
  city: {
    type: String,
    default: '',
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
Visitor.path('ipAddress').required(true, 'ip address can not be blank')
Visitor.path('tag').required(true, 'tag can not be blank')
Visitor.path('page').required(true, 'page can not be blank')


/**
 * Methods 
 * bind on the instance
 */
Visitor.methods = {

}

/**
 * Statics
 */
Visitor.statics = {
  /**
   * load visitor data with limitations
   * @param {Object} opt
   */
  loadTimePeriod: function(opt) {
    const startTime = new Date(opt['startTime']) || new Date('2000-01-01')
    const endTime = new Date(opt['endTime']) || new Date()
    return this.aggregate([
      {
        $match: {
          createTime: {
            '$gte': startTime,
            '$lte': endTime,
          }
        }
      },{
        $group: {
          month: {
            $month: '$createTime',
          },
          count: {
            $sum: 1
          }
        }
      },{
        $sort: {
          month: 1
        }
      }
    ])
  }
}

mongoose.model('Visitor', Visitor)
