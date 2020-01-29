// object with questions and answers
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

// variables linking to html elements [not currently being used]
const startBtn = document.getElementById("startBtn");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");

///////////////////////////////////////////////////////////////////////////////////////////////

// redirect to the quiz when button is clicked [working]
document.addEventListener("click", goToQuiz);

function goToQuiz () {
    window.location.href = "questions.html";
};


// timer countdown that's visible to user. alert when time's up [working]
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


// check if user selected correct answer [WIP / not working]
var userChoice = [
    {
        one: btnOne.addEventListener("click", penalty()),
        two: btnTwo.addEventListener("click", penalty()),
        three: btnThree.addEventListener("click", penalty()),
        four: btnFour.addEventListener("click", penalty())
    }
];
const solution = questions.answer;
const correct = (userChoice === questions.answer);



// populate html elements with questions and answers [WIP / not working]
for (question in questions) {  
    var one = document.getElementById("btnOne").innerHTML;
    var two = document.getElementById("btnTwo").innerHTML;
    var three = document.getElementById("btnThree").innerHTML;
    var four = document.getElementById("btnFour").innerHTML;
};


// -10 seconds if userChoice is incorrect [WIP / not working]
function penalty () {
    if (userChoice !== questions.answer) {
        interval -= 10000;
    }
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