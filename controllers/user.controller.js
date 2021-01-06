const mongoose = require('mongoose');
const ValidatorService = require('../services/validator.service')
const validatorService = new ValidatorService();
const UserServices = require('../services/user.service');
const userServices = new UserServices();
// const BrowserHistory = require('node-browser-history');

module.exports = UserController = function () {
    this.add_user = async (req, res) => {
        // BrowserHistory.getAllHistory(10).then(function (history) {
        //     console.log(history);
        //   });
        try {
            const ValidData = await validatorService.schema.userSchema.validate(req.body)
            if (ValidData.error) {
                throw {
                    "custom_err_message": "Schema Validation Failed",
                    // error: err
                }
            }
            //  console.log('validate');
            //  .catch(err => {
            //     throw {
            //         "custom_err_message": "Schema Validation Failed",
            //         error: err
            //     }
            // })
            // console.log(req.body.username);
            const check_email_exist = await userServices.check_email_exist({ email: req.body.email })
            if (check_email_exist === true) {
                throw { custom_err_message: "User already exists with this name" }
            }
            const user = await userServices.add_user(req.body)
            return res.status(200).json({ success: true, message: 'user added Successfully' })
        } catch (err) {
            // console.log("err occured at ===> add_user", err);
            res.status(400).json({ success: false })
        }
    }

}