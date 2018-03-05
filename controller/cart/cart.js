'use strict';

const db = require('../../config/db');

class Cart {
  constructor(){
    // super();
    // this.cart = this.login.bind(this);
  }
  async cart(req, res, next){
    const cartStr = "SELECT cart_id,user.user_id,product.product_id,product_name,product_uprice,product_img_url,goods_num,product_num,shop_name FROM product,user,goods_cart,shop where product.product_id=goods_cart.product_id and user.user_id=goods_cart.user_id and shop.shop_id = product.shop_id";
    db.query(cartStr, (err, data) => {
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
}

module.exports = new Cart()
