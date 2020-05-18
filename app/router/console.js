'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.get('/console/index', controller.console.home.index);
};
