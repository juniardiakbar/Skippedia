const mongoose = require('mongoose');

const mahasiswaSchema = new mongoose.Schema({
  nama: String,
  nim: {
      type: String,
      unique: true,
  },
  angkatan: String,
  rating: Number,
  jurusan: String,
  image: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
  },
});

const Mahasiswa = mongoose.model('Mahasiswa', mahasiswaSchema);
module.exports = Mahasiswa;