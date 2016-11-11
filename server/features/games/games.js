const mongoose = require('mongoose');


const Game = new mongoose.Schema({
  name: {type:String},
  subtext: {type:String},
  imgUrl: {type: String},
  vidUrl: {type: String},
  threads: [{type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}],
  description: {type: String}
})

module.exports = mongoose.model('Game', Game);
