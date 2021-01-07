const express = require('express');
const router = express.Router();

require('../controllers/user.controller')
const userController = new UserController
require('../controllers/book.controller')
const bookController = new BookController
require('../controllers/readingtime.controller')
const redingtimeController = new RedingTimeController
require('../controllers/userreadinghour.controller')
const userreadinghourController = new UserReadingHourController


/* GET home page. */
router.post('/user', userController.add_user)
router.post('/book', bookController.add_book)
router.post('/redingtime/:userID/:bookID', redingtimeController.add_redingtime)
router.get('/userreadinghour', userreadinghourController.user_reading_hour)




module.exports = router;
