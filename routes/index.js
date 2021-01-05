const express = require('express');
const router = express.Router();

require('../controllers/user.controller')
const userController = new UserController
require('../controllers/userdataController')
const userdataController = new UserDataController


/* GET home page. */
router.post('/user', userController.add_user)
router.post('/userdata', userdataController.add_userdata)
router.get('/userdata/:id',userdataController.get_user)
module.exports = router;
