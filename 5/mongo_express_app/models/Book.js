const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  auther: {
    type: String,
    trim: true,
  },
  title: {
    type: String,
    trim: true,
  },
  edition: {
    type: String,
    trim: true,
  },
  publisher: {
    type: String,
    trim: true,
  },
  year: {
    type: Number,
    trim: true,
  },
});

module.exports = mongoose.model('Book', bookSchema);
