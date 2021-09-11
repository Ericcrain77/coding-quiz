// Global Variables //
var time = 75;
var questionIndex = 0;
var penalty = 10;

var questions = [
    {
        q: "Commonly used data types do NOT inlcude:",
        a: ["1. strings", "2. booleans", "3. alerts", "4. Numbers"],
        correctAnswer: "2"
    },
    {
        q: "The condition in an if/else statment is enclosed within __________.",
        a: ["1. quotes", "2.curly brackets", "3. parenthases", "4. square brackets"],
        correctAnswer: "2"
    },
    {
        q: "Arrays in JavaScript can be used to store __________.",
        a: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        q: "String values must be enclosed within __________ when being assigned to variables.",
        a: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthases"],
        correctAnswer: "2"
    },
    {
        q: "A very useeful tool used during development and debugging for printing content to the debugger is:",
        a: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];

var timeLeft = document.querySelector("#time");

var startQuiz = document.querySelector(".start-btn");

var highScore = document.querySelector(".high-scores");

var clear = document.querySelector(".clear-btn");

var goBack = document.querySelector(".return-btn");

var startScreen = document.querySelector(".start-screen");

var questionScreen = document.querySelector(".question-screen");

var finishScreen = document.querySelector(".finish-screen");

var highScoreScreen = document.querySelector(".high-scores");
// Variables End //

// Code Start //
startQuiz.addEventListener("click", function() {

    if (time === 75) {
        time = setInterval(function() {
            timeLeft--;
        }, 1000);
    }

    if (startScreen.style.display === "block") {
        startScreen.style.display = "none";
        questionScreen.style.display = "block";
    }

    console.log();
});