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

let selectedQuestion = document.querySelector(".question");
let answerOne = document.querySelector(".answer-1");
let answerTwo = document.querySelector(".answer-2");
let answerThree = document.querySelector(".answer-3");
let answerFour = document.querySelector(".answer-4");
let resultOutcome = document.querySelector(".result-outcome");

let enteredAnswer;
let timer;
let count;
let currentQuestion = 0;
let correctAnswer;
let complete = false;
let selectedAnswer;
let highscores = [];
let user = [];

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

function generateQuestion() {
    if (currentQuestion == 0) {
        selectedQuestion.textContent = questions.questionZero.title;
        answerOne.textContent = questions.questionZero.answers.a;
        answerTwo.textContent = questions.questionZero.correctAnswer;
        answerThree.textContent = questions.questionZero.answers.b;
        answerFour.textContent = questions.questionZero.answers.c;
        correctAnswer = questions.questionZero.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 1) {
        selectedQuestion.textContent = questions.questionOne.title;
        answerOne.textContent = questions.questionOne.answers.a;
        answerTwo.textContent = questions.questionOne.answers.b;
        answerThree.textContent = questions.questionOne.correctAnswer;
        answerFour.textContent = questions.questionOne.answers.c;
        correctAnswer = questions.questionOne.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 2) {
        selectedQuestion.textContent = questions.questionTwo.title;
        answerOne.textContent = questions.questionTwo.correctAnswer;
        answerTwo.textContent = questions.questionTwo.answers.b;
        answerThree.textContent = questions.questionTwo.answers.a;
        answerFour.textContent = questions.questionTwo.answers.c;
        correctAnswer = questions.questionTwo.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 3) {
        selectedQuestion.textContent = questions.questionThree.title;
        answerOne.textContent = questions.questionThree.answers.a;
        answerTwo.textContent = questions.questionThree.answers.b;
        answerThree.textContent = questions.questionThree.correctAnswer;
        answerFour.textContent = questions.questionThree.answers.c;
        correctAnswer = questions.questionThree.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 4) {
        selectedQuestion.textContent = questions.questionFour.title;
        answerOne.textContent = questions.questionFour.answers.a;
        answerTwo.textContent = questions.questionFour.answers.b;
        answerThree.textContent = questions.questionFour.answers.c;
        answerFour.textContent = questions.questionFour.correctAnswer;
        correctAnswer = questions.questionFour.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 5) {
        selectedQuestion.textContent = questions.questionFive.title;
        answerOne.textContent = questions.questionFive.answers.a;
        answerTwo.textContent = questions.questionFive.answers.b;
        answerThree.textContent = questions.questionFive.correctAnswer;
        answerFour.textContent = questions.questionFive.answers.c;
        correctAnswer = questions.questionFive.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 6) {
        selectedQuestion.textContent = questions.questionSix.title;
        answerOne.textContent = questions.questionSix.correctAnswer;
        answerTwo.textContent = questions.questionSix.answers.b;
        answerThree.textContent = questions.questionSix.answers.a;
        answerFour.textContent = questions.questionSix.answers.c;
        correctAnswer = questions.questionSix.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 7) {
        selectedQuestion.textContent = questions.questionSeven.title;
        answerOne.textContent = questions.questionSeven.answers.a;
        answerTwo.textContent = questions.questionSeven.answers.b;
        answerThree.textContent = questions.questionSeven.correctAnswer;
        answerFour.textContent = questions.questionSeven.answers.c;
        correctAnswer = questions.questionSeven.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 8) {
        selectedQuestion.textContent = questions.questionEight.title;
        answerOne.textContent = questions.questionEight.answers.a;
        answerTwo.textContent = questions.questionEight.correctAnswer;
        answerThree.textContent = questions.questionEight.answers.b;
        answerFour.textContent = questions.questionEight.answers.c;
        correctAnswer = questions.questionEight.correctAnswer;
        currentQuestion++;
    } else if (currentQuestion == 9) {
        selectedQuestion.textContent = questions.questionNine.title;
        answerOne.textContent = questions.questionNine.answers.a;
        answerTwo.textContent = questions.questionNine.answers.b;
        answerThree.textContent = questions.questionNine.answers.c;
        answerFour.textContent = questions.questionNine.correctAnswer;
        correctAnswer = questions.questionNine.correctAnswer;
        currentQuestion = 10;
    } else if(currentQuestion == 10) {
        renderEnterHighscoreScreen();
        complete = true;
    }
}
function init() {
    renderStartScreen();
    generateQuestion();
    getHighscores();
}

function startTimer() {
    timer = setInterval(function () {
        count--;
        timerElement.textContent = "Score: " + count;
        if (count <= 0 || complete === true) {
            clearInterval(timer);
            renderEnterHighscoreScreen();
        }
    }, 1000);
}

function setHighscore() {

    
    highscores.push(count);
    user.push(enterInitials.value);
   localStorage.setItem("highscore", JSON.stringify(highscores));
   localStorage.setItem("username", JSON.stringify(user));

}
function getHighscores() {
    highscores = JSON.parse(localStorage.getItem("highscore")) || [];
    user = JSON.parse(localStorage.getItem("username")) || [];
}


function renderStartScreen() {
    startScreen.setAttribute("style", "display: flex;");
    questionsScreen.setAttribute("style", "display: none;");
    viewHighscoresScreen.setAttribute("style", "display: none;");
    enterHighscoresScreen.setAttribute("style", "display: none;");
    timerElement.textContent = "Score: 100";
}

function renderQuestionScreen() {
    questionsScreen.setAttribute("style", "display: flex;");
    startScreen.setAttribute("style", "display: none;");
    viewHighscoresScreen.setAttribute("style", "display: none;");
    enterHighscoresScreen.setAttribute("style", "display: none;");
}

function renderViewHighscoreScreen() {
    viewHighscoresScreen.setAttribute("style", "display: flex;");
    startScreen.setAttribute("style", "display: none;");
    questionsScreen.setAttribute("style", "display: none;");
    enterHighscoresScreen.setAttribute("style", "display: none;");
}

function renderEnterHighscoreScreen() {
    enterHighscoresScreen.setAttribute("style", "display: flex;");
    startScreen.setAttribute("style", "display: none;");
    questionsScreen.setAttribute("style", "display: none;");
    viewHighscoresScreen.setAttribute("style", "display: none;");
    complete = false;
    currentQuestion = 0;
    generateQuestion();
}

function startQuiz() {
    count = 100;
    renderQuestionScreen();
    startTimer();
    resultOutcome.setAttribute("style", "display: none;");
}

function isCorrect() {
    resultOutcome.textContent = "CORRECT";
    resultOutcome.setAttribute("style", "display: inline;");
}

function isIncorrect() {
    resultOutcome.textContent = "INCORRECT";
    resultOutcome.setAttribute("style", "display: inline;");
    count = count - 5;
}


startButton.addEventListener("click", startQuiz);

viewHighscores.addEventListener("click", function () {
    renderViewHighscoreScreen(); 
});

backButtonEnter.addEventListener("click", function () {
    renderStartScreen();
});

backButtonView.addEventListener("click", function () {
    renderStartScreen();
});

answerOne.addEventListener("click", function () {
    if (answerOne.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    }
});

answerTwo.addEventListener("click", function () {
    if (answerTwo.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    }
});

answerThree.addEventListener("click", function () {
    if (answerThree.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    } 
});

answerFour.addEventListener("click", function () {
    if (answerFour.textContent == correctAnswer) {
        isCorrect();
        generateQuestion();
    } else {
        isIncorrect();
        generateQuestion();
    }
});

submitButton.addEventListener("click", function() {
    setHighscore();
    renderViewHighscoreScreen();
})

init();
