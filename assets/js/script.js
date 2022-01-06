let startScreen = document.querySelector(".home-screen");
let questionsScreen = document.querySelector(".questions-screen");
let viewHighscoresScreen = document.querySelector(".view-highscores-screen");
let enterHighscoresScreen = document.querySelector(".enter-highscores-screen");
let startButton = document.querySelector(".start-button");
let timerElement = document.querySelector(".score-header");

let timer;
let count;

let questions 

function init() {
    renderStartScreen();
}

function startTimer() {
    timer = setInterval(function() {
        count--;
        timerElement.textContent = "Score: " + count;
        if (count <= 0) {
            clearInterval(timer);
            renderEnterHighscoreScreen();
        }  
    }, 1000);
}

function renderStartScreen() {
    startScreen.setAttribute("style", "display: flex;");
    questionsScreen.setAttribute("style", "display: none;");
    viewHighscoresScreen.setAttribute("style", "display: none;");
    enterHighscoresScreen.setAttribute("style", "display: none;");
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
}

function startQuiz() {
    count = 100;
    renderQuestionScreen();
    startTimer(); 
}

startButton.addEventListener("click", startQuiz);

init();


