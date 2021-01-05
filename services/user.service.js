const DBservices = require('../services/database.service')
const dbservices = new DBservices();
const Tuser = require('../models/user.models')

class UserServices{
    check_user_exist(query){
        console.log(query);
        return new Promise(async (resolve,reject)=>{
            try {
                const userexist = await dbservices.findOne(Tuser,query).catch(err =>{
                    throw err
                })
                resolve((userexist && userexist !== null) ? true:false)
            } catch (err) {
                reject(err)
            }
        })
    }
    add_user(data){
        return new Promise(async (resolve,reject)=>{
            try {
                const model = new Tuser(data);
                const user = await dbservices.save(model)
                resolve(user)
                return
            } catch (err) {
                reject(err);
                return
            }
        })
    }
}
module.exports = UserServices