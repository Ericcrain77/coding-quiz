var timeEl = document.querySelector("#timer");
var timeLeft = 75;
var scoreEl = document.querySelector("#score");

const startScreenEl = document.querySelector(".start-screen");

const questionsEl = document.querySelector(".questions");

var questionEl = document.querySelector("#question");

var questionCount = 0;

const rightOrWrongEl = document.querySelector(".right-or-wrong");

const finishScreenEl = document.querySelector(".finish-screen");

var initialsInput = document.querySelector(".initials");

const highScoresEl = document.querySelector(".high-scores");

var scoreListEl = document.querySelector("#scores-list");

var scoreList = [];

const startBtn = document.querySelector(".start-btn");

const answerBtn = document.querySelector("button.answerBtn");

const answer1Btn = document.querySelector("#answer1");

const answer2Btn = document.querySelector("#answer2");

const answer3Btn = document.querySelector("#answer3");

const answer4Btn = document.querySelector("#answer4");

const submitBtn = document.querySelector(".submit-btn");

const returnBtn = document.querySelector(".return-btn");

const clearBtn = document.querySelector(".clear-btn");

const highScoresBtn = document.querySelector("#hs-btn");

const questions = [
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

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeEl.textContent = "Time: ${secondsLeft}s";

        if (secondsLeft === 0 || questionCount === questions.length) {
            clearInterval(timerInterval);
            questionsEl.style.display = "none";
            finalEl.style.display = "block";
            scoreEl.textContent = secondsLeft;
        }
    }, 1000);
};


function startQuiz() {
    startScreenEl.style.display = "none";
    questionsEl.style.display = "block";
    questionCount = 0;

    setTime();
    setQuestion(questionCount);
};

function setQuestion(id) {
    if (id < questions.length) {
        questionEl.textContent = questions[id].question;
        answer1Btn.textContent = questions[id].answers[0];
        answer2Btn.textContent = questions[id].answers[1];
        answer3Btn.textContent = questions[id].answers[2];
        answer4Btn.textContent = questions[id].answers[3];
    }
};

function checkAnswer(event) {
    event.preventDefault();

    rightOrWrongEl.style.display = "block";
    var p = document.createElement("p");
    rightOrWrongEl.appendChild(p);

    setTimeout(function () {
        p.style.display = "none";
    }, 1000);

    if (questions[questionCount].correctAnswer === event.target.value) {
        p.textContent = "Correct!";
    } else if (questions[questionCount].correctAnswer !== event.target.value) {
        timeLeft = timeLeft - 10;
        p.textContent = "Wrong!";
    }

    if (questionCount < questions.length) {
        questionCount++;
    }

    setQuestion(questionCount);
};

function addScore(event) {
    event.preventDefault();

    finishScreenEl.style.display = "none";
    highScoresEl.style.display = "block";

    var init = initialsInput.value.toUpperCase();
    scoreList.push({ initials: init, core: timeLeft});

    scoreList = scoreList.sort((a,b)=> {
        if (a.score < b.score) {
            return 1;
        } else {
            return -1;
        }
    });

    scoreListEl.innerHTML = "";
    for (var i = 0; i < scoreList.length; i++) {
        var li = document.createElement("li");
        li.textContent = "${scoreList[i].initials}: ${scoreList[i].score}";
        scoreListEl.append(li);
    }

    storeScores();
    displayScores();
};

function storeScores() {
    localStorage.setItem("scoreList", JSON.stringify(scoreList));
}

function displayScores() {
    var storedScoreList = JSON.parse(localStorage.getItem("scoreList"));

    if (storedScoreList !== null) {
        scoreList = storedScoreList;
    }
};

function clearScores() {
    localStorage.clear();
    scoreListEl.innerHTML = " ";
};

startBtn.addEventListener("click", startQuiz);

answerBtn.forEach(item => {
    item.addEventListener("click", checkAnswer);
});

submitBtn.addEventListener("click", addScore);

returnBtn.addEventListener("click", function() {
    highScoresEl.style.display = "none";
    startScreenEl.style.display = "block";
    timeLeft = 75;
    timeEl.textContent = "Time: ${secondsLeft}";
});

clearBtn.addEventListener("click", clearScores);

highScoresBtn.addEventListener("click", function() {
    if (highScoresEl.style.display === "none") {
        highScoresEl.style.display = "block";
    } else if (highScoresEl.style.display === "block") {
        highScoresEl.style.display = "none";
    } else {
        return alert("No High Scores Yet!");
    }
});