'use strict';

const Controller = require('egg').Controller

class DetailController extends Controller {

  async getArticleDetail() {
    // %H:%i:%s
    const { ctx, app } = this;
    const id = ctx.query.id;
    const sql = 'SELECT article.id as id,' +
              'article.title as title,' +
              'article.introduce as introduce,' +
              "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime," +
              'article.view_count as viewCount ,' +
              'article_type.typeName as typeName ' +
              'FROM article LEFT JOIN article_type ON article.type_id = article_type.id ' +
              'WHERE article.id=' + id;

    const results = await app.mysql.query(sql);

    ctx.body = {
      data: results,
    };
  }
}

module.exports = DetailController;
