const mongoose = require('mongoose');
// const config = require('./config');
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
// mongoose.connect(mongoURI,{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true})
// mongoose.connect('mongodb://localhost:27017/Tuser',{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true})
// const mongoURI = 'mongodb://' + config.db.user + ':' + config.db.password + '@' + config.db.host + '/' + config.db.database
const UrlDB = 'mongodb://admin:'+encodeURIComponent('gsbitlabs@123')+'@65.0.105.97/practice'
mongoose.connect(UrlDB,{useCreateIndex:true,useFindAndModify:true,useNewUrlParser:true,useUnifiedTopology:true})
mongoose.connection.on('connected',()=>{
    console.log('DB conected');
})
mongoose.connection.on('error',(err)=>{
    console.log('DBfailed');
})