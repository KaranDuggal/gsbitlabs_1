const mongoose = require('mongoose')

const ValidatorService = require('../services/validator.service')
const validatorService = new ValidatorService();

const UserdataServices = require('../services/userdata.service');
const userdataServices = new UserdataServices();

const userdata = require('../models/userdata.models');

module.exports= UserDataController = function () {
    this.add_userdata = async (req,res)=>{
        try {
         const ValidData =   await validatorService.schema.userdataSchema.validate(req.body)
         if(ValidData.error){
                throw {
                "custom_err_message": "Schema Validation Failed",
                error: err
            } 
         }
        //  .catch(err => {
        //     throw {
        //         "custom_err_message": "Schema Validation Failed",
        //         error: err
        //     }
        // })
        const check_userdata_exist = await userdataServices.check_userdata_exist({pancardnumber: req.body.pancardnumber})
        if(check_userdata_exist === true){
            throw {
                custom_err_message: "Userdata already exists with this name"
            }
        }
        const userdata = await userdataServices.add_userdata(req.body)
        return res.status(200).json({ success: true, message: 'Userdata added Successfully'})
        } catch (err) {
            console.log("err occured at ===> add_userdata", err);
            res.status(400).json({ success: false})
        }
    }
    this.get_user = async(req,res)=>{
        try {
            const id = req.params.id
            const aData = await userdata.aggregate([
                // {$match : { branch : "frontend" }},
                {$match : { _id : mongoose.Types.ObjectId(id) }},
                {$lookup : { from :"users" ,  localField : "owner", foreignField : "_id" , as : "hello" }}
                  ])
            // userdata.collection.aggregate()
            res.send(aData)
        } catch (err) {
            console.log(err);
            res.send('error')
        }
    }
}