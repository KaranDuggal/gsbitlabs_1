const DBservices = require('./database.service')
const dbservices = new DBservices();
const readingTime = require('../models/readingtime.models')
const Tuser = require('../models/user.models')

class ReadingTimeServices {
    check_userID_exist(query) {
        console.log(query);
        return new Promise(async (resolve, reject) => {
            try {
                const userIDexist = await dbservices.findOne(Tuser, query).catch(err => {
                    throw err
                })
                resolve((userIDexist && userIDexist !== null) ? true : false)
            } catch (err) {
                reject(err)
            }
        })
    }
    add_redingtime(data) {
        return new Promise(async (resolve, reject) => {
            try {
                console.log('data==', data.value.userID)
                const model = new readingTime({
                    userID: data.value.userID,
                    bookID: data.value.bookID,
                    hour: data.value.hour,
                    days: data.value.days
                });
                console.log('model save', model);
                const readingtime = await dbservices.save(model)
                resolve(readingtime)
                return
            } catch (err) {
                reject(err);
                return
            }
        })
    }

}
module.exports = ReadingTimeServices