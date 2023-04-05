const quiz = [
  {
    question: "What is the largest music festival in the world?",
    choices: ["Coachella", "Donauinselfest", "Summerfest", "Tomorrowland"],
    answer: "Donauinselfest"
  },

  {
    question: "Indio, CA is the home to what music festival?",
    choices: ["Electric Daisy Carnival/EDC", "Essense Music Festival", "Lollapalooza", "Coachella"],
    answer: "Coachella",
  },

  {
    question: "Which is not a music festival promotor company?",
    choices: ["Live Nation Entertainment", "AEG Presents", "LVMH", "LiveStyle"],
    answer: "LVMH",
  },

  {
    question: "Whose are the headlining acts for Coachella 2023?",
    choices: ["Ariana Grande, Kanye West, Rage Against the Machine", "Bad Bunny, BLACKPINK, Frank Ocean", "Harry Styles, Billie Eilish, Swedish House Mafia x The Weeknd", "Kendrick Lamar, Tame Impala, Coldplay"],
    answer: "Bad Bunny, BLACKPINK, Frank Ocean",
  },

  {
    question: "Stages at Coachella are named after what?",
    choices: ["Deserts", "Mountains", "Oceans", "Planets"],
    answer: "Deserts",
  },
  {
    question: "So who is trying to buy my Coachella ticket?",
    choices: ["You", "You?", "Youuuu", "All the Above"],
    answer: "All the Above",
  },
];

const startButton = document.querySelector("#start-button");
const choicesElement = document.querySelector("#choices");
const quizContainer = document.querySelector("#quiz-container");
const timerElement = document.querySelector("#time");
const feedbackElement = document.querySelector("#feedback");
const highscoresContainer = document.querySelector("#highscores-container");
const highscoresList = document.querySelector("#highscores-list");
const initialsElement = document.querySelector("#initials");
const submitButton = document.querySelector("#submit-button");
const goBackButton = document.querySelector("#go-back-button");
const clearHighscoresButton = document.querySelector("#clear-highscores-button");
const homePage = document.querySelector("#start-container");

let timeLeft = quiz.length * 5; // initial quiz time in seconds
let questionIndex = 0;
let timerId;
let highscores = [];

function startQuiz() {
  homePage.style.display = "none";
  quizContainer.classList.remove("hide");
  timerId = setInterval(clockTick, 1000);
  timerElement.textContent = timeLeft;
  displayQuestion();
}

function displayQuestion() {
  const question = quiz[questionIndex];
  document.querySelector("#question-title").textContent = question.question;
  feedbackElement.classList.add("hide");
  const choices = question.choices
    .map(
      (choice, i) => `
    <button class="choice" value="${choice}" onclick="questionClick(this)">
      ${i + 1}. ${choice}
    </button>
  `
    )
    .join("");
  choicesElement.innerHTML = choices;
}

function questionClick(button) {
  const answer = button.value;
  if (answer !== quiz[questionIndex].answer) {
    timeLeft = Math.max(timeLeft - 5, 0); // subtract 5 seconds for wrong answers
    feedbackElement.textContent = "Wrong!";
  } else {
    feedbackElement.textContent = "Correct!";
  }
  feedbackElement.classList.remove("hide");
  questionIndex++;
  if (questionIndex === quiz.length) {
    quizEnd();
  } else {
    displayQuestion();
  }
}

function quizEnd() {
  clearInterval(timerId);
  timerElement.textContent = timeLeft;
  document.querySelector("#quiz-end").classList.remove("hide");
  highscoresContainer.classList.remove("hide");
}

function clockTick() {
  timeLeft--;
  timerElement.textContent = timeLeft;
  if (timeLeft === 0) {
    quizEnd();
  }
}

function goBack() {
  questionIndex = 0;
  timeLeft = quiz.length * 5; // reset time
  highscoresContainer.classList.add("hide");
  document.querySelector("#quiz-end").classList.add("hide");
  startButton.classList.remove("hide");
}

function saveAndShowHighscores() {
  const initials = initialsElement.value.trim();
  if (!initials) return;
  const highscore = { initials, score: timeLeft };
  highscores.push(highscore);

  // sort highscores by score, descending
  highscores.sort((a, b) => b.score - a.score);

  // render highscores
  const highscoresHtml = highscores
    .map((score, i) => `<li>${i + 1}. ${score.initials} - ${score.score}</li>`)
    .join("");
  highscoresList.innerHTML = highscoresHtml;

  // show highscores screen
  quizContainer.classList.add("hide");
  document.querySelector("#quiz-end").classList.add("hide");
  highscoresContainer.classList.remove("hide");
}

function showHighscores() {
  highscores = JSON.parse(localStorage.getItem("highscores")) || [];
  const scores = highscores
    .map(
      (score) => `
    <li>${score.initials} - ${score.score}</li>
  `
    )
    .join("");
  highscoresList.innerHTML = scores;
}

function clearHighscores() {
  localStorage.clear();
  highscores = [];
  showHighscores();
}

submitButton.addEventListener("click", saveAndShowHighscores);
clearHighscoresButton.addEventListener("click", clearHighscores);
startButton.addEventListener("click", startQuiz);
