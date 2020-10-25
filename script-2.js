// quiz questions page
// main purpose: present answers and questions, redirected to here from script.js, houses major functions


// timer variables
let timerText = document.getElementById("timerText");
let countdown = document.getElementById("countdown");
let secondsLeft = 30;

// 30 second timer
function timer() {
    let timerInterval = setInterval(function() {
        secondsLeft--;
        timerText.textContent = secondsLeft;
        
        if (secondsLeft < 0) {
            clearInterval(timerInterval);
            timesUp();
        };
    }, 1000);
};

// message when time's up
function timesUp() {
    timerText.textContent = "";
    if (secondsLeft <= 0) {
        console.log("Thy time is up!");
    };
};

// run timer function
timer();  


// assign variables to buttons
let question = document.getElementById("currentQuestion");
let btn1 = document.getElementById("btnOne");
let btn2 = document.getElementById("btnTwo");
let btn3 = document.getElementById("btnThree");


// question 1
function question1() {
    question.appendChild(document.createTextNode("What is your quest?"));
    btn1.appendChild(document.createTextNode("To seek the holy grail"))
    btn2.appendChild(document.createTextNode("To seem a man called 'Tim'"));
    btn3.appendChild(document.createTextNode("To kill the Black Knight"));

    btn1.addEventListener("click", function() {
        console.log("1a");
        question2();
    });

    btn2.addEventListener("click", function() {
        console.log("1b");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById("timerText").innerHTML = secondsLeft;
        question2();
    });

    btn3.addEventListener("click", function() {
        console.log("1c");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById("timerText").innerHTML = secondsLeft;
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
        console.log("2a");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById("timerText").innerHTML = secondsLeft;
        question3();
    });

    btn2.addEventListener("click", function() {
        console.log("2b");
        question3();
    });

    btn3.addEventListener("click", function() {
        console.log("2c");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById("timerText").innerHTML = secondsLeft;
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
        console.log("3a");
    });

   btn2.addEventListener("click", function() {
       console.log("3b");
       // subtract 5 seconds
       secondsLeft -= 5;
       document.getElementById("timerText").innerHTML = secondsLeft;
    });
    
    btn3.addEventListener("click", function() {
        console.log("3c");
        // subtract 5 seconds
        secondsLeft -= 5;
        document.getElementById("timerText").innerHTML = secondsLeft;
    });
};

// start chain of functions/questions
question1(); 



/*
// pseudocode / what's left to be done //
- decide if answer was correct or not (conditional)
- display if answer was correct or incorrect (conditional)
- subract time if answer choice is incorrect (inside conditional, link back to timer)
- full timer functionality
    - seconds penalty if wrong answer is chosen
    - stop quiz when timer hits 0 or all questions were answered
- display score



// OBSERVATIONS/PROBLEMS //
// question 1 is fine
// question 2 after click will run both functions 1 and 2 (on the same button)
// question 3 after click will run all functions (on the same button)
// questions and answers are being cleared from the buttons & reassigned
// functions run more than one time
// timer isn't accurate and can actually be pushed into negative numbers in some cases


// POSSIBLE SOLUTIONS //
// find a way to make the function unable to be called again once executed
// problem with how it's being called?

*/


