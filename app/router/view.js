
module.exports = app => {
  const { router, controller } = app
  router.get('/view/index', controller.view.home.index)
  router.get('/view/getArticleList', controller.view.home.getArticleList)
}