const mongoose = require('mongoose');

const User = new mongoose.Schema({
  name: {type: String},
  id: {type: Number},
  email: {type:String},
  imgUrl: {type: String},
  password: {type: String}
})

module.exports = mongoose.model('User', User);
