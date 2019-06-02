const Rating = require('../models/Rating');

/**
 * DELETE /rating/id/:id
 * Delete rating
 */
exports.deleteRating = (req, res) => {
  Rating.findById(req.params.id)
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