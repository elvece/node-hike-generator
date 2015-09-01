##Structure (HTML Layout)
3 Pages:
1. Main page:
  * Jumbotron: title on top of image
  * Nav bar
  * Info blurb
  * Button to start quiz
1. Quiz Page:
1. Results Page:

##Nav
* link to page with all hikes?
* about
*

##Styling
* Bootstrap layout
* Image transitions
* Scrolling animations
* circle mouse

##Quiz
* Pop up box

##Results page
* images
* text
* google maps api
* links to other suggestion pages

##JS

##Questions
* When get result, pull page of that result and view that? or do i append to the dom with the particular pieces that need to be on the page for that result?

##NOTES:
*priority ranking
*make sure every hike has a answer to every question
*weather api
*MVP - mininum viable product
*Naismith's rule: allow 1 hour for every 3 miles (5 km) forward, plus 1 hour for every 2000 feet (600 metres) of ascent.
***progress for how far you have gone in quiz, dude walking up a mountain

##Quiz Breakdown

on start quiz button click:
Iteration 1:
-have quiz questions on main page
  -create questions- get question from quiz array, append this to
  -create answe
-display results below

Iteration 2:
-when click button, have top of page move up, and open questions below with fade, one question at a time fades in

Iteration 3:
-inititate a pop up window of quiz


-cycle through quiz questions, keeping tracking of users input
-with user input, compare to allHikes object and pull the best result, depending on question priority


##Logic
-if question 1 input is value 1, options are: 3, 6, 8
--if question 1 input is value 2, options are: 2, 4, 9
-if question 1 input is value 3, options are: 1, 5, 7

-if question 2 input is value 1, options are: 1, 2, 3
--if question 2 input is value 2, options are: 4, 5, 6
-if question 2 input is value 3, options are: 7, 8, 9

-if question 3 input is value 1, options are: 3, 6, 9
-if question 3 input is value 2, options are: 2, 5, 8
--if question 3 input is value 3, options are: 1, 4, 7

example noted with -- selections:
half day hike, intermediate, lake == 4

--find most frequent option and return that result
--how do I handle if not all categories are met?

*conditional logic, skip logic, conditional branching

***sections for colors
anchor tag with href of where you want it to go (section id), class page scroll?
