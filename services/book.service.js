const DBservices = require('./database.service')
const dbservices = new DBservices();
const Tbook = require('../models/book.models')

class BookServices{
    check_book_exist(query){
        console.log(query);
        console.log('exist');
        return new Promise(async (resolve,reject)=>{
            try {
                const bookexist = await dbservices.findOne(Tbook,query).catch(err =>{
                    throw err
                })
                resolve((bookexist && bookexist !== null) ? true:false)
            } catch (err) {
                reject(err)
            }
        })
    }
    add_book(data){
        return new Promise(async (resolve,reject)=>{
            try {
                const model = new Tbook(data);
                const book = await dbservices.save(model)
                resolve(book)
                return
            } catch (err) {
                reject(err);
                return
            }
        })
    }
}
module.exports = BookServices