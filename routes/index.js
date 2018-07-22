// set up dependencies
var express = require('express');
var router = express.Router();
var text = require('./text.json');

// setup routing
router.get('/', function(req, res, next) {
  res.render('index', {
      text: text
  })
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', {
  })
});

router.get('/about', function(req, res, next) {
  res.render('about', {
  })
});

router.get('/buy', function(req, res, next) {
  res.render('buy', {
  })
});

router.get('/references', function(req, res, next) {
  res.render('references', {
  })
});

// export the module
module.exports = router;
