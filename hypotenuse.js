const inputs = document.querySelectorAll(".side-input");

const checkBtn = document.querySelector("#hypotenuse-btn");

const output = document.querySelector("#output-box");

checkBtn.addEventListener("click", calcHypotenuse);

function calcHypotenuse() {
  let a = Number(inputs[0].value);
  let b = Number(inputs[1].value);

  const sumOfSquare = a ** 2 + b ** 2;

  const ans = Math.sqrt(sumOfSquare);

  output.innerText = `The Length of Hypotenuse is ${ans}`;
}
