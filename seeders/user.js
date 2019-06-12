const User = require('../models/User');

module.exports = new Promise((resolve, reject) => {
  User.findOne({
    email: 'admin@skipedia.id',
  })
    .then((foundUser) => {
      if (foundUser) {
        return (null);
      }
      const newUser = new User({
        email: 'admin@skipedia.id',
        password: 'Skipedia2019!',
        name: 'Skipedia Admin',
        image: null,
      });
      return newUser.save();
    })

    .then((createdUser) => {
      if (createdUser) {
        resolve(createdUser);
      }
      resolve(null);
    })
    .catch(e => reject(e));
});
