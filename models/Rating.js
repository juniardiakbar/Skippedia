const mongoose = require('mongoose');

const ratingSchema = new mongoose.Schema({
  nilai: Number,
  content: String,
  untuk: String,
  dari: String
}, {
  timestamps: true
});

const Rating = mongoose.model('Rating', ratingSchema);
module.exports = Rating;