// jQuery DOM maniuplation

// *** variables *** ///

//start button
var $start = $('#start-btn');
//next button
var $next = $('#next-btn');
//again button
var $again = $('#again-btn');
//results button
var $results = $('#get-results-btn');
//question div
var $question = $('#question');
//counts which question on
var questionCounter = 0;
//holds user selections
var selections = [];

// *** inital page view *** //

$(document).on('ready', function() {
  //scrolls to top of page on refresh
  $(this).scrollTop(0);
  //hides quiz section initially
  $('.quiz-box').hide();
  //hide next button initially
  $next.hide();
  //hide again button initially
  $again.hide();
  //hide get-results button initally
  $results.hide();
});


//on click of start button, display first question and show next button
$start.on ('click', function(event){

  event.preventDefault();
  //show the quiz area
  $('.quiz-box').show();
  //hide start button
  $start.hide();
  //create first question
  $question.html(createQuestion(questionCounter)).hide().fadeIn();
  //increase counter by one
  questionCounter++;
  //run show buttons function
  showButtons();
  //move to questions div
  $('html, body').animate({
    scrollTop: $('#question').offset().top
  }, 1000);

});


$next.on('click', function(event){

  getSelection();

  event.preventDefault();

  //hide next button
  // $next.hide();

  //clear question div then run function
  $question.html("").fadeOut(function() {
    //if question counter is less than the length of the quiz array, make the next question appear by creating it using the create question function using the current value of the question counter as the index
    if (questionCounter < quizArr.length){
      $question.html(createQuestion(questionCounter)).fadeIn();
    }

    questionCounter++;
    showButtons();

  });
});


$results.on('click', function(event){

  getSelection();

  event.preventDefault();
  //cut off weirdness in first index of user selections array
  selections.splice([0],1);
  //render user results
  getHikeInfo(getResults()).render();
  //maps ready load
  google.maps.event.addDomListener(window, 'load', initialize());
  //show results section
  // $('.results-box').show();

  //move to results div
  // $('html, body').animate({
  //   scrollTop: $('a[name = "test"]').offset().top
  // }, 1000);
  //hide next button
  // $next.hide();

  //hide questions
  $question.hide();
  //hide get results button
  $results.hide();
  //show get a new hike button
  // $again.show();

console.log("selections:" +selections);
console.log("counter:" +questionCounter);


});


// $again.on('click', function(event){
//   event.preventDefault();
//   $('#results').html("");
//   $again.hide();
//   //create first question
//   $question.html(createQuestion(questionCounter)).hide().fadeIn();
//   //increase counter by one
//   questionCounter++;
//   //run show buttons function
//   showButtons();
//   //move to questions div
//   $('body').animate({
//     scrollTop: $('#question').offset().top
//   }, 1000);
// });


