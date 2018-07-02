import { Router } from 'express'
let router = Router()
import controller from './db/controller/visitor.controller'

router.post('/count', controller.create)

router.post('/scan', controller.scan)

module.exports = router
