var homePage = document.querySelector(".start-info");
var question = document.querySelector("#questions");
var currentQuestionIndex = 0;
var resultsPage = document.querySelector(".results");
var scorePage = document.querySelector(".scores");
var choiceEl = document.querySelector(".choices");

// Creating an array for questions
var questions = [ 
    {
        question: "What is the largest music festival in the world?",
        answer: ["Coachella", "Donauinselfest", "Summerfest", "Tomorrowland"],
        correctAnswer: "answerB",
    },

    {
        question: "Indio, CA is the home to what music festival?",
        answer: ["Electric Daisy Carnival/EDC", "Essense Music Festival", "Lollapalooza", "Coachella"],
        correctAnswer: "answerD",
    },

    {
        question: "Which is not a music festival promotor company?",
        answer: ["Live Nation Entertainment", "AEG Presents", "LVMH", "LiveStyle"],
        correctAnswer: "answerC",
    },

    {
        question: "Whose are the headlining acts for Coachella 2023?",
        answer: ["Ariana Grande, Kanye West, Rage Against the Machine", "Bad Bunny, BLACKPINK, Frank Ocean", "Harry Styles, Billie Eilish, Swedish House Mafia x The Weeknd", "Kendrick Lamar, Tame Impala, Coldplay"],
        correctAnswer: "answerB"
    },

    {
        question: "Stages at Coachella are named after what?",
        answer: ["Deserts", "Mountains", "Oceans", "Planets"],
        correctAnswer: "answerA",
    },

    {
        question: "So who is trying to buy my Coachella ticket?",
        answer: ["You", "You?", "Youuuu", "All the above"],
        correctAnswer: "answerD",
    },      
]

function startQuiz() {
    homePage.style.display = "none";
    resultsPage.style.display = "none";
    scorePage.style.display = "none";
    displayQuestions()
}

function displayQuestions() {
    console.log("displayQuestions")
    var currentQuestion = questions[currentQuestionIndex];
    question.textContent = currentQuestion.question;
    
    for (let i = 0; i < currentQuestion.answer.length; i++) {
       var choice = currentQuestion.answer[i];
       var choiceBtn = document.createElement("BUTTON");
       choiceBtn.setAttribute("class", "choice");
       choiceBtn.setAttribute("value", choice);
       choiceBtn.textContent = i + 1 + ".  " + choice;
       choiceEl.append(choiceBtn);
      }
}

function questionClick(event) {
    var btnEl = event.target;
    if (btnEl.value !== questions[currentQuestionIndex].answer){
        // reduce time by 15 seconds
        // feedback statemetn displays "wrong"
    }
    else {
        // feedback statement displays "correct"
    }
    currentQuestionIndex ++;
}

// 