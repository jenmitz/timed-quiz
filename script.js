// variables
var startBtn = document.getElementById("startBtn")
var btnOne = document.getElementById("btnOne");
var btnTwo = document.getElementById("btnTwo");
var btnThree = document.getElementById("btnThree");
var btnFour = document.getElementById("btnFour")
var correct = document.getElementById("correct");
var answers = "";
var time = 0;

// questions & their correct answers
var questions = [
    {
        question: "Which of the following is NOT an animal you can keep on your farm?",
        choices: [
            {text: "Blue chicken", correct: false}, 
            {text: "Dinosaur", correct: false}, 
            {text: "Slime", correct: false}, 
            {text: "Llama", correct: true}
        ]
    },
    {
        question: "You need to visit __________ to upgrade your tools.",
        choices: [
            {text: "Clint", correct: true}, 
            {text: "Linus", correct: false}, 
            {text: "Pierre", correct: false}, 
            {text: "Harvey", correct: false}
        ]
    },
    {
        question: "Which of these events will never happen overnight on your farm?",
        choices: [
            {text: "Meteor crash", correct: false}, 
            {text: "Runaway animal", correct: true}, 
            {text: "Visit from a witch", correct: false}, 
            {text: "Crop fairy", correct: false}
            ]
    },
    {
        question: "Which of these is a valid method of finding cooking recipes?",
        choices: [
            {text: "Buy them", correct: false}, 
            {text: "Watch TV every day", correct: true}, 
            {text: "Fish them up in treasure chests", correct: false}, 
            {text: "Experiment with food ingredients", correct: false}
            ]
    },
    {
        question: "What item do you need in order to obtain the galaxy sword?",
        choices: [
            {text: "Void egg",correct: false}, 
            {text: "Rabbit's foot", correct: false}, 
            {text: "Prismatic shard", correct: true}, 
            {text: "Iridium bar", correct: false}
            ]
    },
];

///////////////////////////////////////////////////////////////////////////////////////////////

// redirect to the quiz when button is clicked
startBtn.addEventListener("click", goToQuiz);

function goToQuiz () {
    window.location.href = "questions.html";
};

for(var i = 0; i < questions.length; i++); {
    var userChoice = window.prompt(questions[i].prompt);
    if (userChoice === questions[i].choices) {
        time++
    } else {

    }
}
console.log(userChoice);

// countdown (60 seconds)
function countdown () {
    var countdown = 60000;
    setInterval(60000);
    if (countdown > 0) {
        for (let i = 0; i > i; i--) {
            
        }
    } else {
        clearInterval(startTimer);
    };
};

console.log(countdown);

// stop timer when timer = 0
var seconds = setTimeout;
var t = setInterval(function() {
    setInterval(countdown, 60000);
    if (seconds < 0) {
        document.getElementById("countdown").innerHTML = "Time's up!";
        clearInterval(t);
    };
});


function nextQuestion (question) {

}

// check if the user selected the correct answer
function correctWrong () {
    if (correctAns === false) {
        // -10 seconds from timer here
    };
};



















/* 
var questions = [
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
]; 
*/
