const mongoose = require('mongoose')

const Schema = mongoose.Schema

const driverSchema = new Schema({
    name: String,
    email: String
})

const model = mongoose.model('Driver', driverSchema)

module.exports = model