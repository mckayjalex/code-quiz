// Linking to HTML
let startScreen = document.querySelector(".home-screen");
let questionsScreen = document.querySelector(".questions-screen");
let viewHighscoresScreen = document.querySelector(".view-highscores-screen");
let enterHighscoresScreen = document.querySelector(".enter-highscores-screen");
let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".score-header");
let backButtonEnter = document.getElementById("back-button-enter");
let backButtonView = document.getElementById("back-button-view");
let submitButton = document.querySelector(".submit-button");
let viewHighscores = document.querySelector(".highscores-header");
let enterInitials = document.querySelector(".enter-initials");
let resultUser = document.querySelector(".result-user");
let resultScore = document.querySelector(".result-score");
let highscoresCl = document.querySelector(".clear-highscores");
let stopQuiz = document.querySelector(".stop-quiz");
let whatQ = document.querySelector(".current");

let selectedQuestion = document.querySelector(".question");
let answerOne = document.querySelector(".answer-1");
let answerTwo = document.querySelector(".answer-2");
let answerThree = document.querySelector(".answer-3");
let answerFour = document.querySelector(".answer-4");
let resultOutcome = document.querySelector(".result-outcome");
// Global Variables
let enteredAnswer;
let timer;
let count;
let currentQuestion = 0;
let correctAnswer;
let complete = false;
let selectedAnswer;
let highscores;

// Object that stores all the questions and answers
let questions = {
    questionZero: {
        title: "Who invented Javascript?",
        answers: {
            a: "Goerge Clooney",
            b: "Edward Stonsor",
            c: "Sam Yates"
        },
        correctAnswer: "Brendan Eich"
    },
    questionOne: {
        title: "Inside which HTML element do you put Javascript?",
        answers: {
            a: "<js>",
            b: "<scripting>",
            c: "<javascript>"
        },
        correctAnswer: "<script>"
    },
    questionTwo: {
        title: "Where is the correct place to insert Javascript?",
        answers: {
            a: "The <head> section",
            b: "Under the header element",
            c: "Top of the <body> section"
        },
        correctAnswer: "Bottom of the <body> section"
    },
    questionThree: {
        title: "What does HTML stand for?",
        answers: {
            a: "Hyper Text Markdown Language",
            b: "Hyperlinks and Text Markup Language",
            c: "Home Tool Markup Language"
        },
        correctAnswer: "Hyper Text Markup Language"
    },
    questionFour: {
        title: "Who is making the web standards?",
        answers: {
            a: "Google",
            b: "Amazon",
            c: "Apple"
        },
        correctAnswer: "World Wide Web Consortium"
    },
    questionFive: {
        title: "Choose which HTML element displays the largest heading?",
        answers: {
            a: "<h6>",
            b: "<heading>",
            c: "<head>"
        },
        correctAnswer: "<h1>"
    },
    questionSix: {
        title: "What is the correct HTML element for inserting a line break?",
        answers: {
            a: "<break>",
            b: "<line>",
            c: "<lb>"
        },
        correctAnswer: "<br>"
    },
    questionSeven: {
        title: "What does CSS stand for?",
        answers: {
            a: "Creative Style Sheets",
            b: "Computer Style Sheets",
            c: "Colorful Style Sheets"
        },
        correctAnswer: "Cascading Style Sheets"
    },
    questionEight: {
        title: "Which HTML tag is used to define an internal style sheet?",
        answers: {
            a: "<css>",
            b: "<script>",
            c: "<sheet>"
        },
        correctAnswer: "<style>"
    },
    questionNine: {
        title: "Which is the correct CSS syntax?",
        answers: {
            a: "body:color=black;",
            b: "{body:color=black;",
            c: "color>body=black;"
        },
        correctAnswer: "body{color:black;}"
    }
};
// Generates a question and adds it to HTML, then passes to the next question
function generateQuestion() {
    if (currentQuestion == 0) {
        selectedQuestion.textContent = questions.questionZero.title;
        answerOne.textContent = questions.questionZero.answers.a;
        answerTwo.textContent = questions.questionZero.correctAnswer;
        answerThree.textContent = questions.questionZero.answers.b;
        answerFour.textContent = questions.questionZero.answers.c;
        correctAnswer = questions.questionZero.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '1/10';
    } else if (currentQuestion == 1) {
        selectedQuestion.textContent = questions.questionOne.title;
        answerOne.textContent = questions.questionOne.answers.a;
        answerTwo.textContent = questions.questionOne.answers.b;
        answerThree.textContent = questions.questionOne.correctAnswer;
        answerFour.textContent = questions.questionOne.answers.c;
        correctAnswer = questions.questionOne.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '2/10';
    } else if (currentQuestion == 2) {
        selectedQuestion.textContent = questions.questionTwo.title;
        answerOne.textContent = questions.questionTwo.correctAnswer;
        answerTwo.textContent = questions.questionTwo.answers.b;
        answerThree.textContent = questions.questionTwo.answers.a;
        answerFour.textContent = questions.questionTwo.answers.c;
        correctAnswer = questions.questionTwo.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '3/10';
    } else if (currentQuestion == 3) {
        selectedQuestion.textContent = questions.questionThree.title;
        answerOne.textContent = questions.questionThree.answers.a;
        answerTwo.textContent = questions.questionThree.answers.b;
        answerThree.textContent = questions.questionThree.correctAnswer;
        answerFour.textContent = questions.questionThree.answers.c;
        correctAnswer = questions.questionThree.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '4/10';
    } else if (currentQuestion == 4) {
        selectedQuestion.textContent = questions.questionFour.title;
        answerOne.textContent = questions.questionFour.answers.a;
        answerTwo.textContent = questions.questionFour.answers.b;
        answerThree.textContent = questions.questionFour.answers.c;
        answerFour.textContent = questions.questionFour.correctAnswer;
        correctAnswer = questions.questionFour.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '5/10';
    } else if (currentQuestion == 5) {
        selectedQuestion.textContent = questions.questionFive.title;
        answerOne.textContent = questions.questionFive.answers.a;
        answerTwo.textContent = questions.questionFive.answers.b;
        answerThree.textContent = questions.questionFive.correctAnswer;
        answerFour.textContent = questions.questionFive.answers.c;
        correctAnswer = questions.questionFive.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '6/10';
    } else if (currentQuestion == 6) {
        selectedQuestion.textContent = questions.questionSix.title;
        answerOne.textContent = questions.questionSix.correctAnswer;
        answerTwo.textContent = questions.questionSix.answers.b;
        answerThree.textContent = questions.questionSix.answers.a;
        answerFour.textContent = questions.questionSix.answers.c;
        correctAnswer = questions.questionSix.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '7/10';
    } else if (currentQuestion == 7) {
        selectedQuestion.textContent = questions.questionSeven.title;
        answerOne.textContent = questions.questionSeven.answers.a;
        answerTwo.textContent = questions.questionSeven.answers.b;
        answerThree.textContent = questions.questionSeven.correctAnswer;
        answerFour.textContent = questions.questionSeven.answers.c;
        correctAnswer = questions.questionSeven.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '8/10';
    } else if (currentQuestion == 8) {
        selectedQuestion.textContent = questions.questionEight.title;
        answerOne.textContent = questions.questionEight.answers.a;
        answerTwo.textContent = questions.questionEight.correctAnswer;
        answerThree.textContent = questions.questionEight.answers.b;
        answerFour.textContent = questions.questionEight.answers.c;
        correctAnswer = questions.questionEight.correctAnswer;
        currentQuestion++;
        whatQ.textContent = '9/10';
    } else if (currentQuestion == 9) {
        selectedQuestion.textContent = questions.questionNine.title;
        answerOne.textContent = questions.questionNine.answers.a;
        answerTwo.textContent = questions.questionNine.answers.b;
        answerThree.textContent = questions.questionNine.answers.c;
        answerFour.textContent = questions.questionNine.correctAnswer;
        correctAnswer = questions.questionNine.correctAnswer;
        currentQuestion = 10;
        whatQ.textContent = '10/10';
    } else if (currentQuestion == 10) {
        renderEnterHighscoreScreen();
        complete = true;
    }
}
// Calls the initial functions needed for the quiz to work on page load
function init() {
    renderStartScreen();
    generateQuestion();
    getHighscores();
}
// Starts and stops timer
function startTimer() {
    timer = setInterval(function () {
        count--;
        timerElement.textContent = "Score: " + count;
        if (count < 0) {
            count = 0;
        }
        if (count <= 0 || complete === true) {
            timerElement.textContent = "Score: " + count;
            clearInterval(timer);
            renderEnterHighscoreScreen();
        }


    }, 1000);
}

function getScoresFromStorage() {
    return JSON.parse(localStorage.getItem("highscores")) || [];
}

function getHighscores() {
    highscores = getScoresFromStorage();
    resultUser.innerHTML = highscores.map(score => {
        return `<li class = "highscore">${score.user}</li>`;
    }).join("");
    resultScore.innerHTML = highscores.map(score => {
        return `<li class = "highscore">${score.score}</li>`;
    }).join("");
}

function setHighscore() {
    highscores = getScoresFromStorage();
    let score = {
        user: enterInitials.value,
        score: count
    }
    highscores.push(score);
    localStorage.setItem("highscores", JSON.stringify(highscores));
}
// Renders the start screen section and hides everything else
function renderStartScreen() {
    startScreen.setAttribute("style", "display: flex;");
    questionsScreen.setAttribute("style", "display: none;");
    viewHighscoresScreen.setAttribute("style", "display: none;");
    enterHighscoresScreen.setAttribute("style", "display: none;");
    timerElement.textContent = "Score: 100";
}
// Renders the questions screen section and hides everything else
function renderQuestionScreen() {
    questionsScreen.setAttribute("style", "display: flex;");
    startScreen.setAttribute("style", "display: none;");
    viewHighscoresScreen.setAttribute("style", "display: none;");
    enterHighscoresScreen.setAttribute("style", "display: none;");
}
// Renders the view highscore screen section and hides everything else
function renderViewHighscoreScreen() {
    getHighscores();
    viewHighscoresScreen.setAttribute("style", "display: flex;");
    startScreen.setAttribute("style", "display: none;");
    questionsScreen.setAttribute("style", "display: none;");
    enterHighscoresScreen.setAttribute("style", "display: none;");
}
// Renders the enter highscore screen section and hides everything else
function renderEnterHighscoreScreen() {
    enterHighscoresScreen.setAttribute("style", "display: flex;");
    startScreen.setAttribute("style", "display: none;");
    questionsScreen.setAttribute("style", "display: none;");
    viewHighscoresScreen.setAttribute("style", "display: none;");
    complete = false;
    currentQuestion = 0;
    generateQuestion();
}
// This functions calls the renderQuestions function, timer fucntion and begins the quiz
function startQuiz() {
    count = 100;
    renderQuestionScreen();
    startTimer();
    resultOutcome.setAttribute("style", "display: none;");
}
// This checks if an answer is correct and display correct if it is
function isCorrect() {
    resultOutcome.textContent = "CORRECT";
    resultOutcome.setAttribute("style", "display: inline;");
}
// This checks if an answer is incorrect and display incorrect if it is
function isIncorrect() {
    resultOutcome.textContent = "INCORRECT";
    resultOutcome.setAttribute("style", "display: inline;");
    count = count - 5;
}
function clearHighscores() {
    localStorage.removeItem("highscores");
}

// Calls startQuiz fucntion when the start quiz button is pressed
startButton.addEventListener("click", startQuiz);
// Displays highscores screen and restarts quiz data, including the timer
viewHighscores.addEventListener("click", function () {
    renderViewHighscoreScreen();
    clearInterval(timer);
    count = 100;
    timerElement.textContent = "Score: " + count;
});
// Renders start screen when back button is pressed
backButtonEnter.addEventListener("click", function () {
    renderStartScreen();

});
// Renders start screen when back button is pressed
backButtonView.addEventListener("click", function () {
    renderStartScreen();
    currentQuestion = 0;
    generateQuestion();
});
// Will call either isCorrect or isIncorrect based on your entered answer
answerOne.addEventListener("click", function () {
    if (answerOne.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    }
});
// Will call either isCorrect or isIncorrect based on your entered answer
answerTwo.addEventListener("click", function () {
    if (answerTwo.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    }
});
// Will call either isCorrect or isIncorrect based on your entered answer
answerThree.addEventListener("click", function () {
    if (answerThree.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    }
});
// Will call either isCorrect or isIncorrect based on your entered answer
answerFour.addEventListener("click", function () {
    if (answerFour.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    }
});
// Saves user/score to the localStorage
submitButton.addEventListener("click", function () {
    setHighscore();
    renderViewHighscoreScreen();
    getHighscores();
    enterInitials.value = "";
})
highscoresCl.addEventListener("click", function () {
    clearHighscores();
    renderViewHighscoreScreen();
});
stopQuiz.addEventListener("click", function () {
    currentQuestion = 0;
    generateQuestion();
    clearInterval(timer);
    count = 100;
    timerElement.textContent = "Score: " + count;
    renderStartScreen();
})
// Calls init function to get quiz ready
init();

