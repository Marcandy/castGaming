const Thread = require('./thread');

module.exports = {
  getThread(req, res) {
    Thread.find( {}, (err, thread) => {
      if( err ){
        return res.status(500).json(err);
      }
        return res.status(200).json(thread);
    })
  },

  postThread(req, res) {
    new Thread( req.body ).save( ( err, thread) => {
      if (err ) {
        return res.status( 500 ).json( err);
      }
        return res.status( 201).json( thread );
    })
  },

  updateThread(req, res) {
    Thread.findOneAndUpdate( {title: req.params.id}, { $set: req.body}, (err, thread) => {
      if (err ) {
        return res.status(500).json(err);
      }
        return res.status(200).json( thread );
    });
  }
}
