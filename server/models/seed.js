var mongoose = require('mongoose');
var schema = require('./database');


function seedDatabase() {

  schema.Hike.find({}, function(err, documents){
    if(documents.length === 0) {

      //new hike schema
      var hike_1 = new schema.Hike(
        {
          admin_id: 1,
          name: "Maroon Creek Trail",
          location: "Maroon Bells, Aspen, CO",
          area: 5,
          distance: 3.2,
          duration: 2.5,
          difficulty: 1,
          feature: ["Lake"],
          file: {name: "Maroon Bells", bin: "img/maroon-bells.jpg"},
          map: [39.0708, -106.9890],
          info: "Information"
        }
      ).save(function(err) {
        if (err) throw err;
        console.log('Hike saved successfully!');
      });
    }
  });

  schema.Question.find({}, function(err, documents){
    if(documents.length === 0){

      //new question schema
      var question_1 = new schema.Question(
        {
          admin_id: 1,
          question: "How long are you interested in hiking for?",
          options: ["A few hours", "Half-day", "Full-day"],
        }
      );

      var question_2 = new schema.Question(
        {
          admin_id: 2,
          question: "What is your experience level?",
          options: ["Beginner", "Intermediate", "Advanced"],
        }
      );

      //save questions in db
      question_1.save(function(err) {
        if (err) throw err;
        console.log('Question saved successfully!');
      });
      question_2.save(function(err) {
        if (err) throw err;
        console.log('Question saved successfully!');
      });
    }
  });
}


module.exports = seedDatabase;

