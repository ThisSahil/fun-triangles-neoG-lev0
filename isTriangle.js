const angleInput = document.querySelectorAll(".angle-input");
const checkBtn = document.querySelector("#check-btn");

const output = document.querySelector("#output-box");

checkBtn.addEventListener("click", checkIsTriangle);

function checkIsTriangle() {
  let angleSum = sumOfAngles(
    parseInt(angleInput[0].value),
    parseInt(angleInput[1].value),
    parseInt(angleInput[2].value)
  );

  // console.log(angleSum);

  if (angleSum === 180) {
    output.innerText = "Yay!! the angles form the triangle 🥳";
  } else {
    output.innerText = "No the angles don't form the triangle ☹️";
  }
}

function sumOfAngles(angle1, angle2, angle3) {
  return angle1 + angle2 + angle3;
}
