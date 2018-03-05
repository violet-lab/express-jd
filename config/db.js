"use strict";
const mysql = require('mysql');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin',
  database: 'myigou'
});

module.exports = db;

