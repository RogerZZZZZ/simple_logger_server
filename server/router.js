import { Router } from 'express'
import eventRouter from './event.router'
import visitorRouter from './visitor.router'

const router = Router()

router.use(eventRouter)
router.use(visitorRouter)

module.exports = router
