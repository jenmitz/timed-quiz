// quiz questions page
// main purpose: present answers and questions, redirected to when quiz starts, houses major functions like timer and nextQuestion


/*
-- IOCE --
Inputs: start quiz, register answer chosen, save initials/score
Outputs: question/answers, timer, game over alert, highscores
Contraints:
Edge cases: user clicks start but does not answer any questions


-- pseudocode / what's left to be done --
1. make questions and answers appear on the page
    - listen for click on one of the choices
    - decide if answer was correct or not
    - display if answer was correct or incorrect
    - subract time if answer choice is incorrect
2. full timer functionality
    - seconds penalty if wrong answer is chosen
    - stop quiz when timer hits 0 or all questions were answered
3. display score


-- functions -- 
1. make question/answers appear
function nextQuestion() {};

2. timer

*/

// create function that makes a set of buttons (the answers), and call it each time a new question comes up



// object w questions and answers
const questions = [
{
    question: ("What is your quest?"),
    choices: ["To seek the holy grail", "To seek a man called 'Tim'", "To kill the Black Knight"],
    answer: ("To seek the holy grail")
}, {
    question: ("What is your favorite color?"),
    choices: ["Blue", "Yellow", "Green"],
    answer: ("Yellow")
}, {
    question: ("What is the air-speed velocity of an unladen swallow?"),
    choices: ["An African or a European Swallow?", "30mph", "I don't know that."],
    answer: ("An African or a European Swallow?")
}
];

// fully functioning timer
let timerText = $("#timerText");
let countdown = $("#countdown");
let secondsLeft = 30;

function timer() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timerText.text(secondsLeft);

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timesUp();
        };
    }, 1000);
};


// message when time's up
function timesUp() {
    timerText.textContent = " ";
    if (secondsLeft === 0) {
        alert("Thy time is up!");
    };
    // var quizDone = document.createElement("p");
    // countdown.appendChild(quizDone);
};




// attach evenlistener to each answer (choice)
// $("#quiz").addEventListener("click", function(e) {
//     if(!e.target.classList.contains("option"))
//         return
// });

// function checkAnswer() {
//     currentQuestion++;
//     loadNextQuestion(currentQuestion)
// };

timer();
