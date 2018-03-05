'use strict';

var express = require('express');
var Home = require('../controller/home/home.js');
var router = express.Router();

router.get('/home', Home.home);

module.exports = router;
