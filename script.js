/* 
Problem: create a timed quiz - 60 seconds

* Inputs: questions w/ choices, timer countdown, -10 seconds for a wrong answer, time's up alert that
shows remaining time and try again option
* Outputs: answers chosen (wrong or right?) w/ penalties if needed
* Constraints: n/a
* Edge cases: no answers given and time runs out

> timer countdown:
- function / start w/ 60000ms, -1000ms interval until reach 0

> time's up
- pop-up/modal that shows when time is up - pop up when either the questions have all been answered or 
the time runs out due to incorrect responses/natural time progression - give remaining time on clock, 
try again button that re-runs the program

*/

///////////////////////////////////////////////////////////////////////////////////////////////

// redirect to the quiz when button is clicked [working]
document.getElementById("startBtn").addEventListener("click", goToQuiz);

function goToQuiz () {
    window.location.href = "questions.html";

    const questions = [
        {
        question: ("What is your favorite color?"),
        choices: ["Blue", "Yellow", "Green"],
        answer: ("Blue")
        }, {
        question: ("What is your quest?"),
        choices: ["To seek the holy grail", "I seek a man some call 'Tim'", "To kill the Black Knight"],
        answer: ("To seek the holy grail")
        }, {
        question: ("What is the air-speed velocity of an unladen swallow?"),
        choices: ["What do you mean? An African or a European Swallow?", "30mph", "I don't know that."],
        answer: ("What do you mean? An African or a European Swallow?"),
        }
    ];
 
    // timer countdown that's visible to user. alert when time's up
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
let countdown = 60
let timer = setInterval(function() {
    if(countdown === 0) return;
    countdown--;
    timer.innerHTML = "Time left " + countdown;
}, 1000);

    // -10 seconds if incorrect answer [WIP / not working]
    if (questions.choices !== questions.answer) {
        interval -= 10000;
    };

    document.getElementById("startBtn").addEventListener("click", populateHTML)

    populateHTML = () => {
        // populate html elements with questions and answers [WIP / not working]
        let question = document.getElementById("currentQuestion").append(questions.question);
        let answerOne = document.getElementById("btnOne").append(questions.answer);
        let answerTwo = document.getElementById("btnTwo").append(questions.answer);
        let anwerThree = document.getElementById("btnThree").append(questions.answer);
        let answerFour = document.getElementById("btnFour").append(questions.answer);

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

*/