const Game = require('./games');

module.exports = {
  // .populate(thread)
  getGames(req, res) {
    Game.find( {}, (err, games) => {
      if( err ){
        return res.status(500).json(err);
      }
        return res.status(200).json(games);
    })
  },

  postGame(req, res) {
    new Game( req.body ).save( ( err, game) => {
      if (err ) {
        return res.status( 500 ).json( err);
      }
        return res.status( 201).json( game );
    })
  },

  updateGame(req, res) {
    Game.findOneAndUpdate( {name: req.params.gameId}, { $set: req.body}, (err, game) => {
      if (err ) {
        return res.status(500).json(err);
      }
        return res.status(200).json( game );
    });
  },

  getThreadsForGame(req, res) {
    Game.findById( req.params.gameId)
    .populate('threads')
    .exec(
      (err, game) => {
      if (err ) {
        return res.status(500).json(err);
      }

        return res.status(200).json(game);
    })
  }
}
