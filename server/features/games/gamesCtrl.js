const Game = require('./games');

module.exports = {
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
    Game.findOneAndUpdate( {name: req.params.name}, { $set: req.body}, (err, product) => {
      if (err ) {
        return res.status(500).json(err);
      }
        return res.status(200).json( product );
    });
  }
}
