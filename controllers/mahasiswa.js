const Mahasiswa = require("../models/Mahasiswa");
const Rating = require("../models/Rating");
const User = require("../models/User")
/**
 * GET /mahasiswa
 * Show angkatan.
 */
exports.getAngkatan = (req, res) => {
  const unknownUser = !(req.user);

  res.render('mahasiswa/angkatan', {
    title: 'Cari Mahasiswa',
    unknownUser,
  });
};

/**
 * GET /mahasiswa/unix
 * Show mahasiswa unix.
 */
exports.getMahasiswaUNIX = (req, res) => {
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
    $and: [
      {
        angkatan: 'unix'
      },
      {
        $or: [
          {
            nama: new RegExp(search, "i")
          },
          {
            nim: new RegExp(search, "i")
          }
        ]
      }
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
    res.render('mahasiswa/unix', {
      title: 'Cari Mahasiswa UNIX 2017',
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
* GET /mahasiswa/bit
* Show mahasiswa bit.
*/
exports.getMahasiswaBIT = (req, res) => {
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
    $and: [
      {
        angkatan: 'bit'
      },
      {
        $or: [
          {
            nama: new RegExp(search, "i")
          },
          {
            nim: new RegExp(search, "i")
          }
        ]
      }
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
    res.render('mahasiswa/bit', {
      title: 'Cari Mahasiswa BIT 2016',
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
* GET /mahasiswa/enigma
* Show mahasiswa enigma.
*/
exports.getMahasiswaEnigma = (req, res) => {
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
    $and: [
      {
        angkatan: 'enigma'
      },
      {
        $or: [
          {
            nama: new RegExp(search, "i")
          },
          {
            nim: new RegExp(search, "i")
          }
        ]
      }
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
    res.render('mahasiswa/enigma', {
      title: 'Cari Mahasiswa Enigma 2015',
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
 * GET /mahasiswa/all
 * GET mahasiswa
 */
exports.getMahasiswaAll = (req, res) => {
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
  if (_angkatan != 'all'){
    if (_jurusan != 'all'){
      options = {
        $and: [
          {
            angkatan: _angkatan,
            jurusan: _jurusan
          },
          {
            $or: [
              {
                nama: new RegExp(search, "i")
              },
              {
                nim: new RegExp(search, "i")
              }
            ]
          }
        ]
      };
    } else {
      options = {
        $and: [
          {
            angkatan: _angkatan
          },
          {
            $or: [
              {
                nama: new RegExp(search, "i")
              },
              {
                nim: new RegExp(search, "i")
              }
            ]
          }
        ]
      };
    }
  } else {
    if (_jurusan != 'all'){
      options = {
        $and: [
          {
            jurusan: _jurusan
          },
          {
            $or: [
              {
                nama: new RegExp(search, "i")
              },
              {
                nim: new RegExp(search, "i")
              }
            ]
          }
        ]
      };
    } else {
      options = {
        $or: [
          {
            nama: new RegExp(search, "i")
          },
          {
            nim: new RegExp(search, "i")
          }
        ]
      };
    }
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
    res.render('mahasiswa/all', {
      title: 'Cari Mahasiswa Enigma 2015',
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
 * DELETE /mahasiswa/id/:id
 * Delete mahasiswa
 */
exports.deleteMahasiswa = (req, res) => {
  Mahasiswa.findById(req.params.id)
    .then(result => {
      if (result) {
        result.remove(req.params.id);
      } else {
        throw new Error("Delete fail");
      }
    })
    .then(() => {
      res.json({
        success: true,
        message: "Successfully deleted"
      });
    })
    .catch(e => {
      res.json({
        success: false,
        message: e.message
      });
    });
}

/**
* GET /mahasiswa/info/nim/:nim
* Show mahasiswa information.
*/
exports.getInfoMahasiswa = (req, res) => {
  let {
    page, // page number
    limit, // limit per page
    sort, // sortedBy
    method, // sortMethod
  } = req.query;

  limit = 2;
  page = parseInt(page, 10) > 0 ? parseInt(page, 10) : 1;
  sort = "createdAt";
  method = "DESC";
  const sortObject = {};
  sortObject[sort] = method;

  const countRating = Rating.countDocuments({untuk: req.params.nim});
  const totalRating = Rating.countDocuments({untuk: req.params.nim});
  var findRating = Rating.find({untuk: req.params.nim})
  .limit(limit)
  .skip((page - 1) * limit)
  .sort(sortObject);
  
  const unknownUser = !(req.user);
  const findMahasiswa = Mahasiswa.findOne({
    nim: req.params.nim
  }).populate("image");
  
  var banyakRating = 0;
  var account = false;
  if (req.user) {
    const userMail = req.user.email;
    banyakRating = Rating.countDocuments({untuk: req.params.nim, dari:req.user.id});
    if (userMail != 'admin@skipedia.id') {
      const userNIM = userMail.split('@')[0]
      if (userNIM == req.params.nim) {
        account = true;
      }
    }
  }
  
  Promise.all([findMahasiswa, findRating, countRating, totalRating, account, banyakRating])
  .then(([mahasiswa, rating, count, total, acc, banyak]) => {
    res.render('mahasiswa/info', {
      title: req.params.nim,
      unknownUser,
      page,
      limit,
      sort,
      count,
      method,
      pages: Math.ceil(total / limit),
      mahasiswa,
      rating,
      acc,
      banyak,

      pageQuery: req.pageQuery || page,
      limitQuery: req.limitQuery || limit,
      methodQuery: req.methodQuery || method,
      sortQuery: req.sortQuery || sort
    });
  })
  .catch(() => {
    throw new Error("Error");
  });

};

/**
* GET /mahasiswa/comment/nim/:nim
* Show mahasiswa information.
*/
exports.getCommentMahasiswa = (req, res) => {

  const findMahasiswa = Mahasiswa.findOne({
    nim: req.params.nim
  })

  const countRating = Rating.countDocuments({
    untuk: req.params.nim,
    dari: req.user.id,  
  });
  Promise.all([findMahasiswa, countRating])
  .then(([mahasiswa, count]) => {
    // console.log(count);
    if (count == 0){
      res.render('mahasiswa/comment', {
        title: 'Tambahkan Komentarmu',
        mahasiswa,
      });
    } else {
      req.flash("errors", {
        msg: "Tidak bisa memberi komentar!"
      });
      res.redirect("back");      
    }
  })
  .catch(() => {
    throw new Error("Error");
  });
};

/**
* POST /mahasiswa/comment/nim/:nim
* Add comment ke mahasiswa.
*/
exports.postCommentMahasiswa = (req, res) => {
  const { nilai, content } = req.body;
  const untuk = req.params.nim;
  const dari = req.user.id;
  newRating = new Rating({
    nilai,
    content,
    untuk,
    dari
  });
  // console.log(nilai)
  newRating
  .save()
  .then(function(result) {
    if (result) {
      const mhs = Mahasiswa.findOne({nim: untuk});
      const mhsRating = Rating.find({untuk: req.params.nim})

      Promise.all([mhsRating, mhs])
      .then(function([rating, mhs]) {
        var sum = 0;
        var i = 0;
        rating.forEach(function(val) {
          sum = sum + val.nilai;
        })
        mhs.rating = sum/rating.length;
        mhs.save().then(function(result) {
          if (result) {
            req.flash("success", {
              msg: "Komentar Anda berhasil dibuat!"
            });
            res.redirect("/mahasiswa/info/nim/"+req.params.nim);    
          } else {
            req.flash("errors", {
              msg: "Tidak bisa memberi komentar!"
            });
            res.redirect("/mahasiswa/info/nim/"+req.params.nim);    
          }
        })
      })

    } else {
      throw new Error("Could not save");
    }
  })
  .catch(e => {
    req.flash("errors", { msg: e.message });
    res.redirect("/mahasiswa/info/nim/"+req.params.nim);
    console.log("Error occured", e);
    return res.redirect("back");
  });
}

/**
* GET /mahasiswa/edit/nim/:nim
* Show mahasiswa information.
*/
exports.getEditMahasiswa = (req, res) => {
  const findMahasiswa = Mahasiswa.findOne(
    {nim: req.params.nim}
  );

  const findUser = User.findOne({
    email: req.user.email
  });

  Promise.all([findMahasiswa, findUser])
  .then(([mahasiswa, user]) => {
    res.render('mahasiswa/edit', {
      title: 'Edit Profile',
      mahasiswa,
      user
    });
  })
  .catch(() => {
    throw new Error("Error");
  });
};

/**
* POST /mahasiswa/edit/nim/:nim
* Add edit ke mahasiswa.
*/
exports.postEditMahasiswa = (req, res) => {
  const image = req.body._image;
  Mahasiswa.findOne({nim: req.params.nim})
    .then(result => {
      if (result) {
        if (image) {
          result.image = image;
        }
        result.save();
        req.flash("success", {
          msg: "Foto berhasil diubah"
        });
        return res.redirect("/mahasiswa/info/nim/"+req.params.nim);
      }
      throw new Error("Could not update");
    })
    .catch(e => {
      req.flash("errors", { msg: e.message });
      console.log("Error occured", e);
      return res.redirect("back");
    });
}