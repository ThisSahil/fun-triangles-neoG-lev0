const quizForm = document.querySelector(".quiz-form");

const submitBtn = document.querySelector("#submit-btn");

const output = document.querySelector("#output-box");

const correctAns = ["90°", "right angled"];

submitBtn.addEventListener("click", calcScore);

function calcScore() {
  let score = 0;
  let index = 0;

  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === correctAns[index]) {
      score = score + 1;
    }
    index = index + 1;
  }

  output.innerText = `Your score is ${score}`;
}
