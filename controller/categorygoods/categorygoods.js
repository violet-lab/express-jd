'use strict';

const db = require('../../config/db');

class Categorygoods {
  constructor(){
    // super();
    // this.categorygoods = this.categorygoods.bind(this);
  }
  async categorygoods (req, res, next) {
    let mId = req.query.mId;
    const sql = `select * from product,category where product.category_id=category.category_id and category.category_id='${mId}'`;
    getCateGoods(sql, res);
  }
}

function getCateGoods(sql, res) {
  db.query(sql, (err, data) => {
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
}
module.exports = new Categorygoods();
