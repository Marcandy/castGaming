const gamesRoutes = require('./server/features/games/gamesRoutes.js');
const threadRoutes = require('./server/features/thread/threadRoutes.js');
const replyRoutes = require('./server/features/reply/replyRoutes.js');
const userRoutes = require('./server/features/user/userRoutes.js')

module.exports = app => {
  gamesRoutes( app );
  threadRoutes( app );
  replyRoutes( app );
  userRoutes( app );
};
