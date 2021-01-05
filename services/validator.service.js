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
            age: Joi.number().required()
        });
        this.schema.userdataSchema = Joi.object({
            branch: Joi.string().required(),
            pancardnumber: Joi.number().required(),
        })
    }
}

module.exports = ValidatorService;