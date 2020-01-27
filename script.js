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


// variables
const startBtn = document.getElementById("startBtn");
const btnOne = document.getElementById("btnOne");
const btnTwo = document.getElementById("btnTwo");
const btnThree = document.getElementById("btnThree");
const btnFour = document.getElementById("btnFour");
const timerStart = document.getElementById("countdown");
//const penalty = 10000;
//const maxTime = 60000;

///////////////////////////////////////////////////////////////////////////////////////////////

// redirect to the quiz when button is clicked
function goToQuiz () {
    window.location.href = "questions.html";
};

startBtn.addEventListener("click", goToQuiz);

// countdown (60 seconds)
/* function countdown () {
    var countdown = 60000;
    setInterval(60000);
    if (countdown > 0) {
        for (let i = 0; i > i; i--) {
            
        }
    } else {
        clearInterval(startTimer);
    };
};

startBtn.addEventListener("click", startGame);
function startGame () {
    setNextQuestion()
}

function selectAnswer () {

} */

const intervalTime = 1; // ms
const penalty = 10000;
const maxTime = 60000; // 60 s
let userResponse = (questions.choices);
let elapsedTime = 0;
let correctUserResponse = ["Clint", "Llama", "Runaway animal", "Watch TV everyday", "Prismatic shard"];

// Pretend the user responds at 500 ms:
setTimeout(() => {
	console.log('setting solution');
	userResponse = correctUserResponse;
}, 50);


function checkForSolution() {
	elapsedTime += intervalTime;
	if (elapsedTime >= maxTime) {
		console.log('time is over');
	} else if (userResponse) {
		var correct = (userResponse === solution);
		if (correct) {
			console.log('YOU WON!!!');
		} else {
			console.log('BAD ANSWER YOU SUCK');
            elapsedTime += penalty;  
            // shorthand of the below:
			//elapsedTime = elapsedTime + penalty;
		}
		// Clear interval
	}

	console.log(`Time left: ${maxTime - elapsedTime}`);
}

// Actual program starts here:
setInterval(checkForSolution, intervalTime);



function countdown() {
    var timerInterval = setInterval(function () {
      count--;
      timerEl.innerHTML = count;
      loadBarEl.style.width = count * loadProgress + "%";
      if (count === 0) {
        clearInterval(timerInterval);
      }
  
    }, 1000);
  };
//function nextQuestion (question) {
    // for(var i = 0; i < questions.length; i++); {
    //     var userChoice = window.prompt(questions[i].prompt);
    //     if (userChoice === questions[i].choices) {
    //         time++
    //     } else {
    // 
    //     }
    // }
    // console.log(userChoice);
