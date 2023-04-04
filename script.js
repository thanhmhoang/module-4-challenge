
// Creating an array for questions
var questions = [ 
    {
        question: "What is the largest music festival in the world?"
        answerA: "Coachella"
        answerB: "Donauinselfest"
        answerC: "Summerfest"
        answerD: "Tomorrowland"
        correctAnswer: "answerB"
    },

    {
        question: "Indio, CA is the home to what music festival?"
        answerA: "Electric Daisy Carnival/EDC"
        answerB: "Essense Music Festival"
        answerC: "Lollapalooza"
        answerD: "Coachella"
        correctAnswer: "answerD"
    },

    {
        question: "Which is not a music festival promotor company?"
        answerA: "Live Nation Entertainment"
        answerB: "AEG Presents"
        answerC: "LVMH"
        answerD: "LiveStyle"
        correctAnswer: "answerC"
    },

    {
        question: "Whose are the headlining acts for Coachella 2023?"
        answerA: "Ariana Grande, Kanye West, Rage Against the Machine"
        answerB: "Bad Bunny, BLACKPINK, Frank Ocean"
        answerC: "Harry Styles, Billie Eilish, Swedish House Mafia x The Weeknd"
        answerD: "Kendrick Lamar, Tame Impala, Coldplay"
        correctAnswer: "answerB"
    },

    {
        question: "Stages at Coachella are named after what?"
        answerA: "Deserts"
        answerB: "Mountains"
        answerC: "Oceans"
        answerD: "Planets"
        correctAnswer: "answerA"
    },

    {
        question: "So who is trying to buy my Coachella ticket?"
        answerA: "You"
        answerB: "You?"
        answerC: "Youuuu"
        answerD: "All the above"
        correctAnswer: "answerD"
    },      
]

function startQuiz() {
    var myQuiz = document.getElementsByClassName("quiz-container")
    var displayQuiz = myQuiz.style.display;

    if(displayQuiz == 'block') {
        myQuiz.style.display = "none";
    }
    else{
        myQuiz.style.display = "block";
    }
}
