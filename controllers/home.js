const Mahasiswa = require("../models/Mahasiswa");

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  let {
    limit, // limit per page
    sort, // sortedBy
    method, // sortMethod
  } = req.query;

  limit = 50;
  sort = "rating";
  method = "DESC";
  const sortObject = {};
  sortObject[sort] = method;
  sortObject["count"] = "DESC";
  sortObject["nama"] = "ASC";

  var findBestMahasiswa = Mahasiswa.find({'rating':{$gt:0}})
    .populate('image')
    .limit(limit)
    .sort(sortObject);

  method = "ASC";
  const sortObject2 = {};
  sortObject2[sort] = method;
  sortObject2["count"] = "DESC";
  sortObject["nama"] = "ASC";

  var findWorstMahasiswa = Mahasiswa.find({'rating':{$gt:0}})
    .populate('image')
    .limit(limit)
    .sort(sortObject2);

  var totalIf = Mahasiswa.countDocuments({'rating':{$gt:0}, 'jurusan':'if'});
  var totalSti = Mahasiswa.countDocuments({'rating':{$gt:0}, 'jurusan':'sti'});

  const unknownUser = !(req.user);

  Promise.all([findBestMahasiswa, findWorstMahasiswa, totalIf, totalSti])
  .then(([bestMahasiswa, worstMahasiswa, totalif, totalsti]) => {
    res.render('home', {
      title: 'Home',
      unknownUser,
      pages: Math.ceil(bestMahasiswa.length/10),
      ifpages : Math.ceil(totalif/10),
      stipages : Math.ceil(totalsti/10),
      bestMahasiswa : bestMahasiswa.slice(0,10),
      worstMahasiswa : worstMahasiswa.slice(0,10)
    });
  })
  .catch(() => {
    throw new Error("Error");
  });
};
