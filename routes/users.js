var express = require('express');
var router = express.Router();
const Models = require('./../models');
const bcrypt = require ("bycrypt");
const jwt= require('jsonwebtoken');
const dotenv = require('dotenv');
const User = Models.User;
dotenv.config();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
