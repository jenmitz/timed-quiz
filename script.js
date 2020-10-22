// initial page that houses the start button
// main purpose: initate the quiz on button click and redirect to script-2.js


// listen for click event on start button
$("#startBtn").on("click", startQuiz);

// redirect to questions.html
function startQuiz() {
    window.location.href = "questions.html";
    
}; 