/* 
Problem: create a timed quiz - 60 seconds

* Inputs: questions w/ choices, timer countdown, -10 seconds for a wrong answer, time's up alert that
shows remaining time and try again option
* Outputs: answers chosen (wrong or right?) w/ penalties if needed
* Constraints: n/a
* Edge cases: quiz started but no answers given and time runs out

> timer countdown:
- function / start w/ 60000ms, -1000ms interval until reach 0

> time's up
- pop-up/modal that shows when time is up - pop up when either the questions have all been answered or 
the time runs out due to incorrect responses/natural time progression - give remaining time on clock, 
try again button that re-runs the program

*/



// redirect to the quiz when button is clicked
document.getElementById("startBtn").addEventListener("click", startQuiz);

// go to the quiz
function startQuiz() {
    window.location.href = "questions.html";

    var timerText = document.querySelector("#timerText");
    var countdown = document.querySelector("#countdown");
    var secondsLeft = 60;

    function timer() {
        var timerInterval = setInterval(function() {
            secondsLeft--;
        timerText.textContent = "Time left: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            timesUp();
        };

        }, 60000);
    };

    // message when time's up
    function timesUp() {
        timerText.textContent = " ";
        if (secondsLeft === 0) {
            alert("Thy time is up!");
        };
        var quizDone = document.createElement("p");
        countdown.appendChild(quizDone);

    };
    timer();


    const questions = [
        {
        question: ("What is your favorite color?"),
        choices: ["Blue", "Yellow", "Green"],
        answer: ("Yellow")
        }, {
        question: ("What is your quest?"),
        choices: ["To seek the holy grail", "To seek a man called 'Tim'", "To kill the Black Knight"],
        answer: ("To seek the holy grail")
        }, {
        question: ("What is the air-speed velocity of an unladen swallow?"),
        choices: ["An African or a European Swallow?", "30mph", "I don't know that."],
        answer: ("An African or a European Swallow?")
        }
    ];
 
    // timer countdown that's visible to user. alert when time's up


    // -10 seconds if incorrect answer
    if (questions.choices !== questions.answer) {
        interval -= 10000;
    };

    document.getElementById("startBtn").addEventListener("click", populateHTML)


    // use a loop? forEach? 
    function populateHTML() {
        // populate html elements with questions and answers [WIP / not working]
        let question = document.getElementById("currentQuestion").append(questions, question);
        let answerOne = document.getElementById("btnOne").append(questions, answerOne);
        let answerTwo = document.getElementById("btnTwo").append(questions, answerTwo);
        let answerThree = document.getElementById("btnThree").append(questions, answerThree);
        let answerFour = document.getElementById("btnFour").append(questions, answerFour);

    };
}; 



/////////////////// possibilities ////////////////////
/*

// possibly use to populate html elements by looping over object "questions"

forEach (for everything, not specific keys/values)
for ... in loop (target specific keys)


*/
////////////////////// other notes below ///////////////////////
/* 

questions.forEach(function (choices, answer) {
    document.getElementById(currentQuestion)
    console.log(choices);
    console.log(item);
    console.log(penalty);
});


/*     let interval = setInterval(function() {
        document.getElementById("timer").innerHTML = count;
        count--;
        if (count > 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "0";
            alert("Time's up!")
        }
    }, 1000);
 */
// let countdown = 60
// let timer = setInterval(function() {
//     if(countdown === 0) return;
//     countdown--;
//     timer.innerHTML = "Time left " + countdown;
// }, 1000);
*/