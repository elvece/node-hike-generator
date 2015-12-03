var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

////////////////
//HIKE SCHEMA//
//////////////
var hikeSchema = new Schema(
  {
    admin_id: Number,
    name: String,
    location: String,
    area: Number,
    distance_miles: Number ,
    duration_hours: Number,
    difficulity: Number,
    feature: [String],
    file: {name: String, bin: Buffer},
    map: [Number],
    info: String,
  }
);

////////////////////
//QUESTION SCHEMA//
//////////////////
var questionSchema = new Schema(
  {
    admin_id: Number,
    question: String,
    options: [String],
  }
);

//make models
var Hike = mongoose.model('hike', hikeSchema);
var Question = mongoose.model('question', questionSchema);

//connect to db
mongoose.connect('mongodb://localhost/the-trail');

//export for use in other files
module.exports = {
  Hike: Hike,
  Question: Question
};


