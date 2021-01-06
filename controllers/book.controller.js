const mongoose = require('mongoose')
const ValidatorService = require('../services/validator.service')
const validatorService = new ValidatorService();
const BookService = require('../services/book.service')
const bookService = new BookService()
module.exports= BookController = function () {
    this.add_book = async (req,res)=>{
        try {
        
         const ValidData =   await validatorService.schema.bookSchema.validate(req.body);
         console.log('new Date()', new Date());
         req.body.publishedon = new Date();
         if(ValidData.error){
                throw {
                "custom_err_message": "Schema Validation Failed",
                // error: err
            } 
         }
         console.log('validate');
        //  .catch(err => {
        //     throw {
        //         "custom_err_message": "Schema Validation Failed",
        //         error: err
        //     }
        // })
        // console.log(req.body.username);
        const check_book_exist = await bookService.check_book_exist({bookname: req.body.bookname})
        if(check_book_exist === true){
            throw {
                custom_err_message: "book already exists with this name"
            }
        }
        console.log('after check');
        const book = await bookService.add_book(req.body)
        return res.status(200).json({ success: true, message: 'book added Successfully'})
        } catch (err) {
            console.log("err occured at ===> add_book", err);
            res.status(400).json({ success: false})
        }
    }
    
}