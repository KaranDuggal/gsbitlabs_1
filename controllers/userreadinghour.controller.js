const user = require('../models/user.models')
const book = require('../models/book.models')
const readingtime = require('../models/readingtime.models')
const mongoose = require('mongoose')
module.exports = UserReadingHourController = function () {
    this.user_reading_hour = async (req, res) => {
        try {
            let Aggr = await readingtime.aggregate([
                { $match: { userID: mongoose.Types.ObjectId("5ff5766fb071682eb4ce5c46") } },
                { $lookup: { from: "users", localField: "userID", foreignField: "_id", as: "userID" } },
                { $unwind: { path: "$userID" } }


            ])
            console.log(Aggr);
            return res.status(200).json({ success: true, message: 'user aggregate Successfully', data: Aggr })
        } catch (err) {
            console.log("err at PatientController", err);
            return res.status(400).json({ success: false, message: err.custom_err_message ? err.custom_err_message : `Could not add Patient`, error: err });
        }
    }
}
// 5ff589f637a28021f4068bac