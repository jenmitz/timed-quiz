/* 
Problem: create a timed quiz - 60 seconds

* Inputs: questions w/ choices, timer countdown, -10 seconds for a wrong answer, time's up alert that
shows remaining time and try again option
* Outputs: answers chosen (wrong or right?) w/ penalties if needed
* Constraints: n/a
* Edge cases: no answers given and time runs out


> questions w/ choices:
- arrays / object

> right or wrong answer:
- conditional / if correct, do nothing; if wrong, -10 seconds

> timer countdown:
- function / start w/ 60000ms, -1000ms interval until reach 0

> time's up
- pop-up/modal that shows when time is up - popd up when either the questions have all been answered or 
the time runs out due to incorrect responses/natural time progression - give remaining time on clock, 
try again button that re-runs the program

> edge case: no answers given:
- conditional / if no answers are selected and time runs out, give a score of 0 


*/

///////////////////////////////////////////////////////////////////////////////////////////////

// redirect to the quiz when button is clicked [working]
document.getElementById("startBtn").addEventListener("click", goToQuiz);

function goToQuiz () {
    window.location.href = "questions.html";

    const questions = [
        {
        question: ("What is your favorite color?"),
        choices: ["Blue", "Yellow", "Purple", "Green"],
        answer: ("Blue")
        }, {
        question: ("What is your quest?"),
        choices: ["To seek the holy grail", "To seek the man some call 'Tim'", "To kill Tim", "To kill the Black Knight"],
        answer: ("To seek the holy grail")
        }, {
        question: ("What is the air-speed velocity of an unladen swallow?"),
        choices: ["What do you mean? An African or a European Swallow?", "30mph", "I don't know that.", "... can you repeat the question?"],
        answer: ("What do you mean? An African or a European Swallow?"),
        }
    ];
    
    // variables linking to html elements [not currently being used]
    const startBtn = document.getElementById("startBtn");
    const btnOne = document.getElementById("btnOne");
    const btnTwo = document.getElementById("btnTwo");
    const btnThree = document.getElementById("btnThree");
    const btnFour = document.getElementById("btnFour");


    // timer countdown that's visible to user. alert when time's up
    var count = 59;
    var interval = setInterval(function() {
        document.getElementById("timer").innerHTML = count;
        count--;
        if (count === 0) {
            clearInterval(interval);
            document.getElementById("timer").innerHTML = "0";
            alert("Time's up!")
        }
    }, 1000);


    // check if user selected correct answer, -10 seconds if incorrect [WIP / not working]
    if (choices !== answer) {
        interval -= 10000;
    };
    if (choices !== answer) {
        interval -= 10000;
    };
    if (choices !== answer) {
        interval -= 10000;
    };
    if (choices !== answer) {
        interval -= 10000;
    };
    if (choices !== answer) {
        interval -= 10000;
    };
    console.log(interval);


    // populate html elements with questions and answers [WIP / not working]
    var question = document.getElementById("currentQuestion").append();
    var one = document.getElementById("btnOne").append();
    var two = document.getElementById("btnTwo").append();
    var three = document.getElementById("btnThree").append();
    var four = document.getElementById("btnFour").append();
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