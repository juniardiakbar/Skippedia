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

  limit = 10;
  sort = "rating";
  method = "DESC";
  const sortObject = {};
  sortObject[sort] = method;
  sortObject["count"] = "DESC";

  var findBestMahasiswa = Mahasiswa.find({'rating':{$gt:0}})
    .populate('image')
    .limit(limit)
    .sort(sortObject);

  method = "ASC";
  const sortObject2 = {};
  sortObject2[sort] = method;
  sortObject2["count"] = "DESC";

  var findWorstMahasiswa = Mahasiswa.find({'rating':{$gt:0}})
    .populate('image')
    .limit(limit)
    .sort(sortObject2);

  const unknownUser = !(req.user);

  Promise.all([findBestMahasiswa, findWorstMahasiswa])
  .then(([bestMahasiswa, worstMahasiswa]) => {
    res.render('home', {
      title: 'Home',
      unknownUser,
      
      bestMahasiswa,
      worstMahasiswa
    });
  })
  .catch(() => {
    throw new Error("Error");
  });
};
