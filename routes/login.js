'use strict';

var express = require('express');
var Login = require('../controller/login/login.js');
var router = express.Router();

router.post('/login', Login.login);

module.exports = router;
