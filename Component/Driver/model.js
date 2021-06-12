const mongoose = require('mongoose')

const Schema = mongoose.Schema

const driverSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    goals: [{
        type: Schema.ObjectId,
        ref: 'Goal'
    }]
})

const model = mongoose.model('Driver', driverSchema)

module.exports = model
