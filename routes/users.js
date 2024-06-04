var express = require('express');
var router = express.Router();
var userSchema =  require('../models/userModel');
const createUser = require('../controllers/userController');
/* GET users listing. */
router.get('/createUser',createUser);
module.exports = router;
