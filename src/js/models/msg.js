const mongoose = require('mongoose');
const { Schema } = mongoose;

const msgSchema = new Schema({
  message: String,
  key_public: String,
  key_private: String,
});

module.exports = mongoose.model('Msg', msgSchema);
