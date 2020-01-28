const questions = [
    {
        question: "Which of the following is NOT an animal you can keep on your farm?",
        choices: ["Blue chicken", "Dinosaur", "Slime", "Llama"],
        answer: "Llama"
    },
    {
        question: "You need to visit __________ to upgrade your tools.",
        choices: ["Clint", "Linus", "Pierre", "Harvey"],
        answer: "Clint"
        
    },
    {
        question: "Which of these events will never happen overnight on your farm?",
        choices: ["Meteor crash", "Runaway animal", "Visit from a witch", "Crop fairy"],
        answer: "Runaway animal"
    },
    {
        question: "Which of these is a valid method of finding cooking recipes?",
        choices: ["Buy them", "Watch TV every day", "Fish them up in treasure chests", "Experiment with food ingredients"],
        answer: "Watch TV every day"
    },
    {
        question: "What item do you need in order to obtain the galaxy sword?",
        choices: ["Void egg", "Rabbit's foot", "Prismatic shard", "Iridium bar"],
        answer: "Prismatic shard"
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