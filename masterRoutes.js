const gamesRoutes = require('./server/features/games/gamesRoutes.js');
const threadRoutes = require('./server/features/thread/threadRoutes.js');
const replyRoutes = require('./server/features/reply/replyRoutes.js');

module.exports = app => {
  gamesRoutes( app );
  threadRoutes( app );
  replyRoutes( app );
};
