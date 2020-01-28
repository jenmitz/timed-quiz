// questions and answers variable
var questions = [
    {
        question: "Which of the following is NOT an animal you can keep on your farm?",
        choices: ["Blue chicken", "Dinosaur", "Slime", "Llama"],
        answer: ("Llama")
    },
    {
        question: "You need to visit __________ to upgrade your tools.",
        choices: ["Clint", "Linus", "Pierre", "Harvey"],
        answer: ("Clint")
        
    },
    {
        question: "Which of these events will never happen overnight on your farm?",
        choices: ["Meteor crash", "Runaway animal", "Visit from a witch", "Crop fairy"],
        answer: ("Runaway animal")
    },
    {
        question: "Which of these is a valid method of finding cooking recipes?",
        choices: ["Buy them", "Watch TV every day", "Fish them up in treasure chests", "Experiment with food ingredients"],
        answer: ("Watch TV every day")
    },
    {
        question: "What item do you need in order to obtain the galaxy sword?",
        choices: ["Void egg", "Rabbit's foot", "Prismatic shard", "Iridium bar"],
        answer: ("Prismatic shard")
    },
];

// variables linking to html elements
const startBtn = document.getElementById("startBtn");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const countdownDisplay = document.getElementById("countdown");

///////////////////////////////////////////////////////////////////////////////////////////////

// redirect to the quiz when button is clicked


document.addEventListener("click", goToQuiz);

function goToQuiz () {
    window.location.href = "questions.html";
};


// timer countdown w/ alert when time's up
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



// listen for button clicks, then -10 seconds if necessary
var userChoice = [
    {
        one: btnOne.addEventListener("click", penalty),
        two: btnTwo.addEventListener("click", penalty),
        three: btnThree.addEventListener("click", penalty),
        four: btnFour.addEventListener("click", penalty)
    }
];


// subtract 10 seconds if incorrect answer is chosen
function penalty () {
    if (userChoice !== questions.answer) {
        interval -= 10000;
    }
};


function nextQuestion () {
    questions.textContent = questions.question;
    answer.textContent = question.choices[0];
    answer.textContent = questions.choices[1];
    answer.textContent = questions.choices[2];
    answer.textContent = questions.choices[3];
};



for (var value of questions) {
    console.log(value);
};


// tell the user their score (how many seconds were left)
function displayScore () {
    
}




/////////////////// methods to learn about ////////////////////
/*

Object.key
forEach
for ... in loop

*/
////////////////////// other notes below ///////////////////////
/* 

Object.entries(questions).forEach(([key, value]) => 
    document.getElementById(currentQuestion).textContent = value
);

// buttons
btnOne.addEventListener("click", rightWrong)
btnTwo.addEventListener("click", rightWrong)
btnThree.addEventListener("click", rightWrong)
btnFour.addEventListener("click", rightWrong)


// more variables
const solution = questions.answer;
const correct = (userResponse === questions.answer);


function timer() {
    elapsedTime = elapsedTime + intervalTime;
    if (elapsedTime > maxTime) {
        console.log('time is over');
        window.clearInterval(timer);
    } else if (userResponse) {
        if (correct) {
            console.log('YOU WON!!!');
        } else {
            console.log('BAD ANSWER YOU SUCK');
            elapsedTime += penalty;  // shorthand of the below:
            //elapsedTime = elapsedTime + penalty;
        }
        clearInterval(timer);
    }
};


// actual program starts here
timer(timer, intervalTime);


function rightWrong () {
    if (correct === true) {

    } else {

    }
}

*/