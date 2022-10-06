'use strict';
module.exports = function(app) {
  let accountCtrl = require('./controllers/AccountsController');

  // todoList Routes
  app.route('/account')
    .get(accountCtrl.get)
    .post(accountCtrl.store);

  app.route('/products/:productId')
    .get(accountCtrl.detail)
    .put(accountCtrl.update)
    .delete(accountCtrl.delete);
};
