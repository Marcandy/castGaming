const mongoose = require('mongoose');


const Game = new mongoose.Schema({
  name: {type:String},
  subtext: {type:String},
  imgUrl: {type: String},
  threads: [{type: mongoose.Schema.Types.ObjectId, ref: 'Thread'}]
})

module.exports = mongoose.model('Game', Game);
