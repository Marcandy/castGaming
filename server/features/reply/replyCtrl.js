const Reply = require('./reply');
const Thread = require('../thread/thread.js');

module.exports = {
  getReply(req, res) {
    Reply.find( {}, (err, reply) => {
      if(err){
        return res.status(500).json(err);
      }
        return res.status(200).json(reply);
    })
  },

  // postReply(req, res) {
  //   new Reply( req.body).save((err, reply) => {
  //     if( err ){
  //       return res.status(500).json(err);
  //     }
  //       return res.status(201).json( reply );
  //   })
  // },

  postReply(req, res) {
    console.log(req.body);
    new Reply( req.body.reply ).save( (err, reply) =>{
      if ( err ) {
				return res.status( 500 ).json( err );
			}
      console.log(reply);
      Thread.findByIdAndUpdate(req.body.threadId, {$push: {replies: reply._id}}, {new: true})
      .populate("replies")
      .exec( (err,  thread)  => {
        if (err ) {
          return res.status( 500 ).json( err);
        }
          return res.status( 201).json( thread );
      })
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
