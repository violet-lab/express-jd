'use strict';

const db = require('../../config/db');
const common = require('../../libs/common');
class Reg {
  constructor(){
    // super();
    // this.reg = this.reg.bind(this);
  }
  async reg(req, res, next){
    let mObj = {};
    for (let obj in req.body) {
      mObj = JSON.parse(obj);
    }
    let regName = mObj.regName;
    let regPasswd = mObj.regPasswd;
    regPasswd = common.md5(regPasswd + common.MD5_SUFFXIE);
    const insUserInfo = `INSERT INTO user(user_name,login_password,user_number) VALUES('${regName}','${regPasswd}','${regName}')`;
    delReg(insUserInfo, res);
  }
}

function delReg(insUserInfo, res) {
  db.query(insUserInfo, (err) => {
    if (err) {
      console.error(err);
      res.send({ 'msg': '服务器出错', 'status': 0 }).end();
    } else {
      res.send({ 'msg': '注册成功', 'status': 1 }).end();
    }
  })
};
module.exports = new Reg()