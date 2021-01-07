const { string } = require('joi');
const mongoose = require('mongoose')

const readingSchema = new mongoose.Schema({
    // userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users', index: true },
    userID: { type: mongoose.Schema.Types.ObjectId, ref: 'users', index: true },
    // userID: String,
    bookID: { type: mongoose.Schema.Types.ObjectId, ref: 'books', index: true },
    hour: { type: Number },
    // days: [Number]
})

const reading = mongoose.model('reading', readingSchema)
module.exports = reading;