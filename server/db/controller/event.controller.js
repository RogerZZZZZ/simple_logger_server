/**
 * Module dependencies
 */

const mongoose = require('mongoose')
const Event = mongoose.model('Event')
mongoose.Promise = require('bluebird')
const IP2Region = require('ip2region')
const { wrap: async } = require('co');
const requestIp = require('request-ip')
const { only } = require('../utils/')

