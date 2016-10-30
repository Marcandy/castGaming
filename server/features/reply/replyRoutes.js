const replyCtrl = require('./replyCtrl.js');

module.exports = app => {
  app.route('/api/reply')
    .get(replyCtrl.getReply)
    .post(replyCtrl.postReply);
  app.route('/api/reply/:id')
    .put(replyCtrl.updateReply);
}
