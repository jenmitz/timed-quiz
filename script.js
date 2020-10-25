// initial page that houses the directions & start button 
// main purpose: iinitate the quiz on button click and redirect to script-2.js


// listen for click event on start button
document.getElementById("startBtn").on("click", startQuiz);

// redirect to questions.html
function startQuiz() {
    window.location.href = "questions.html";
    
}; 