const express = require('express')
const driver = require('../Component/Driver/network')

const routes = function(server) {
    server.use('/driver', driver)
}

module.exports = routes