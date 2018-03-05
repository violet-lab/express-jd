'use strict';

var express = require('express');
var Detail = require('../controller/detail/detail.js');
var router = express.Router();

router.get('/detail', Detail.detail);

module.exports = router;
