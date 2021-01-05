const mongoose = require('mongoose')

const udSchema = new mongoose.Schema({
    branch:String,
    pancardnumber:Number
})

const userdata = mongoose.model('usersdata',udSchema)
module.exports = userdata