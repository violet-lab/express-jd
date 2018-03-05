'use strict';

var express = require('express');
const Userinfo = require('../controller/userinfo/userinfo.js');
var router = express.Router();

router.get('/userinfo', Userinfo.userinfo);

module.exports = router;
