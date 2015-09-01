var mongoose = require('mongoose');
var schema = require('./database');


function seedDatabase() {

  schema.Hike.find({}, function(err, documents){
    if(documents.length===0) {

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
      );

      hike_1.save(function(err) {
        if (err) throw err;
        console.log('Hike saved successfully!');
      });

    }
  });

}

module.exports = seedDatabase;
