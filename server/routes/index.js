var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../database');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hike Generator' });
});

router.get('/hikes', function(req, res, next) {
  res.render('hikes', { title: 'All Hikes' });
});

router.get('/hikes', function(req, res, next) {
  //get data from database
});

router.post('/hikes', function(req, res){
  //accepts data from site, which will be user questionnaire selections
});

module.exports = router;
