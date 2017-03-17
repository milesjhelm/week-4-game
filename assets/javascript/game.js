

//the ranges for the target and for the value of each gem/crystal
var targetLow = 19;
var targetHigh = 100;
var guessLow = 1;
var guessHigh = 12;

//overall wins and losses .. not to be reset after a round
var wins = 0;
var losses = 0;

// these reset each round
var score = 0;
var target = 1;

// the gems.. these values changes each round
var emerald = 1;
var diamond = 1;
var ruby = 1;
var amethyst = 1;

function setRound() {
  emerald = Math.floor((Math.random() * guessHigh) + guessLow);
  diamond = Math.floor((Math.random() * guessHigh) + guessLow);
  ruby = Math.floor((Math.random() * guessHigh) + guessLow);
  amethyst = Math.floor((Math.random() * guessHigh) + guessLow);
  target = Math.floor((Math.random() * targetHigh) + targetLow);
  score = 0;
  document.getElementById("roundTarget").innerHTML = ("Target: " + target);
    
    document.getElementById("roundTarget").innerHTML = target;
    setTarget();
    showScore();
    showWinsLosses();


}

function showScore() {
  document.getElementById("roundScore").innerHTML = ("Score: " + score);
}

function showWinsLosses() {
  document.getElementById("wins").innerHTML = ("Wins: " + wins);
  document.getElementById("losses").innerHTML = ("Losses: " + losses);
}

function setTarget() {
  target = Math.floor((Math.random() * targetHigh) + targetLow);
  document.getElementById("roundTarget").innerHTML = ("Target: " + target);
}

// Check to see if user has won or lost
function checkForWin() {
    if (score === target) {
      wins++;
      showWinsLosses();
      setRound();
    }
    else if (score > target ) {
      losses++;
      showWinsLosses();
      setRound();
    }
    else {
      showScore();
    }
}

$(document).ready(function() {

  // Variables
  var firstNumber = "";
  var secondNumber = "";
  var operator = "";
  var result = 0;
  var hasNumber = false;
  var firstNumberComplete = false;
  var lockButtons = false;

  setRound();


  // If the gems/crystals are clicked, add that gem's current value to score
  $("#emerald").click(function(){
    score += emerald;
    checkForWin();
  });

  $("#ruby").click(function(){
    score += ruby;
    checkForWin();
  });

  $("#amethyst").click(function(){
    score += amethyst;
    checkForWin();
  });

  $("#diamond").click(function(){
    score += diamond;
    checkForWin();
  });


});
