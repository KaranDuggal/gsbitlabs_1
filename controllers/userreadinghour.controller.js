const readingtime = require('../models/readingtime.models')
module.exports = UserReadingHourController = function () {
    this.user_reading_hour = async (req, res) => {
        try {
            let Aggr = await readingtime.aggregate([
                // { $match: { userID: mongoose.Types.ObjectId("5ff5766fb071682eb4ce5c46") } },
                { $lookup: { from: "users", localField: "userID", foreignField: "_id", as: "userID" } },
                { $lookup: { from: "books", localField: "bookID", foreignField: "_id", as: "bookID" } },
                { $unwind: { path: "$bookID", preserveNullAndEmptyArrays: false } },
                { $unwind: { path: "$userID", preserveNullAndEmptyArrays: false } },
                // { $project: { "userID.username": 1.0, "_id": 0, "bookID.bookname": 1.0, "hour": 1.0 } },
                // { $unwind: { path: "$userID", path: "$bookID" } },
                // { $group: { _id: "$bookID.bookname", total: { $sum: "$hour" } } }
                // (M/F)
                // { $project: { "userID.gender": 1, "_id": 0, "bookID.bookname": 1, "hour": 1 } },
                // { $group: { _id: "$userID.gender", book: { $addToSet: "$bookID.bookname" } } },
                // { $group: { _id: "$userID.gender", avghour: { $avg: "$hour" } } }
                //16 age
                // { $project: { "userID.age": 1, "_id": 0, "bookID.bookname": 1, "hour": 1 } },
                // { $group: { _id: "$userID.age", avghour: { $avg: "$hour" } } }

                // { $project: { items: { $filter: { input: "$userID", as: "item", cond: { $gt: ["$$item.age", 16] } } } } },
                // { $unwind: { path: "$items" } },
                // { $filter: { input: "$userID", as: "item", cond: { $gte: ["$hour", 14] } } 
                // { $prject: { userID: { $group: { _id: "$userID._id" } } } }

                // { $group: { _id: "$userID._id", books: { $push: "$bookID.bookname" } } },
                // { $unwind: { path: "$books" } },

                // date to striing
                { $addFields: { date: "$bookID.publishedon" } },

                // {
                //     $project: {
                //         yearMonthDayUTC: { $dateToString: { format: "%Y-%m-%d", date: "$bookID.publishedon" } },
                // timewithOffsetNY: { $dateToString: { format: "%H:%M:%S:%L%z", date: "$publishedon", timezone: "America/New_York" } },
                // timewithOffset430: { $dateToString: { format: "%H:%M:%S:%L%z", date: "$publishedon", timezone: "+04:30" } },
                // minutesOffsetNY: { $dateToString: { format: "%Z", date: "$publishedon", timezone: "America/New_York" } },
                // minutesOffset430: { $dateToString: { format: "%Z", date: "$publishedon", timezone: "+04:30" } }
                //     }
                // }

                {
                    $project: {
                        yearMonthDayUTC: { $dateToString: { format: "%Y-%m-%d", date: "$date" } },
                        timewithOffsetNY: { $dateToString: { format: "%H:%M:%S:%L%z", date: "$date", timezone: "America/New_York" } },
                        timewithOffset430: { $dateToString: { format: "%H:%M:%S:%L%z", date: "$date", timezone: "+04:30" } },
                        minutesOffsetNY: { $dateToString: { format: "%Z", date: "$date", timezone: "America/New_York" } },
                        minutesOffset430: { $dateToString: { format: "%Z", date: "$date", timezone: "+04:30" } }
                    }
                }

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