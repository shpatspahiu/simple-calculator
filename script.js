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
  // TODO: as long as only operand btns are clicked,
  // the op must concat with previous op
  display.textContent = `${op}`;
}

// buttons nodelist
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => determineButtonAction(button));
});

function determineButtonAction(button) {
  // AC => clear memory DONE
  if (button.value === "ac") {
    clearMemory();
  }
  // operator => assign it to operator variable DONE
  else if (button.classList.contains("operator")) {
    operator = button.value;
  } else {
    // TODO: make up values
    populateDisplay(button.value);
  }
}

// clearMemory clears display, operands and operator
function clearMemory() {
  num1 = 0;
  num2 = 0;
  operator = null;
  populateDisplay(0);
}
