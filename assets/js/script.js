let viewHighscores = document.querySelector(".highscores");
let score = document.querySelector(".score");
let heading = document.querySelector(".heading");
let question = document.querySelector(".question");
let info = document.querySelector(".info");
let answer1 = document.querySelector(".item1");
let answer2 = document.querySelector(".item2");
let answer3 = document.querySelector(".item3");
let answer4 = document.querySelector(".item4");
let backButton = document.querySelector(".back-button");
let initials = document.querySelector(".initials");
let submit = document.querySelector(".submit");
let clear = document.querySelector(".clear");
let startButton = document.querySelector(".start-item");
let result = document.querySelector(".result");
let mainContent = document.querySelector(".main-content");
let highscore = document.querySelector(".hsHeading");
let scores = document.querySelector(".scores");

let selectedQ = "";
let selectedA = [];
let choice;
let count = 100;
let timerCount;
let correct = false;
let complete;
let userScore;


let questions = ["What does the acronym HTML stand for?", "What does the acronym CSS stand for?", "What symbol indicates a tag?", "What is the correct tag for a line break?", "What is the correct format for aligning written content to the center of the page in CSS?", "What is the correct format for changing the background colour of a div in CSS?", "What is the correct format for a div?", "Which HTML tag is used to define the document type?", "What does WWW stand for?"];
let answers = {
    one: ["Hyper Text Markup Language", "Hyper Text Markdown Language", "High Textile Modular Language", "Help The Man Live"],
    two: ["Cascading Style Sheets", "Cascade Style Sheets", "Computer System Styles", "Compiled System Series"],
    three: ["<html>", "{html}", "[p]", "/h3"],
    four: ["<br>", "<break>", "<brk>", "</br>]"],
    five: ["text-align: center;", "display: center;", "font-align: middle;", "content: center;"],
    six: ["background-color: blue;", "backgroundcolor: blue;", "bg-color: blue;", "backgroundColor = blue;"],
    seven: ["<div>", "div", "<dv>", "-div-"],
    eight: ["<!DOCTYPE html>", "<docuType>", "<doctype = html", "doc-type html"],
    nine: ["World Wide Web", "Wide World Wisdom", "Weird Wild Wilderness", "Wide Widescreen Wheels"]
}

function homescreen() {
    answer1.setAttribute("style", "display: none;");
    answer2.setAttribute("style", "display: none;");
    answer3.setAttribute("style", "display: none;");
    answer4.setAttribute("style", "display: none;");
    question.setAttribute("style", "display: none;");
    initials.setAttribute("style", "display: none;");
    clear.setAttribute("style", "display: none;");
    submit.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: inline;");
    heading.setAttribute("style", "display: inline;");
    highscore.setAttribute("style", "display: none;");
    info.setAttribute("style", "display: inline;;");
    backButton.setAttribute("style", "display: none;");
    mainContent.setAttribute("style", "flex-direction: column;");
    clearInterval(timerCount);
    count = 100;
    score.textContent = "Score: " + count;

}
function renderBlankScreen() {
    heading.setAttribute("style", "display: none;");
    question.setAttribute("style", "display: none;");
    info.setAttribute("style", "display: none;");
    answer1.setAttribute("style", "display: none;");
    answer2.setAttribute("style", "display: none;");
    answer3.setAttribute("style", "display: none;");
    answer4.setAttribute("style", "display: none;");
    backButton.setAttribute("style", "display: none;");
    initials.setAttribute("style", "display: none;");
    submit.setAttribute("style", "display: none;");
    clear.setAttribute("style", "display: none;");
    startButton.setAttribute("style", "display: none;");
    result.setAttribute("style", "display: none;");
    highscore.setAttribute("style", "display: none;");
}
function generateQandA() {

    if (choice == 0) {
        selectedQ = questions[0];
        selectedA = answers.one;
        choice = 1;
    } else if (choice == 1) {
        selectedQ = questions[1];
        selectedA = answers.two;
        choice = 2;
    } else if (choice == 2) {
        selectedQ = questions[2];
        selectedA = answers.three;
        choice = 3;
    } else if (choice == 3) {
        selectedQ = questions[3];
        selectedA = answers.four;
        choice = 4;
    } else if (choice == 4) {
        selectedQ = questions[4];
        selectedA = answers.five;
        choice = 5;
    } else if (choice == 5) {
        selectedQ = questions[5];
        selectedA = answers.six;
        choice = 6;
    } else if (choice == 6) {
        selectedQ = questions[6];
        selectedA = answers.seven;
        choice = 7;
    } else if (choice == 7) {
        selectedQ = questions[7];
        selectedA = answers.eight;
        choice = 8;
    } else if (choice == 8) {
        selectedQ = questions[8];
        selectedA = answers.nine;
        choice = 9;
    } else {
        userScore = count;
        showHighscores();
    }
    question.textContent = selectedQ;
    for (let i = 0; i < 3; i++)
        answer1.textContent = selectedA[0];
    answer2.textContent = selectedA[1];
    answer3.textContent = selectedA[2];
    answer4.textContent = selectedA[3];
}
function renderQuestions() {
    renderBlankScreen();
    answer1.setAttribute("style", "display: inline;");
    answer2.setAttribute("style", "display: inline;");
    answer3.setAttribute("style", "display: inline;");
    answer4.setAttribute("style", "display: inline;");
    question.setAttribute("style", "display: inline;");
}
function startTimer() {
    timerCount = setInterval(function () {
        count--;
        score.textContent = "Score: " + count;
        if (count < 0) {
            clearInterval(timerCount);
            score.textContent = "Times Up!!"
        }
    }, 1000);
}
function startQuiz() {
    choice = 0;
    count = 100;
    startTimer();
    renderQuestions();
    generateQandA();
    
    viewHighscores.disabled = true;
}
function getAnswer() {
    if (correct) {
        correct = false;
        isCorrect();
    } else {
        isIncorrect();
    }
}
function showHighscores() {
    renderBlankScreen();
    scores.setAttribute("style", "display: inline;");
    clear.setAttribute("style", "display: inline; width: 50%;");
    highscore.setAttribute("style", "display: inline; width: 100%; padding-bottom: 20px");
    backButton.setAttribute("style", "display: inline; width: 25%;");
    mainContent.setAttribute("style", "flex-direction: row; flex-wrap: wrap; padding: 20px 500px;");
    clearInterval(timerCount);
    count = 100;
    score.textContent = "Score: " + count;
}
function isCorrect() {
    result.textContent = "Correct!";
    result.setAttribute("style", "display: inline;");
}
function setHighscore() {
    if(complete) {
       localStorage.setItem("score", count);
    }
}
function getHighscore() {
    userScore = localStorage.getItem("score");
}
function isIncorrect() {
    result.textContent = "Incorrect";
    result.setAttribute("style", "display: inline;");
    count = count - 15;
}
startButton.addEventListener("click", startQuiz);
answer1.addEventListener("click", function () {
    correct = true;
    getAnswer();
    generateQandA();
    
});
answer2.addEventListener("click", function () {
    getAnswer();
    generateQandA();
    
});

answer3.addEventListener("click", function () {
    getAnswer();
    generateQandA();
   
});
answer4.addEventListener("click", function () {
   getAnswer(); 
   generateQandA();
});

viewHighscores.addEventListener("click", showHighscores);
backButton.addEventListener("click", homescreen);
