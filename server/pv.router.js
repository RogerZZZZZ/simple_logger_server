const express = require('express')
const requestIp = require('request-ip')
const pvRouter = express.Router()

pvRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
}); 

pvRouter.post('/visitor', (req, res) => {
    console.log(req.body)
    const clientIp = requestIp.getClientIp(req)
    res.status(200).json({
        data: 1
    })
})

pvRouter.get('/test-ip', (req, res) => {
    const clientIp = requestIp.getClientIp(req)
    console.log(clientIp)
})


module.exports = pvRouter