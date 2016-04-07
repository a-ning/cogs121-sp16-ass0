var mongoose = require('mongoose');

var modelSchema = new mongoose.Schema ({
  "email": String,
  "content": String,
  "created": Date
});

module.exports = mongoose.model('Message', modelSchema);