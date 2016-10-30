const gamesRoutes = require('./server/features/games/gameRoutes.js')

module.exports = app => {
  gamesRoutes( app );

};
