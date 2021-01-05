const DBservices = require('../services/database.service')
const dbservices = new DBservices();
const userdata = require('../models/userdata.models')


class UserServices{
    check_userdata_exist(query){
        console.log(query);
        return new Promise(async (resolve,reject)=>{
            try {
                const userdataexist = await dbservices.findOne(userdata,query).catch(err =>{
                    throw err
                })
                resolve((userdataexist && userdataexist !== null) ? true:false)
            } catch (err) {
                reject(err)
            }
        })
    }
    add_userdata(data){
        return new Promise(async (resolve,reject)=>{
            try {
                console.log('save stage');
                console.log(data);
                const model = new userdata(data);
                console.log('model');
                console.log(model);
                const adduserdata = await dbservices.save(model)
                resolve(adduserdata)
                return
            } catch (err) {
                reject(err);
                return
            }
        })
    }
}
module.exports = UserServices