const mongoose = require('mongoose');

const Reply = new mongoose.Schema({
  author: {type: String},
  content: {type: String},
  count: {type: Number},
  dateCreated: {type: Date, default: Date.now},
  thread: {type: String}
})

module.exports = mongoose.model('Reply', Reply);
