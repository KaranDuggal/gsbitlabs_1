const Joi = require('joi');
const { models } = require('mongoose');
// joi.object= require('joi-objectid')(joi)
class ValidatorService{
    constructor(){
        this.schema = {}
        this.initializeScemas();
    }
    initializeScemas(){
         this.schema.userSchema = Joi.object({
            username: Joi.string().required(),
            password: Joi.string().required(),
            age: Joi.number().required(),
            gender: Joi.string().required(),
            email: Joi.string().required(),
            favouritebook: Joi.string().required()
        });
        this.schema.bookSchema = Joi.object({
            bookname: Joi.string().required(),
            author: Joi.string().required(),
            publishedon: Joi.number().required(),
            price: Joi.number().required(),
        });
        this.schema.readingSchema = Joi.object({
            userID: Joi.string().required(),
            bookID: Joi.string().required(),
            hour: Joi.number().required()
        });
    }
}

module.exports = ValidatorService;