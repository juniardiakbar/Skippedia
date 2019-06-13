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
 * GET /dashboard/all
 * GET dashboard
 */
exports.getDashboardAll = (req, res) => {
  let {
    page, // page number
    limit, // limit per page
    sort, // sortedBy
    method, // sortMethod
    search,
    angkatan,
    jurusan,
  } = req.query;

  limit = parseInt(limit, 10) || 10;
  page = parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
  sort = sort || "nim";
  method = method || "ASC";
  search = search || "";
  const sortObject = {};
  sortObject[sort] = method;
  const _angkatan = angkatan;
  const _jurusan = jurusan;

  var options;
  options = {
    $or: [
      {
        nama: new RegExp(search, "i")
      },
      {
        nim: new RegExp(search, "i")
      },
    ]
  }

  const unknownUser = !(req.user);
  const countMahasiswa = Mahasiswa.countDocuments(options);
  const totalMahasiswa = Mahasiswa.countDocuments(options);
  var findMahasiswa = Mahasiswa.find(options)
    .populate('image')
    .limit(limit)
    .skip((page - 1) * limit)
    .sort(sortObject);

  Promise.all([findMahasiswa, countMahasiswa, totalMahasiswa])
  .then(([mahasiswa, count, total]) => {
    res.render('dashboard/all', {
      title: '',
      unknownUser,
      page,
      limit,
      sort,
      count,
      method,
      pages: Math.ceil(total / limit),
      mahasiswa,

      pageQuery: req.pageQuery || page,
      limitQuery: req.limitQuery || limit,
      methodQuery: req.methodQuery || method,
      sortQuery: req.sortQuery || sort,
      searchQuery: req.searchQuery || search
    });
  })
  .catch(() => {
    throw new Error("Error");
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
  let {
    page, // page number
    limit, // limit per page
    sort, // sortedBy
    method, // sortMethod
    search
  } = req.query;

  limit = parseInt(limit, 10) || 10;
  page = parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
  sort = sort || "nim";
  method = method || "ASC";
  search = search || "";
  const sortObject = {};
  sortObject[sort] = method;

  const options = {
    $or: [
      {
        nama: new RegExp(search, "i")
      },
      {
        nim: new RegExp(search, "i")
      },
    ]
  };

  const unknownUser = !(req.user);
  const countMahasiswa = Mahasiswa.countDocuments(options);
  const totalMahasiswa = Mahasiswa.countDocuments(options);
  var findMahasiswa = Mahasiswa.find(options)
    .populate('image')
    .limit(limit)
    .skip((page - 1) * limit)
    .sort(sortObject);

  Promise.all([findMahasiswa, countMahasiswa, totalMahasiswa])
  .then(([mahasiswa, count, total]) => {
    res.render('dashboard/mahasiswa', {
      title: 'Dashboard Mahasiswa',
      unknownUser,
      page,
      limit,
      sort,
      count,
      method,
      pages: Math.ceil(total / limit),
      mahasiswa,

      pageQuery: req.pageQuery || page,
      limitQuery: req.limitQuery || limit,
      methodQuery: req.methodQuery || method,
      sortQuery: req.sortQuery || sort,
      searchQuery: req.searchQuery || search
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