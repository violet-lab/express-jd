'use strict';

var express = require('express');
var Reg = require('../controller/reg/reg.js');
var router = express.Router();

router.post('/reg', Reg.reg);

module.exports = router;
