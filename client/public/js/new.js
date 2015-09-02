
$(document).on('ready', function() {
  //scrolls to top of page on refresh
  $(this).scrollTop(0);
  //hides quiz section initially
  $('.quiz-box').hide();
  //hides results section initially
  $('.results-box').hide();
  //hide next button initially
  $('#next').hide();
  //hide again button initially
  $('#again').hide();
});

// *** variables *** //

//start button
var $start = $('#start');
//next button
var $next = $('#next');
//again button
var $again = $('#again');
//question div
var $question = $('#question');
//counts which question on
var questionCounter = 0;
//holds user selections
var selections = [];


// *** helper functions *** //

//gets the value of the checked user selection and pushes the value to selections array
function getSelection() {
  selections[questionCounter] = $('input[name="option"]:checked').val();
}

function showButtons(){
  //when the radio button is clicked, if option is selected, show next button
  $('input[type="radio"]').click(function() {
    if($('input[name="option"]:checked').length === 1) {
      $next.show();
    }
  });
  //if number is questions is the length of the quiz array, change the text of the next button
  if (questionCounter === 2 ){ //can get number of items in a collection
    $next.text("Get your hike result!");
  }
}

//FROM OLD
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
  // if no user selection, progress is stopped until selection is made
  // if ($('input[name="option"]:checked').length !== 1) { // had previously isNaN(selections[questionCounter]
  //   alert('Please make a selection!');
  // }
  if ($next.text() === "Get your hike result!"){
    //cut off weirdness in first index of user selections array
    selections.splice([0],1);
    //render user results
    getHikeInfo(getResults()).render();
    //maps ready load
    google.maps.event.addDomListener(window, 'load', initialize());
    //show results section
    $('.results-box').show();
    //move to results div
    $('html, body').animate({
      scrollTop: $('.container-fluid').offset().top
    }, 1000);
    //hide next button
    $next.hide();
    //hide questions
    $question.hide();
    //show get a new hike button
    // $again.show();
  }
  else {
    //hide next button
    $next.hide();
    //clear question div then run function
    $question.html("").fadeOut(function() {
    //if question counter is less than the length of the quiz array, make the next question appear by creating it using the create question function using the current value of the question counter as the index
      if (questionCounter < quizArr.length){
        $question.html(createQuestion(questionCounter)).fadeIn();
      }
      questionCounter++;
      showButtons();
    });

  }

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

//make all questions required so they cant move on until all filled out
