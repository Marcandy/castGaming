const replyCtrl = require('./replyCtrl.js');

module.exports = app => {
  app.route('/api/reply')
    .get(replyCtrl.getReply);
  app.route('/api/reply/:id')
    .put(replyCtrl.postReply)
    .put(replyCtrl.updateReply);
}
