'use strict';

var express = require('express');
let Categorygoods = require('../controller/categorygoods/categorygoods.js');
var router = express.Router()

router.get('/categorygoods', Categorygoods.categorygoods);

module.exports = router;
