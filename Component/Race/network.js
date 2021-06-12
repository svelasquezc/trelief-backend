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