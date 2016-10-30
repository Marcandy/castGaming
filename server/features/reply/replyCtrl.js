const Reply = require('./reply');

module.exports = {
  getReply(req, res) {
    Reply.find( {}, (err, reply) => {
      if(err){
        return res.status(500).json(err);
      }
        return res.status(200).json(reply);
    })
  },

  postReply(req, res) {
    new Reply( req.body).save((err, reply) => {
      if( err ){
        return res.status(500).json(err);
      }
        return res.status(201).json( reply );
    })
  },

  updateReply(req, res) {
    Reply.findOneAndUpdate( {count: req.params.id}, {$set: req.body}, (err, reply) => {
      if( err ) {
        return res.status(500).json(err);
      }
        return res.status(201).json( reply );
    })
  }

}
