const mongoose = require('mongoose');
const {Schema, model} = require('mongoose');

const cardSchema = new Schema({
  name: {
    required: true,
    type: String,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    required: true,
    type: String,
  },
  owner: {
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSchema',
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    default: [],
  }],
  created: {
    type: Date,
    default: Date.now,
  }
})

module.exports = model('card', cardSchema);