const mongoose = require('mongoose')
const ValidatorService = require('../services/validator.service')
const validatorService = new ValidatorService();
const ReadingTimeServices = require('../services/readingtime.service');
const readingtimeServices = new ReadingTimeServices();
module.exports = RedingTimeController = function () {
    this.add_redingtime = async (req, res) => {
        try {
            let obj = Object.assign({}, req.params, req.body);
            console.log('obj:', obj)
            // const ValidData = await validatorService.schema.readingSchema.validate(obj)
            // if (ValidData.error) {
            //     throw {
            //         "custom_err_message": "Schema Validation Failed",
            //         error: ValidData.error
            //     }
            // }
            // const check_userID_exist = await readingtimeServices.check_userID_exist({ _id: obj.userID })
            // if (check_userID_exist === true) {
            //     console.log('userID exist');
            // }else{
            //     throw {
            //         custom_err_message: "UserID not exists with this name"
            //     }
            // }
            console.log('validate data', obj);
            const readingtime = await readingtimeServices.add_redingtime(obj)
            return res.status(200).json({ success: true, message: 'user added Successfully' })
        } catch (err) {
            console.log("err occured at ===> add_user", err);
            res.status(400).json({ success: false, error: err })
        }
    }

}