"use strict";

const Sequelize = require('sequelize');

var sequelize = new Sequelize('myigou', 'root', 'admin', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
});

module.exports = sequelize;