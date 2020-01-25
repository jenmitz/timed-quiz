var startQuiz = document.querySelector("#startQuiz").addEventListener("click", goToQuiz);

var wrongOne = document.querySelector("#buttonOne").addEventListener("click", correctWrong);
var wrongTwo = document.querySelector("#buttonTwo").addEventListener("click", correctWrong);
var wrongThree = document.querySelector("#buttonThree").addEventListener("click", correctWrong);
var correct = document.querySelector("#correct").addEventListener("click", correctWrong);
var answers = "";
var timeLeft = 60;

let questions = [
    {
        question: "Which of the following is NOT an animal you can keep on your farm?",
        wrongOne:  "Blue chicken",
        wrongTwo: "Dinosaur",
        wrongThree: "Slime",
        correct: "Llama"
    },
    {
        question: "You need to visit ________ to upgrade your tools.",
        correct: "Clint",
        wrongTwo: "Linus",
        wrongThree: "Pierre",
        wrongThree: "Harvey"
    },
    {
        question: "Which of these events will never happen overnight on your farm?",
        wrongOne: "Meteor crash",
        correct: "Runaway animal",
        wrongThree: "Visit from a witch",
        wrongTwo: "Crop fairy"
    },
    {
        question: "Which of these is a valid method of finding cooking recipes?",
        wrongOne: "Buy them",
        correct: "Watch the TV every day",
        wrongThree: "Fish them up in treasure chests",
        wrongTwo: "Experiment with food items"
    },
    {
        question: "What item do you need in order to obtain the galaxy sword?",
        wrongOne: "Void Egg",
        wrongTwo: "Rabbit's foot",
        correct: "Prismatic shard",
        wrongThree: "Iridium bar"
    },
];

// check if the user selected the correct answer
function correctWrong () {
    if (wrongOne === true || wrongTwo === true || wrongThree === true); {
        // -10 seconds from timer here
    };
};



// redirects to the quiz (questions.html) when startQuiz button is clicked
function goToQuiz () {
    window.location.href = "questions.html";
};

// timer initiates as soon as the page is pulled up
window.onload = function () {
    display = document.querySelector('#timeCountdown');
    startTimer(seconds, display);
};

















/* var questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    ///etc.
  ]; */
