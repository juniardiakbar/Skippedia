const Mahasiswa = require("../models/Mahasiswa");
const User = require('../models/User');
const Rating = require('../models/Rating');
const File = require('../models/File');

/**
 * GET /dashboad/user
 * Show dashboard user.
 */
exports.getDashboardHome = (req, res) => {
  const unknownUser = !(req.user);
  res.render('dashboard/home', {
    title: 'Dashboard',
    unknownUser,
  });
};

/**
 * GET /dashboad/user
 * Show dashboard user.
 */
exports.getDashboardUser = (req, res) => {
   const unknownUser = !(req.user);
   const findUser = User.find()
   
   Promise.all([findUser])
   .then(([user]) => {
     res.render('dashboard/user', {
       title: 'Dashboard User',
       unknownUser,
       user
     });
   })
   .catch(() => {
     throw new Error("Error");
   });
};

/**
 * GET /dashboad/mahasiswa
 * Show dashboard mahasiswa.
 */
exports.getDashboardMahasiswa = (req, res) => {
  const unknownUser = !(req.user);
  const findMahasiswa = Mahasiswa.find()
  
  Promise.all([findMahasiswa])
  .then(([mahasiswa]) => {
    res.render('dashboard/mahasiswa', {
      title: 'Dashboard Mahasiswa',
      unknownUser,
      mahasiswa
    });
  })
  .catch(() => {
    throw new Error("Error");
  });
};

/**
 * GET /dashboad/rating
 * Show dashboard rating.
 */
exports.getDashboardRating = (req, res) => {
  const unknownUser = !(req.user);
  const findRating = Rating.find()
  
  Promise.all([findRating])
  .then(([rating]) => {
    res.render('dashboard/rating', {
      title: 'Dashboard Rating',
      unknownUser,
      rating
    });
  })
  .catch(() => {
    throw new Error("Error");
  });
};

/**
 * GET /dashboad/file
 * Show dashboard file.
 */
exports.getDashboardFile = (req, res) => {
  const unknownUser = !(req.user);
  const findFile = File.find()
  
  Promise.all([findFile])
  .then(([file]) => {
    res.render('dashboard/file', {
      title: 'Dashboard File',
      unknownUser,
      file
    });
  })
  .catch(() => {
    throw new Error("Error");
  });
};