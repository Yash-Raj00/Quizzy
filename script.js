let score = 0;
let selectedOption;
let questionStack = [];
let optStack = [];
let randQueIndex = null;
let questions = [
  "What is the capital of India?",
  "Which river is known as the 'Ganga' in India?",
  "Who is known as the 'Father of the Nation' in India?",
  "What is the national currency of India?",
  "Which famous monument in India is also known as the 'Symbol of Love'?",
  "Which festival is known as the 'Festival of Lights' in India?",
  "What is the national animal of India?",
  "Which Indian state is known as the 'Land of Five Rivers'?",
  "Who wrote the Indian national anthem?",
  "What is the highest civilian award in India?",
];
let opts = [
  ["New Delhi", "Mumbai", "Kolkata", "Chennai", "New Delhi"],
  ["Yamuna", "Ganges", "Brahmaputra", "Indus", "Ganges"],
  [
    "Jawaharlal Nehru",
    "Subhash Chandra Bose",
    "Mahatma Gandhi",
    "Sardar Vallabhbhai Patel",
    "Mahatma Gandhi",
  ],
  ["Dollar", "Euro", "Yen", "Rupee", "Rupee"],
  ["Taj Mahal", "Qutub Minar", "Red Fort", "Gateway of India", "Taj Mahal"],
  ["Holi", "Diwali", "Eid", "Christmas", "Diwali"],
  ["Lion", "Elephant", "Tiger", "Leopard", "Tiger"],
  ["Uttar Pradesh", "Haryana", "Bihar", "Punjab", "Punjab"],
  [
    "Subhas Chandra Bose",
    "Rabindranath Tagore",
    "Bankim Chandra Chattopadhyay",
    "Sarojini Naidu",
    "Rabindranath Tagore",
  ],
  [
    "Padma Vibhushan",
    "Padma Bhushan",
    "Bharat Ratna",
    "Padma Shri",
    "Bharat Ratna",
  ],
];

var limit = 10;
// randomly index generate karke ek array se que filter karke dusre me daal dunga aur random me * karne waale number ko -- kardunga each time.

const buttons = document.querySelectorAll(".opt");
const question = document.getElementById("question");
const nextBtn = document.querySelector("#next");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    buttons.forEach((button) => {
      button.childNodes[1].style.visibility = "hidden";
    }); // 1000 IQ
    // first I did only this.
    button.childNodes[1].style.visibility = "visible";
    selectedOption = button.childNodes[0].childNodes[2].innerText;
  });
});
nextBtn.addEventListener("click", () => {
  if (selectedOption && selectedOption == opts[randQueIndex][4]) {
    score++;
    selectedOption = null;
  }
  questionStack.push(questions[randQueIndex]);
  questions = questions.filter((ques) => ques != questions[randQueIndex]);
  optStack.push(opts[randQueIndex]);
  opts = opts.filter((opt) => opt != opts[randQueIndex]);
  console.log(limit);
  limit--;
  if (questions.length > 0) {
    if (questions.length === 1) {
      nextBtn.innerText = "End Quiz";
    }
    makeQuiz();
    buttons.forEach((button) => {
      button.childNodes[1].style.visibility = "hidden";
    });
  } else if (nextBtn.innerText === "Replay") location.reload();   // No issue now
  else {
    endQuiz();
  }
});

function endQuiz() {
  const container = document.querySelector(".container");
  container.innerHTML = `<h1> Your Score: ${score}`;
  container.style.height = "25em";
  nextBtn.innerText = "Replay";
}

function makeQuiz() {
  //   console.log(score);
  gameOn = true;
  randQueIndex = Math.floor(Math.random() * limit);

  question.innerHTML = `<h2>${questions[randQueIndex]}</h2>`;
  for (let i = 0; i < 4; i++) {
    buttons[
      i
    ].childNodes[0].childNodes[2].innerHTML = `${opts[randQueIndex][i]}`;
  }
  //   console.log(questionStack);
  //   console.log(limit);
}
makeQuiz();
