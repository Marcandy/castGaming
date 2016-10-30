const gamesRoutes = require('./server/features/games/gameRoutes.js')
const threadRoutes = require('./server/features/thread/threadRoutes.js')


module.exports = app => {
  gamesRoutes( app );
  threadRoutes( app );
};
