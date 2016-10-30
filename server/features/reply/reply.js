const mongoose = require('mongoose');

const Reply = new mongoose.Schema({
  author: {type: String},
  content: {type: String},
  dateCreated: {type: String}

})
