'use strict';

const db = require('../../config/db');

class Search {
  constructor(){
    // super();
    // this.search = this.search.bind(this);
  }
  async search(req, res, next){
    let keyWord = req.query.kw;
    let hot = req.query.hot;
    let priceUp = req.query.priceUp;
    let priceDown = req.query.priceDown;
    const keywordStr = `select  *  from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%'`;
    const hotStr = `select  *  from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%' order by product_comment_num desc`;
    const priceUpStr = `select  *  from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%' order by product_uprice asc`;
    const priceDownStr = `select  *  from product,shop where product.shop_id=shop.shop_id and product.product_name like '%${keyWord}%' order by product_uprice desc`;
    if (keyWord != '') {
      if (hot != '') {
        getSearchDatas(hotStr, res);
      } else if (priceUp != '') {
        getSearchDatas(priceUpStr, res);
      } else if (priceDown != '') {
        getSearchDatas(priceDownStr, res);
      } else {
        getSearchDatas(keywordStr, res);
      }
    }        
  }
}

function getSearchDatas(keywordStr, res) {
  db.query(keywordStr, (err, data) => {
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
module.exports = new Search()