const File = require('../models/File');

/**
 * DELETE /file/delete/:id
 * Delete file
 */
exports.deleteFile = (req, res) => {
  File.findById(req.params.id)
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