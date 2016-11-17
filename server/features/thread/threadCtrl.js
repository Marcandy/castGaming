const Thread = require('./thread');
const Game = require('../games/games');

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
    console.log(req.body);
    new Thread( req.body.newThread).save((err, newThread) =>{
      if ( err ) {
				return res.status( 500 ).json( err );
			}
      //find one and update needs to be bracket with underscore id
      Game.findOneAndUpdate({_id: req.body.gameId}, {$push: {threads: newThread._id} }, {new: true})
      .populate("threads")
      .exec( (err,  game)  => {
        if (err ) {
          return res.status( 500 ).json( err);
        }
        console.log(game);
          return res.status( 201).json( game );
      })
    })
  },

  // addStudentToCohort( req, res ) {
	// 	// cohort.students.push( req.body.studentId );
	// 	Cohort.findByIdAndUpdate( req.params.id, { $push: { students: req.body.studentId } }, ( err, cohort ) => {
	// 		if ( err ) {
	// 			return res.status( 500 ).json( err );
	// 		}
  //
	// 		return res.status( 200 ).json( cohort );
	// 	} );
	// }

  updateThread(req, res) {
    Thread.findOneAndUpdate( {title: req.params.id}, { $set: req.body}, (err, thread) => {
      if (err ) {
        return res.status(500).json(err);
      }
        return res.status(200).json( thread );
    });
  },

  getRepliesForThread(req, res) {
    Thread.findById( req.params.threadId)
    .populate('replies')
    .exec(
      (err, thread) => {
      if (err ) {
        return res.status(500).json(err);
      }

        return res.status(200).json(thread);
    })
  }
}
