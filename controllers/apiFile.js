const File = require('../models/File');
const app = require('../app');

exports.postUploadFile = (req, res) => {
  app.upload(req, res, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: 'Failed to upload file',
      });
    }
    const {
      originalname,
      encoding,
      filename,
      mimetype,
      size,
      path,
    } = req.file;

    const newFile = {
      originalname,
      encoding,
      filename,
      mimetype,
      size,
      path,
      url: `/upload/${filename}`,
    };

    File.create(newFile)
      .then(result => res.json({
        success: true,
        message: result,
      }))
      .catch(e => (res.json({
        success: false,
        message: e.message,
      })));
  });
};
