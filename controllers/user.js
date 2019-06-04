const { promisify } = require('util');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const passport = require('passport');
const _ = require('lodash');
const User = require('../models/User');

const randomBytesAsync = promisify(crypto.randomBytes);

/**
 * GET /login
 * Login page.
 */
exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('account/login', {
    title: 'Login'
  });
};

/**
 * POST /login
 * Sign in using email and password.
 */
exports.postLogin = (req, res, next) => {
  req.assert('email', 'Email is not valid').isEmail();
  req.assert('password', 'Password cannot be blank').notEmpty();
  req.sanitize('email').normalizeEmail({ gmail_remove_dots: false });

  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/login');
  }

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err); }
    if (!user) {
      req.flash('errors', info);
      return res.redirect('/login');
    }
    req.logIn(user, (err) => {
      if (err) { return next(err); }
      // req.flash('success', { msg: 'Success! You are logged in.' });
      res.redirect(req.session.returnTo || '/');
    });
  })(req, res, next);
};

/**
 * GET /logout
 * Log out.
 */
exports.logout = (req, res) => {
  req.logout();
  req.session.destroy((err) => {
    if (err) console.log('Error : Failed to destroy the session during logout.', err);
    req.user = null;
    res.redirect('/');
  });
};

/**
 * DELETE /user/id/:id
 * Delete user
 */
exports.deleteUser = (req, res) => {
  User.findById(req.params.id)
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
 * GET /account
 * Show account user
 */
exports.getAccount = (req, res) => {
  if (req.user.email != 'admin@skipedia.id'){
    var nim = req.user.email.split('@')
    return res.redirect('/mahasiswa/info/'+nim[0]);
  } else {
    req.flash('errors', { msg: 'You are an admin!' });
    res.redirect('/');
  }
}