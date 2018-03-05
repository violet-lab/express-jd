'use strict';

const db = require('../../config/db');

class Detail {
  constructor(){
    // super();
    // this.detail = this.detail.bind(this);
  }
  async detail(req, res, next){
    let produId = req.query.mId;
    const imagesStr = `select image_url from product_image where product_id='${produId}'`;
    const productStr = `select * from product where product_id='${produId}'`;
    let detailDatas = [];
    db.query(imagesStr, (err, imgDatas) => {
      if (err) {
        console.error(err);
        res.status(500).send('database err').end();
      } else {
        detailDatas.push(imgDatas);
        db.query(productStr, (err, data) => {
          if (err) {
            console.error(err);
            res.status(500).send('database err').end();
          } else {
            detailDatas.push(data);
            res.send(detailDatas);
          }
        });
      }
    });
  }
}

module.exports = new Detail()