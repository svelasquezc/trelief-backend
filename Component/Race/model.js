const mongoose = require('mongoose')

const Schema = mongoose.Schema

const raceSchema = new Schema({
    driver: {
        type: Schema.ObjectId,
        ref: 'Driver'
    },
    originLatitude: Number,
    originLongitude: Number,
    destinationLatitude: Number,
    destinationLongitude: Number,
    isAccepted: boolean,
    isFinished: boolean,
    estimatedTaxiFare: Number,
    originalTaxiFare: Number,
    acceptedAt: Date,
    finishedAt: Date,
    createdAt: Date,
    updatedAt: Date
})

const model = mongoose.model('Race', raceSchema)

module.exports = model