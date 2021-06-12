const mongoose = require('mongoose')

const Schema = mongoose.Schema

const goalSchema = new Schema({
    kind: String,
    unit: String,
    value: Number, 
    createdAt: Date,
    driver: {
        type: Schema.ObjectId,
        ref: 'Driver'
    }
})

const model = mongoose.model('Goal', goalSchema)

module.exports = model