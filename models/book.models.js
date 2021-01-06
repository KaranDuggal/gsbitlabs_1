const mongoose = require('mongoose')

const bSchema = new mongoose.Schema({
    bookname:String,
    author:String,
    publishedon:Date,
    price:Number,
})

const book = mongoose.model('books',bSchema)
module.exports = book