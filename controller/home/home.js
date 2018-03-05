'use strict';

const db = require('../../config/db');

const getHomeStr = `SELECT product_id,product_name,product_price,product_img_url,product_uprice FROM product`;

class Home {
  constructor(){
    // super();
    // this.home = this.home.bind(this);
  }
  async home(req, res, next){
    getHomeDatas(getHomeStr, res);        
  }
}

function getHomeDatas(getHomeStr, res) {
  db.query(getHomeStr, (err, data) => {
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
module.exports = new Home()