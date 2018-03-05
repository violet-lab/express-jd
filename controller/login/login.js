'use strict';

const db = require('../../config/db');
const common = require('../../libs/common');
class Login {
  constructor(){
    // super();
    // this.login = this.login.bind(this);
  }
  async login(req, res, next){
    let mObj = {};
    for (let obj in req.body) {
      mObj = JSON.parse(obj);
      console.log(mObj);
    }
    let username = mObj.loginName;
    let password = common.md5(mObj.loginPawd + common.MD5_SUFFXIE);
    // console.log(username, mObj.passwd);
    const selectUser = `SELECT * FROM user where user_name='${username}'`;
    db.query(selectUser, (err, data) => {
      if (err) {
        console.log(err);
        res.send({ 'msg': '服务器出错', 'status': 0 }).end();
      } else {
        if (data.length == 0) {
          res.send({ 'msg': '该用户不存在', 'status': -1 }).end();
        } else {
          let dataw = data[0];
          // login sucess
          if (dataw.login_password === password) {
            dataw.msg = "登录成功";
            dataw.status = 1;
            res.send(dataw).end();
          } else {
            res.send({ 'msg': '密码不正确', 'status': -2 }).end();
          }
        }
      }
    });     
  }
}

module.exports = new Login()