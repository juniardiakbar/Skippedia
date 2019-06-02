const mongoose = require('mongoose');
const fs = require('fs');

const fileSchema = new mongoose.Schema({
  originalname: String,
  encoding: String,
  filename: {
    type: String,
    unique: true,
  },
  mimetype: String,
  url: String,
  size: String,
  path: String,
}, {
  timestamps: true
});

// fileSchema.pre('remove', (next) => {
//   const file = this;
//   fs.unlink(file.path, (err) => {
//     if (err) {
//       return next(err);
//     }
//     return next();
//   });
// });

const File = mongoose.model('File', fileSchema);
module.exports = File;
