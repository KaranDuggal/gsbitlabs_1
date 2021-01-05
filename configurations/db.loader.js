const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/Tuser',{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{
    console.log('DB conected');
})
mongoose.connection.on('error',(err)=>{
    console.log('DBfailed');
})