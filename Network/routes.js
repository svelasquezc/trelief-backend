const express = require('express')
const driver = require('../Components/Message/network')

const routes = function(server) {
    server.use('/driver', driver)
}

module.exports = routes