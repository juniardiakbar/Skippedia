const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  nama: String,
  nim: {
      type: String,
      unique: true,
  },
  angkatan: String,
  rating: Number,
  count : Number,
  haveLogin : Boolean,
  jurusan: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
  },
});

// Pre Save
// mahasiswaSchema.pre('save', function (next) {
//   const mahasiswa = this;
//   const Rating = mongoose.model('Rating');
//   const countRating = Rating.find({'untuk': mahasiswa.nim}).countDocuments();
//   Promise.all([countRating, mahasiswa])
//     .then(([countR, mhs]) => {
//       mhs.count = countRating;
//       Promise.all([mhs.save()])
//         .then(([data]) => {
//           return data
//         })
//         .catch(e => {
//           return e
//         })
//     })
//     .then(() => {
//       next();
//     })
//     .catch(e => next(e));
// });

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);
module.exports = Mahasiswa;