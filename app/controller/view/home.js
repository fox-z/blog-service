'use strict'

const Controller = require('egg').Controller

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this
    console.log(app.mysql.get, 'app')
    let result = await app.mysql.get("blog_content",{})
    // console.log(result)
    ctx.body = result
  }

  async getArticleList() {
    // %H:%i:%s
    const { ctx, app } = this
    let sql = 'SELECT article.id as id,'+
              'article.title as title,'+
              'article.introduce as introduce,'+
              "FROM_UNIXTIME(article.addTime,'%Y-%m-%d' ) as addTime,"+
              'article.view_count as viewCount ,'+
              'article_type.typeName as typeName '+
              'FROM article LEFT JOIN article_type ON article.type_id = article_type.id'

     const results = await app.mysql.query(sql)
 
     ctx.body = {
        data: results
     }
 }
}

module.exports = HomeController
