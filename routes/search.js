'use strict';

var express = require('express');
const Search = require('../controller/search/search.js');
var router = express.Router();

router.get('/search', Search.search);

module.exports = router;
