'use strict';

const home = require('./home');
const category = require('./category');
const categorygoods = require('./categorygoods');
const detail = require('./detail');
const cart = require('./cart');
const search = require('./search');
const reg = require('./reg');
const login = require('./login');
const userinfo = require('./userinfo');

module.exports = app => {
  app.use('/', home);
  app.use('/', category);
  app.use('/', categorygoods);
  app.use('/', detail);
  app.use('/', cart);
  app.use('/', search);
  app.use('/', reg);
  app.use('/', login);
  app.use('/', userinfo);
}







