const express = require('express')

const response = require('../../Network/response')
const controller = require('./controller')

router = express.Router()

router.post('/', (req,res) => {
    
    controller.addRace(req.body)
    .then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
});

router.get('/fare/:id', (req, res) => {
    controller.totalFare(req.params.id)
    .then(data => {
        response.success(req, res, data, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.get('/count/:id', (req, res) => {
    controller.countIsAccepted(req.params.id)
    .then(data => {
        response.success(req, res, data, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

module.exports = router