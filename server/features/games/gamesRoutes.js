const gamesCtrl = require('./gamesCtrl');

module.exports = app => {
  app.route('/api/games')
    .get(gamesCtrl.getGames)
    .post(gamesCtrl.postGame);
  app.route('/api/games/:gameId')
    .put(gamesCtrl.updateGame)
    .get(gamesCtrl.getThreadsForGame)
}
