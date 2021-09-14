// Global Variables //
// Variable Integers //
var time = 75;

var questionNumber = 0;

var questionIndex = 0;

var penalty = 10;


// APIs Variables // 
var highScoreButton = document.getElementById("hs-btn");

var timer = document.getElementById("timer");

var timeLeft = document.getElementById("time");

var startScreen = document.getElementsByClassName("start-screen");

var quizStart = document.getElementsByClassName("start-btn");

var questionScreen = document.getElementsByClassName("question-screen");

var questionContainer = document.getElementById("question-container");

var question = document.getElementById("question");

var answer1 = document.getElementById("answer1");

var answer2 = document.getElementById("answer2");

var answer3 = document.getElementById("answer3");

var answer4 = document.getElementById("answer4");

var answerButton = document.getElementsByClassName("answer-btn");

var finishScreen = document.getElementsByClassName("finish-screen");

var initials = document.getElementsByClassName("initials");

var submit = document.getElementsByClassName("submit-btn");

var highScore = document.getElementsByClassName("high-scores");

var scoreList = document.getElementsByClassName("scores-list");

var goBack = document.getElementsByClassName("return-btn");

var clear = document.getElementsByClassName("clear-btn");

var ulCreate = document.createElement("ul");


// Questions Array//
var questions = [
    {
        q: "Commonly used data types do NOT inlcude:",
        a: ["1. strings", "2. booleans", "3. alerts", "4. Numbers"],
        correctAnswer: 2
    },
    {
        q: "The condition in an if/else statment is enclosed within __________.",
        a: ["1. quotes", "2.curly brackets", "3. parenthases", "4. square brackets"],
        correctAnswer: 2
    },
    {
        q: "Arrays in JavaScript can be used to store __________.",
        a: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: 3
    },
    {
        q: "String values must be enclosed within __________ when being assigned to variables.",
        a: ["1. commas", "2. curly brackets", "3. quotes", "4. parenthases"],
        correctAnswer: 2
    },
    {
        q: "A very useeful tool used during development and debugging for printing content to the debugger is:",
        a: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: 3
    }
];
// Variables End //

// Code Start //
function startQuiz() {
    document.querySelector(".start-screen").style.visibility = "hidden";
    document.querySelector(".question-screen").style.visibility = "visible";

    // countdownTimer();

    question.innerHTML = questions[questionNumber].q;
   
    answer1.innerHTML = questions[questionNumber].a[0];
    answer2.innerHTML = questions[questionNumber].a[1];
    answer3.innerHTML = questions[questionNumber].a[2];
    answer4.innerHTML = questions[questionNumber].a[3];
}

function checkAnswer() {
    if (answerButton == questions[questionNumber].correctAnswer) {
        document.querySelector("#correct").style.visibility = "visible";
    } else {
        document.querySelector("#wrong").style.visibility = "visible";
        // timeLeft = time - penalty;
    }
}

function nextQuestion() {
    checkAnswer();

    questionNumber++;

    
}

// function checkAnswer() {
//     if (answerButton !== questions[questionNumber].correctAnswer) {
//         document.querySelector("#wrong").style.visibility = "visible";
//     } else {
//         document.querySelector("#correct").style.visibility = "visible";
//         // timeLeft = time - penalty;
//     }
// }