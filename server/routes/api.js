var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var schema = require('../database');

//get all hikes
router.get('/hikes', function(req,res){
  schema.Hike.find(function(err, hikes){
    console.log(hikes);
    res.json(hikes);
  });
});





module.exports = router;
