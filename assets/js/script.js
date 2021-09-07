// variables for page elements
// time and score
var timeEl = document.querySelector("p.time");
var timeLeft = 75;
var scoreEl = document.querySelector("#score");

// sections
// section intro
const startScreenEl = document.querySelector(".start-screen");

// section questions
//question section
const questionsEl = document.querySelector(".questions");
//where question goes
var questionEl = document.querySelector("#question");
// how many questions they have answered
var questionCount = 0;
// div yaynay
const rightOrWrongEl = document.querySelector(".right-or-wrong");

// section final
const finishScreenEl = document.querySelector(".finish-screen");
// user initials
var initialsInput = document.querySelector(".initials");

// section highscores
const highScoresEl = document.querySelector(".high-scores");
// ordered list
var scoresListEl = document.querySelector("#scores-list");
// array of scores
var scoresList = [];

// buttons
// start
const startBtn = document.querySelector(".start-btn");
// answer button class
const ansBtn = document.querySelectorAll("button.ansBtn")
// answer1
const ans1Btn = document.querySelector("#answer1");
// answer2
const ans2Btn = document.querySelector("#answer2");
// answer3
const ans3Btn = document.querySelector("#answer3");
// answer4
const ans4Btn = document.querySelector("#answer4");
// submit-score
const submitBtn = document.querySelector(".submitBtn");
// goback
const returnBtn = document.querySelector(".return-btn");
// clearscores
const clearScrBtn = document.querySelector(".clear-btn");
// view-scores
const highScoresBtn = document.querySelector("#hs-btn");

// Object for question, answer, true/false
const questions = [ // array of objects
    {
        // question 0
        question: "Commonly used data types do NOT include:",
        answers: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
        correctAnswer: "2"
    },
    {
        // question 1
        question: "The condition in an if / else statement is enclosed within ____.",
        answers: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
        correctAnswer: "2"
    },
    {
        // question 2
        question: "Arrays in Javascript can be used to store ____.",
        answers: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
        correctAnswer: "3"
    },
    {
        // question 3
        question: "String values must be enclosed within ____ when being assigned to variables.",
        answers: ["1. commmas", "2. curly brackets", "3. quotes", "4. parentheses"],
        correctAnswer: "2"
    },
    {
        // question 4
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answers: ["1. Javascript", "2. terminal/bash", "3. for loops", "4. console.log"],
        correctAnswer: "3"
    }
];


// Functions

// timer
function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = `Time:${timeLeft}s`;

        if (timeLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finishScreenEl.style.display = "block";
            scoreEl.textContent = timeLeft;
        }
    }, 1000);
}

// start quiz with timer and set up questions
function startQuiz() {
    startScreenEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
}

// function to set question; takes in a count and displays the next question/answers
function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        ans1Btn.textContent = questions[id].answers[0];
        ans2Btn.textContent = questions[id].answers[1];
        ans3Btn.textContent = questions[id].answers[2];
        ans4Btn.textContent = questions[id].answers[3];
    }
}

// function to check answer and then move to next question
function checkAnswer(event) {
    event.preventDefault();

    // show section for yaynay and append message
    rightOrWrongEl.style.display = "block";
    var p = document.createElement("p");
    rightOrWrongEl.appendChild(p);

    // time out after 1 second
    setTimeout(function () {
        p.style.display = 'none';
    }, 1000);

    // answer checker
    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        timeLeft = timeLeft - 10;
        p.textContent = "Wrong!";
    }

    // increment so the questions index is increased
    if (questionCount < questions.length) {
        questionCount++;
    }
    // call setQuestion to bring in next question when any ansBtn is clicked
    setQuestion(questionCount);
}

function addScore(event) {
    event.preventDefault();

    finishScreenEl.style.display = "none";
    highScoresEl.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    scoresList.push({ initials: init, score: timeLeft });

    // sort scores
    scoresList = scoresList.sort((a, b) => {
        if (a.score < b.score) {
          return 1;
        } else {
          return -1;
        }
      });
    
    scoresListEl.innerHTML="";
    for (var i = 0; i < scoresList.length; i++) {
        var li = document.createElement("li");
        li.textContent = `${scoresList[i].initials}: ${scoresList[i].score}`;
        scoresListEl.append(li);
    }

    // Add to local storage
    storeScores();
    displayScores();
}

function storeScores() {
    localStorage.setItem("scoresList", JSON.stringify(scoresList));
}

function displayScores() {
    // Get stored scores from localStorage
    // Parsing the JSON string to an object
    var storedScoreList = JSON.parse(localStorage.getItem("scoresList"));

    // If scores were retrieved from localStorage, update the scorelist array to it
    if (storedScoreList !== null) {
        scoresList = storedScoreList;
    }
}

// clear scores
function clearScores() {
    localStorage.clear();
    scoresListEl.innerHTML="";
}

// EventListeners
// Start timer and display first question when click start quiz
startBtn.addEventListener("click", startQuiz);

// Check answers loop
ansBtn.forEach(item => {
    item.addEventListener('click', checkAnswer);
});

// Add score
submitBtn.addEventListener("click", addScore);

// Go Back Button
returnBtn.addEventListener("click", function () {
    highScoresEl.style.display = "none";
    startScreenEl.style.display = "block";
    timeLeft = 75;
    timeEl.textContent = `Time:${timeLeft}s`;
});

// Clear the scores
clearScrBtn.addEventListener("click", clearScores);

// View/Hide High Scores Button
viewScrBtn.addEventListener("click", function () {
    if (highScoresEl.style.display === "none") {
        highScoresEl.style.display = "block";
    } else if (highScoresEl.style.display === "block") {
        highScoresEl.style.display = "none";
    } else {
        return alert("No scores to show.");
    }
});