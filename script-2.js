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
    - create new divs w/ text nodes
    - listen for click on one of the choices (event listener)
    - decide if answer was correct or not (conditional)
    - display if answer was correct or incorrect (conditional)
    - subract time if answer choice is incorrect (inside conditional, link back to timer)
2. full timer functionality
    - seconds penalty if wrong answer is chosen
    - stop quiz when timer hits 0 or all questions were answered
3. display score
*/


// timer variables
let timerText = $("#timerText");
let countdown = $("#countdown");
let secondsLeft = 30;

// 30 second timer
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
        console.log("Thy time is up!");
    };
};
// run timer function
timer();  





// (function() {
//     var secondsLeft = 30;
//     function startTimer(){
//         var timer = setInterval(function(){
//             secondsLeft--;
//             document.getElementById('timerText').innerHTML = '00:' + secondsLeft;
//             if (secondsLeft < 0) {
//                 clearInterval(timer);
//                 alert("Time is up!")
//             }
//         }, 1000);
//     }
    
//         secondsLeft -= 5;
//         document.getElementById('timerText').innerHTML = '00:' + secondsLeft;
//     });
//     startTimer();
// })();







    // need to only have one event listener for each button
    // right now there are 3 event listeners per function, one for each button (3 event listeners for each button)
    // this is currently making all of the eventlisteners trigger, despite being in different functions



let question = document.getElementById("currentQuestion");
let btn1 = document.getElementById("btnOne");
let btn2 = document.getElementById("btnTwo");
let btn3 = document.getElementById("btnThree");

// start chain of functions/questions
question1(); 

// question 1
function question1() {
    question.appendChild(document.createTextNode("What is your quest?"));
    btn1.appendChild(document.createTextNode("To seek the holy grail"))
    btn2.appendChild(document.createTextNode("To seem a man called 'Tim'"));
    btn3.appendChild(document.createTextNode("To kill the Black Knight"));

    btn1.addEventListener("click", function() {
        console.log("nice");
        question2();
    });

    btn2.addEventListener("click", function() {
        console.log("no");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById('timerText').innerHTML = secondsLeft;
        question2();
    });

    btn3.addEventListener("click", function() {
        console.log("no");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById('timerText').innerHTML = secondsLeft;
        question2();
    });
};



// question 2
function question2() {
    question.textContent = "What is your favorite color?"; 
    btn1.textContent = "Blue";   
    btn2.textContent = "Yellow";
    btn3.textContent = "Green";

    btn1.addEventListener("click", function() {
        console.log("no");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById('timerText').innerHTML = secondsLeft;
        question3();
    });

    btn2.addEventListener("click", function() {
        console.log("nice");
        question3();
    });

    btn3.addEventListener("click", function() {
        console.log("no");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById('timerText').innerHTML = secondsLeft;
        question3();
    });
};
    


// question 3
function question3() {
    question.textContent = "What is the air-speed velocity of an unladen swallow?";
    btn1.textContent = "An African or a European Swallow?";
    btn2.textContent = "I don't know that.";
    btn3.textContent = "30mph";

    btn1.addEventListener("click", function() {
        console.log("nice");
    });

   btn2.addEventListener("click", function() {
       console.log("no");
       // subtract 5 seconds
       secondsLeft -= 5;
       document.getElementById('timerText').innerHTML = secondsLeft;
    });
    btn3.addEventListener("click", function() {
        console.log("no");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById('timerText').innerHTML = secondsLeft;
    });
};



// let div1 = document.createElement("div");
// div1.appendChild(document.createTextNode("What is your quest?"));
// let choices1 = ["To seek the holy grail", "To seek a man called 'Tim'", "To kill the Black Knight"];
// let answer1 = "To seek the holy grail";
// if (choices1 === answer1) {
//     // go to the next question
// } else {
//     // subtract time
//     // move on to next question
// };

// let div2 = document.createElement("div");
// div2.appendChild(document.createTextNode("What is your favorite color?"));
// let choices2 = ["Blue", "Yellow", "Green"];
// let answer2 = "Yellow";
// if (choices2 === answer2) {
//     // go to the next question
// } else {
//     // subtract time
//     // move on to next question
// };

// let div3 = document.createElement("div");
// div3.appendChild(document.createTextNode("What is the air-speed velocity of an unladen swallow?"));
// let choices3 = ["An African or a European Swallow?", "30mph", "I don't know that."];
// let answer3 = "An African or a European Swallow?";
// if (choices3 === answer3) {
//     // go to the next question
// } else {
//     // subtract time
//     // move on to next question
// };

/*

// create div
let newDiv = document.createElement("div");
// add class
newDiv.className = "hello";
// add id
newDiv.id = "hello1";
// set attr
newDiv.setAttribute("title", "hello div");
// create text node
let newDivText = document.createTextNode("hello world");
// append text node to div (div now has content)
newDiv.appendChild(newDivText);

*/


// let btn2 = document.createElement("button");
// btn2.appendChild(document.createTextNode("questions.choices[1]"));

// let btn3 = document.createElement("button");
// btn3.appendChild(document.createTextNode("questions.choices[2]"));

// // object w questions and answers
// const questions = [
//     {
//         question: ("What is your quest?"),
//         choices: ["To seek the holy grail", "To seek a man called 'Tim'", "To kill the Black Knight"],
//         answer: ("To seek the holy grail")
//     }, {
//         question: ("What is your favorite color?"),
//         choices: ["Blue", "Yellow", "Green"],
//         answer: ("Yellow")
//     }, {
//         question: ("What is the air-speed velocity of an unladen swallow?"),
//         choices: ["An African or a European Swallow?", "30mph", "I don't know that."],
//         answer: ("An African or a European Swallow?")
//     }
//     ];