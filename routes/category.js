'use strict';

let express = require('express');
let Category = require('../controller/category/category.js');
let router = express.Router();

router.get('/category', Category.category);


module.exports = router;

