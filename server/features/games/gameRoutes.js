const gamesCtrl = require('./gamesCtrl');

module.exports = app => {
  app.route('/api/games')
    .get(gamesCtrl.getGames)
    .post(gamesCtrl.postGame);
  app.route('/api/games/:name')
    .put(gamesCtrl.updateGame)
}
