// Global Variables //
// Variable Integers //
var startTime = 75;

var questionIndex = 0;

var penalty = 10;

var score = 0;


// APIs Variables // 
var highScoreButton = document.getElementById("#hs-btn");

var timer = document.getElementsById("#timer");

var timeLeft = document.getElementById("#time");

var startScreen = document.getElementByClassName(".start-screen");

var startQuiz = document.getElementByClassName(".start-btn");

var questionScreen = document.getElementByClassName(".question-screen");

var questionContainer = document.getElementById("#question-container");

var question = document.getElemberById("#question");

var answer1 = document.getElementById("#answer1");

var answer2 = document.getElementById("#answer2");

var answer3 = document.getElementById("#answer3");

var answer4 = document.getElementById("#answer4");

var answerButton = document.getElementsByClassName(".answer-btn");

var answerCheck = document.getElementByClassName(".answer-check");

var finishScreen = document.getElementByClassName(".finish-screen");

var initials = document.getElementByClassName(".initials");

var submit = document.getElementByClassName(".submit-btn");

var highScore = document.getElementByClassName(".high-scores");

var scoreList = document.getElementByClassName(".scores-list");

var goBack = document.getElementByClassName(".return-btn");

var clear = document.getElementByClassName(".clear-btn");


// Questions Array//
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
// Variables End //

// Code Start //
