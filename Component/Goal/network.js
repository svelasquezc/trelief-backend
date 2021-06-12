const express = require('express')

const response = require('../../Network/response')
const controller = require('./controller')
const generator = require('./generator')

router = express.Router()

router.post('/', (req,res) => {
    
    controller.addGoal(req.body.id, req.body.kind, req.body.unit, req.body.value)
    .then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
});

router.get('/generate', (req, res) =>{
    generator.generateGoal()
    .then(data => {
        response.success(req, res, data, 201)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

/*

router.get('/:id', (req,res) => {
    
    controller.list(req.params.id)
    .then(data => {
        response.success(req, res, data, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
});

router.get('/', (req,res) => {
    controller.getMessages(req.query.user)
    .then((messageList) => {
        response.success(req, res, messageList, 200)
    })
    .catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
    
});

router.patch('/:id', (req,res) => {
    controller.updateMessage(req.params.id, req.body.message)
    .then((data)=> {
        response.success(req,res,data,200)
    }).catch(e =>{
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

router.delete('/:id', (req, res) => {
    controller.removeMessage(req.params.id)
    .then(()=>{
        response.success(req,res, `Mensaje ${req.params.id} eliminado`, 200)
    }).catch(e => {
        response.error(req, res, 'Unexpected Error', 500, e)
    })
})

*/
module.exports = router