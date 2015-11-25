var express  = require('express');
var router   = express.Router();
var mongoose = require('mongoose');
var Attraction = require('../../models/attraction')

module.exports = function (app) {
  app.use('/api', router);
};

function authenticatedUser(req, res, next) {
  // If the user is authenticated, then we continue the execution
  // Otherwise the request is always redirected to the home page
  if (req.isAuthenticated()) {
    return next();
  } else {
    return res.json({message: "Please Login"});
  }
}

//INDEX
router.get('/attractions', function (req, res){
  Attraction.find({}, function (err, attractions){
    if (err) {
      res.json({message: "There was an error with your GET request " + err});
    } else {
      res.json({attractions: attractions});
    }
  });
})

//SHOW
router.get('/attractions/:id', function (req, res){
  Attraction.findById(req.params.id, function (err, attraction){
    if (err) {
      res.status(400).json({message: "There was an error with your GET request " + err});
    } else {
      res.status(200).json(attraction);
    }
  });
})

// //POST
router.post('/attractions', function (req, res){
  Attraction.create(req.body.attraction, function (err, attraction){
    if (err) {
      res.json({message: "There was an error with your GET request " + err});
    } else {
      res.json({message: "Created!"})
      // res.json(attraction)
    }
  });
})

// //PUT
router.put('/attractions/:id', function (req, res){
  Attraction.findByIdAndUpdate(req.params.id, req.body.attraction,function (err, attractions){
    if (err) {
      res.json({message: "There was an error with your GET request " + err});
    } else {
      res.json({message: "ok" });
    }
  });
})

// DELETE
router.delete('/attractions/:id', function (req, res){
  Attraction.findByIdAndRemove(req.params.id, function (err, attractions){
    if (err) {
      res.json({message: "There was an error with your GET request " + err});
    } else {
      res.json({message: "ok" });
    }
  });
})