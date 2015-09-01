var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hike Generator' });
});

router.get('/hikes', function(req, res, next) {
  res.render('index', { title: 'All Hikes' });
});


module.exports = router;
