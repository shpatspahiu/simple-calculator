/* basic math functions */
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "ERROR";
  }

  return (a / b).toFixed(8);
}

let num1 = 0;
let num2 = 0;
let operator;

function operate(operand1, operand2, operator) {
  return operator(operand1, operand2);
}

// display
const display = document.querySelector(".display");

function populateDisplay(op = 0) {
  display.textContent = `${op}`;
}

populateDisplay();

// buttons
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    populateDisplay(button.value);
  });
});
