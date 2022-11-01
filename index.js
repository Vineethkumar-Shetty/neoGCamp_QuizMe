var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("Welcome to 'DO YOU KNOW Vineeth ?' " + "Please tell your name? ");
console.log("Hello " + userName + " lets begin!!");
function play(questions, answers) {
  var userAnswer = readlineSync.question(questions);
  if (userAnswer.toUpperCase() === answers.toUpperCase()) {
    console.log("You are right!!!");
    score = score + 1;
  } else {
    console.log("OOPS..!..you are wrong!!!");
  }
  console.log("your score is: " + score);
  console.log("_______________________________")
}


var quizItems = [
  {
    question: "Where do i work now? ",
    answer: "Capgemini"
  },
  {
    question: "My hometown? ",
    answer: "Bayar"
  },
  {
    question: "My age ? ",
    answer: '24'
  }
]


for (i = 0; i < quizItems.length; i++) {
  var currentQuestions = quizItems[i];
  play(currentQuestions.question, currentQuestions.answer);
}