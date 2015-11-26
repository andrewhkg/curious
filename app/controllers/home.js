var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');

module.exports = function (app) {
  app.use('/', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.redirect('/signin');
  }
}

router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/attractions', function (req, res, next) {
  res.render('attraction/index');
});

router.get('/attractions/:id', function (req, res, next) {
  res.render('attraction/show');
});

router.get('/booking/new', authenticatedUser, function (req, res, next) {
  res.render('booking/new');
});

router.get('/booking/index', authenticatedUser, function (req, res, next) {
  res.render('booking/index');
});

