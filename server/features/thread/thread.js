const mongoose = require('mongoose');

const Thread = new mongoose.Schema({
  title: {type: String},
  dateCreated: {type: Number},
  author: {type: String},
  content: {type: String}
})

module.exports = mongoose.model('Thread', Thread)
