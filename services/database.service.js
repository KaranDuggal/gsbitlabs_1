const mongoose = require('mongoose')
class DBservices {
    constructor(){}
    findOne(collection,query){
        return new Promise((resolve,reject)=>{
            collection.findOne(query).exec((err,data)=>{
                if (err) {
                    reject(err)
                } else {
                    resolve(data)
                }
            })
        })
    }
    save(model){
        return new Promise((resolve,reject)=>{
            model.save((err,modelSave)=>{
                if (err) {
                    reject(err)
                } else {
                    resolve(modelSave)
                }
            })
        })
    }
}
module.exports = DBservices