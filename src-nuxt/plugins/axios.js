import * as axios from 'axios'

export default axios.create({
  baseURL: process.env.baseURL
})