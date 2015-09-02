//JS OOP file - data constructors, instances, and methods

//globals
// var totalQuestions = quizArr.length;
var questionCounter = 0;
var quizArr = [];
var selections = [];
var hikeArr = [];

//quiz constructor
function MakeQuizItem(uuid, question, options){
  this.uuid = uuid;//integer
  this.question = question;//string
  this.options = options;//array of strings
  quizArr.push(this);
}

//hike constructor
function MakeHikeItem(uuid, name, location, distance, duration, difficulty, feature, img, lat, long, info){
  this.uuid = uuid;//integer
  this.name = name;//string
  this.location = location;//string
  this.distance = distance;//float
  this.duration = duration;//float
  this.difficulty = difficulty;//integer
  this.feature = feature;//string
  this.img = img;
  this.map = [lat, long];
  this.info = info;
  hikeArr.push(this);
}

//quiz instances
var question1 = new MakeQuizItem(1, "How long are you interested in hiking for?", ["A few hours", "Half-day", "Full-day"]);
var question2 = new MakeQuizItem(2, "What is your experience level?", ["Beginner", "Intermediate", "Advanced"]);

//hike instances
var hike1 = new MakeHikeItem(1, "Maroon Creek Trail", "Maroon Bells, Aspen, CO", 3.2, 2.5, 1, "Lake", "img/maroon-bells.jpg", 39.0708, -106.9890, "Rated as a whole day hike due to its secluded location, the Maroon Creek Trail contains one of the most spectacular views in Colorado. The trail weaves through aspen groves, pine forests, and rock fields as you follow the Maroon Creek up to the Maroon Bells. The trail starts from west side of the Maroon Lake parking area, before you reach Maroon Lake. You’ll see the bridge to the left of the parking area. Cross it and turn left to follow the trail down the valley along Maroon Creek The easiest way to hike this trail is to start from the top end and follow it down to the East Mearoon Portal. That way, you can catch the bus back up to your car. If you choose this option, make sure you bring your Maroon Bells car pass with you. Show it to the bus driver, and you can then ride the bus for free. The forest service doesn’t check cars for passes at the parking area, so you don’t have to worry about that. Depending on the time of day, these buses run about every 20 minutes, so it's easy to catch a ride. Meh quis odio dreamcatcher iPhone, Banksy aesthetic banh mi. Eu chambray eiusmod, church-key sartorial gastropub deserunt Bushwick pour-over organic four dollar toast selvage typewriter. Flannel Pitchfork artisan, mumblecore ethical viral ex deep v direct trade culpa fap letterpress sartorial fashion axe. Crucifix veniam commodo distillery, DIY Helvetica art party cold-pressed flexitarian odio. Raw denim labore ennui, shabby chic Bushwick Banksy blog Shoreditch ethical reprehenderit. Ad odio semiotics, kogi Etsy umami seitan synth meggings plaid heirloom Blue Bottle leggings keffiyeh. Put a bird on it paleo velit, nesciunt magna fashion axe meggings qui sriracha Wes Anderson gentrify.");
var hike2 = new MakeHikeItem(2, "Alberta Falls", "Rocky Mountain National Park, Estes Park, CO", 1.7, 1, 1, "Waterfall");

//Quiz method to render quiz item on DOM
MakeQuizItem.prototype.render = function() {
  var question = $('#question');
  this.$element = question
    .append('<p><strong>'+this.question+'</strong></p>');
  for (var i = 0; i < this.options.length; i++) {
    this.$element
      .append('<input class="option" type="radio" name="option" value='+i+'> '+this.options[i]+'<br>');
  }
  return this.$element;
};

MakeHikeItem.prototype.toString = function() {
  if (this.difficulty === 1){
    return "Easy";
  }
  if (this.difficulty === 2){
    return "Medium";
  }
  if (this.difficulty === 3){
    return "Hard";
  }
};

//Hike method to render hike results on the DOM
MakeHikeItem.prototype.render = function() {
  var results = $('#results');
  this.$element = results
    .append('<h2>Your suggested hike is:</h2><h3>'
      +this.name+
      '</h3><br>')
    .append('<div class="row"><div class="col-md-4 col-md-offset-2"><a href="#" class="thumbnail"><img src='+this.img+'></a><div class="row text-center"><div class="col-md-12"><ul class="list-group"><li class="list-group-item"><strong>Location: </strong>'+this.location+'</li><li class="list-group-item"><strong>Distance: </strong>'+this.distance+' miles</li><li class="list-group-item"><strong>Duration: </strong>'+this.duration+' hours</li><li class="list-group-item"><strong>Difficulty: </strong>'+this.toString()+'</li><li class="list-group-item"><strong>Features: </strong>'+this.feature+'</li></ul></div></div></div><div class="col-md-4"><p>'+this.info+'</p></div></div>')
    .append('<div class="row"><div class="col-md-6 col-md-offset-3" id="map">'+this.map+'</div></div>');
};

// hike1.render();
