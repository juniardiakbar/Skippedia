/**
 * Module dependencies.
 */
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const errorHandler = require('errorhandler');
const lusca = require('lusca');
const dotenv = require('dotenv');
const MongoStore = require('connect-mongo')(session);
const flash = require('express-flash');
const path = require('path');
const mongoose = require('mongoose');
const passport = require('passport');
const crypto = require("crypto");
const expressValidator = require('express-validator');
const expressStatusMonitor = require('express-status-monitor');
const sass = require('node-sass-middleware');
const multer = require('multer');
const seeders = require("./seeders");
const config = require("./config");

/**
 * Load all seeder
 */
seeders();

/**
 * Load environment variables from .env file, where API keys and passwords are configured.
 */
dotenv.config({ path: '.env.example' });
const passportConfig = require("./config/passport");
const { isAuthenticated, isAdmin } = passportConfig;

/**
 * Controllers (route handlers).
 */
const homeController = require('./controllers/home');
const userController = require('./controllers/user');
const mahasiswaController = require('./controllers/mahasiswa');
const dashboardController = require('./controllers/dashboard');
const ratingController = require('./controllers/rating');
const apiController = require('./controllers/apiFile');
const fileController = require('./controllers/file');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/skipedia');
mongoose.connection.on('error', (err) => {
  console.error(err);
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

/**
 * Express configuration.
 */
app.set('host', process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(expressStatusMonitor());
app.use(compression());
app.use(sass({
  src: path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public')
}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressValidator());
app.use(session({
  resave: true,
  saveUninitialized: true,
  secret: process.env.SESSION_SECRET,
  cookie: { maxAge: 1209600000 }, // two weeks in milliseconds
  store: new MongoStore({
    url: process.env.MONGODB_URI,
    autoReconnect: true,
  })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use((req, res, next) => {
  if (req.path === '/api/upload') {
    next();
  } else {
    lusca.csrf()(req, res, next);
  }
});
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');
app.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});
app.use((req, res, next) => {
  // After successful login, redirect back to the intended page
  if (!req.user
    && req.path !== '/login'
    && req.path !== '/signup'
    && !req.path.match(/^\/auth/)
    && !req.path.match(/\./)) {
    req.session.returnTo = req.originalUrl;
  } else if (req.user
    && (req.path === '/account' || req.path.match(/^\/api/))) {
    req.session.returnTo = req.originalUrl;
  }
  next();
});
app.use('/', express.static(path.join(__dirname, 'public'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/chart.js/dist'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/popper.js/dist/umd'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js'), { maxAge: 31557600000 }));
app.use('/js/lib', express.static(path.join(__dirname, 'node_modules/jquery/dist'), { maxAge: 31557600000 }));
app.use('/webfonts', express.static(path.join(__dirname, 'node_modules/@fortawesome/fontawesome-free/webfonts'), { maxAge: 31557600000 }));

/**
 * Static Globals
 * Can be accessed using req.app.locals
 */
app.locals.moment = require("moment");

const storage = multer.diskStorage({
  destination: path.join(__dirname, config.uploadDir),

  filename: (req, file, cb) => {
    crypto.pseudoRandomBytes(16, (err, raw) => {
      if (err) {
        return cb(err);
      }
      cb(
        null,
        `${raw.toString("hex")}-${Date.now()}${path.extname(file.originalname)}`
      );
    });
  }
});

exports.upload = multer({
  storage
}).single("file");

/**
 * Primary app routes
 */
app.get('/', homeController.index);
app.get('/login', userController.getLogin);
app.get('/logout', userController.logout);
app.get('/account', userController.getAccount);
app.get('/adminlogin', userController.getAdminLogin);
app.post('/adminlogin', userController.postLogin);

/**
 * API routes
 */
app.post('/api/file/upload', apiController.postUploadFile);

/**
 * Mahasiswa routes
 */
app.get('/mahasiswa', mahasiswaController.getAngkatan);
app.get('/mahasiswa/unix', mahasiswaController.getMahasiswaUNIX);
app.get('/mahasiswa/bit', mahasiswaController.getMahasiswaBIT);
app.get('/mahasiswa/enigma', mahasiswaController.getMahasiswaEnigma);
app.get('/mahasiswa/all', mahasiswaController.getMahasiswaAll);
app.get('/mahasiswa/allHome', mahasiswaController.getMahasiswaAllHome);
app.delete('/mahasiswa/delete/:id', isAuthenticated, mahasiswaController.deleteMahasiswa);
app.get('/mahasiswa/info/:nim', isAuthenticated, mahasiswaController.getInfoMahasiswa);
app.get('/mahasiswa/comment/:nim', isAuthenticated, mahasiswaController.getCommentMahasiswa);
app.post('/mahasiswa/comment/:nim', isAuthenticated, mahasiswaController.postCommentMahasiswa);
app.get('/mahasiswa/comment/:nim/:id/edit', isAuthenticated, mahasiswaController.getEditCommentMahasiswa);
app.post('/mahasiswa/comment/:nim/:id/edit', isAuthenticated, mahasiswaController.postEditCommentMahasiswa);
app.delete('/mahasiswa/comment/:nim/:id/', isAuthenticated, mahasiswaController.deleteCommentMahasiswa);
app.get('/mahasiswa/edit/', isAuthenticated, mahasiswaController.getEditMahasiswa);
app.post('/mahasiswa/edit/', isAuthenticated, mahasiswaController.postEditMahasiswa);

/**
 * User routes
 */
app.delete('/user/delete/:id', isAuthenticated, userController.deleteUser);
app.delete('/rating/delete/:id', isAuthenticated, ratingController.deleteRating);
app.delete('/file/delete/:id', isAuthenticated, fileController.deleteFile);


/**
 * Dashboard routes
 */
app.get('/dashboard', isAuthenticated, isAdmin, dashboardController.getDashboardHome);
app.get('/dashboard/all', isAuthenticated, isAdmin, dashboardController.getDashboardAll);
app.get('/dashboard/user', isAuthenticated, isAdmin, dashboardController.getDashboardUser);
app.get('/dashboard/mahasiswa', isAuthenticated, isAdmin, dashboardController.getDashboardMahasiswa);
app.get('/dashboard/rating', isAuthenticated, isAdmin, dashboardController.getDashboardRating);
app.get('/dashboard/file', isAuthenticated, isAdmin, dashboardController.getDashboardFile);

/**
 * OAuth authentication routes. (Sign in)
 */
app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
  res.redirect(req.session.returnTo || '/');
});

/**
 * Error Handler.
 */
app.use((req, res, next) => {
  res.status(404).render("errors/404", {
    title: 'ERROR 404'
  });
});

if (process.env.NODE_ENV === 'development') {
  // only use in development
  app.use(errorHandler());
} else {
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).render("errors/500", {
      title: 'ERROR 500'
    });
  });
}

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;
