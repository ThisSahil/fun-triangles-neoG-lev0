const inputs = document.querySelectorAll(".side-input");

const checkBtn = document.querySelector("#area-btn");

const output = document.querySelector("#output-box");

checkBtn.addEventListener("click", calcArea);

function calcArea() {
  let base = Number(inputs[0].value);
  let height = Number(inputs[1].value);

  const area = (1 / 2) * (base * height);

  output.innerText = `The Area of triangle is ${area}`;
}
