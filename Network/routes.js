const express = require('express')
const driver = require('../Component/Driver/network')
const goal = require('../Component/Goal/network')

const routes = function(server) {
    server.use('/driver', driver)
    server.use('/goal', goal)
}

module.exports = routes