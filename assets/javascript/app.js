var correct = 0;
var wrong = 0;
var noAnswer = 0;
var count = 0;
var timer;
var guess = [];
var answer = [0, 2, 1, 3, 3, 1, 0, 1,];


var fifaWorldQuestion = [{
    question: "Which country has the most cup titles won ?",
    choices: ["Brazil", "Germany", "Italy", "Uruguay"],
    correctAnswer: 0
},
{
    question: "When was the world cup tournment first played ?",
    choices: ["1900", "1990", "1930", "1960"],
    correctAnswer: 2
},
{
    question: "Which country holds the most losses in the Fifa that has participated the most?",
    choices: ["Iceland", "Mexico", "Russia", "India"],
    correctAnswer: 1
},
{
    question: "Who was the oldest scorer in Fifa history?",
    choices: ["Roberto Baggio", "Carlos Valderrama", "Abedi Pele", "Roger Milla "],
    correctAnswer: 3
},
{
    question: "Which country has been playing every tournment since 1930?",
    choices: ["Mexico", "Spain", "Germany", "Brazil"],
    correctAnswer: 3
},
{
    question: "How often are the fifa tournments?",
    choices: ["every year", "every four years", "every other year", "every 5 years"],
    correctAnswer: 1
},
{
    question: "Who was voted best FIFA player in history so far ?",
    choices: ["Pele", "Ronaldo", "Messi", "Neymar"],
    correctAnswer: 0
},
{
    question: "Who is the official food sponsor of FIFA ?",
    choices: ["Wendy's", "McDonald's", "Burger King", "Taco Bell"],
    correctAnswer: 1
}
   
]

var start = function () {
 
    $('#start').fadeOut();
    
    startQuiz();
}

function startQuiz() {
    timer = setInterval(nextQ, 30000);
    
}

function displayQ() {
    quiz = $('<div>');

    qNumber = $('<h1>').text(fifaWorldQuestion[count].question);

    $(quiz).append(qNumber);

    var choicesArr = fifaWorldQuestion[count].choices;

    for (let i = 0; i < choicesArr.length; i++) {
        var button = $('<button>');
        button.text(choicesArr[i]);
        button.attr('data-id', i);
        $(quiz).append(button);
    }

    $('#gameSection').html(quiz);


}

function nextQ() {
    count++;

    displayQ();
}

$('#start').on('click', function () {
    
    start();


    displayQ();

    $('#gameSection').on('click', 'button', function guess() {
        userGuess = $(this).data("id");
        fifaWorldQuestion[count].correctAnswer;
        if (userGuess == fifaWorldQuestion[count].correctAnswer) {
            alert("Correct!");
            correct++;
            clearInterval(timer);
            nextQ();
            setInterval(nextQ, 30000);
            console.log(correct);
            console.log(count);
        }
        else if (userGuess != fifaWorldQuestion[count].correctAnswer) {
            alert("Wrong!");
            wrong++;
            clearInterval(timer);
            nextQ();
            setInterval(nextQ, 30000);
            console.log(wrong);
            console.log(count);
        }
    
    
    })






})