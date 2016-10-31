const mongoose = require('mongoose');

const Game = new mongoose.Schema({
  name: {type:String},
  subtext: {type:String},
  imgUrl: {type: String}
})

module.exports = mongoose.model('Game', Game);
