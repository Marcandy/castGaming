const threadCtrl = require('./threadCtrl');

module.exports = app => {
  app.route('/api/thread')
    .get(threadCtrl.getThread)
    .post(threadCtrl.postThread);
  app.route('/api/thread/:id')
    .put(threadCtrl.updateThread);
}
