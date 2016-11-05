const mongoose = require('mongoose');
const findOrCreate = require('mongoose-findorcreate')

const User = new mongoose.Schema({
  name: {type: String},
  facebookId: {type: Number},
  email: {type:String},
  imgUrl: {type: String},
  replies: [{type: mongoose.Schema.Types.ObjectId, ref: 'Reply'}]
})
User.plugin(findOrCreate)

module.exports = mongoose.model('User', User);
