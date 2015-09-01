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
mongoose.connect('mongodb://localhost/hike-generator');

//export for use in other files
module.exports = {
  Hike: Hike,
  Question: Question
};

// var question1 = new MakeQuizItem(1, "How long are you interested in hiking for?", ["A few hours", "Half-day", "Full-day"]);
// var question2 = new MakeQuizItem(2, "What is your experience level?", ["Beginner", "Intermediate", "Advanced"]);


