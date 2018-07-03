import { Router } from 'express'
let router = Router()
const controller = require('./db/controller/visitor.controller')

router.post('/visitor/count', controller.create)

router.post('/visitor/scan', controller.scan)

router.get('/visitor/test', controller.test)

export default router
