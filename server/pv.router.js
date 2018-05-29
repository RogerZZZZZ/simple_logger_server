const express = require('express')

const pvRouter = express.Router()

pvRouter.post('/visitor', (req, res) => {
    console.log(req.body)
    res.json({
        data: 1
    })
})


module.exports = pvRouter