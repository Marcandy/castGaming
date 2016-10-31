const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {type:String},
  email: {type:String},
  imgUrl: {type: String},
  password: {type: String}
})

module.exports = mongoose.model('User', User);
