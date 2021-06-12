const express = require('express')
const driver = require('../Component/Driver/network')
const goal = require('../Component/Goal/network')
const race = require('../Component/Race/network')

const routes = function(server) {
    server.use('/driver', driver)
    server.use('/goal', goal)
    server.use('/race', race)
}

module.exports = routes