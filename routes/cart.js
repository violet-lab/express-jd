'use strict';

let express = require('express');
let Cart = require('../controller/cart/cart.js');
let router = express.Router();

router.get('/cart', Cart.cart)

module.exports = router;
