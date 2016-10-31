const mongoose = require('mongoose');
const reply =  require('../reply/reply.js');

const Thread = new mongoose.Schema({
  title: {type: String},
  dateCreated: {type: Number},
  author: {type: String},
  content: {type: String},
  // replies: [reply]
})

module.exports = mongoose.model('Thread', Thread)
