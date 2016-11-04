const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const User = new mongoose.Schema({
  name: {type: String},
  facebookId: {type: Number},
  email: {type:String},
  imgUrl: {type: String},
  password: {type: String}
})
User.plugin(findOrCreate)

module.exports = mongoose.model('User', User);
