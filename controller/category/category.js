'use strict';

const db = require('../../config/db');

const getCateNames = `SELECT * FROM category ORDER BY category_id desc`;

class Category {
  constructor(){
    // super();
    // this.category = this.category.bind(this);
  }
  async category (req, res, next) {
    getCateNamesDatas(getCateNames, res);
  }
}

function getCateNamesDatas(getCateNames, res) {
  db.query(getCateNames, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send('database err').end();
    } else {
      if (data.length == 0) {
        res.status(500).send('no datas').end();
      } else {
        res.send(data);
      }
    }
  });
};
module.exports = new Category()