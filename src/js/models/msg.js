const mongoose = require('mongoose');
const { Schema } = mongoose;

const msgSchema = new Schema({
  message: String,
  key: String,
  creation: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Msg', msgSchema);
