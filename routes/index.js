// set up dependencies
var express = require('express');
var router = express.Router();
var text = require('./text.json');

// setup routing
router.get('/', function(req, res, next) {
  res.render('base', {
      text: text
  })
});

// export the module
module.exports = router;
