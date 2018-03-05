'use strict';

const db = require('../../config/db');

class Userinfo {
  constructor(){
    // super();
    // this.userinfo = this.userinfo.bind(this);
  }
  async userinfo(req, res, next){
    let uId = req.query.uId;
    const getU = `SELECT user_name,user_number FROM user where user_id='${uId}'`;
    db.query(getU, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data[0]);
        }
      }
    });
  }
}

module.exports = new Userinfo()