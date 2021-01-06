const mongoose = require('mongoose')

const uSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,
    gender:String,
    email:String,
    favouritebook:String
})

const user = mongoose.model('users',uSchema)
module.exports = user