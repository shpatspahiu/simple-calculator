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
/* ------------------------------------- */

let memory = {
  num1: 0,
  num2: 0,
  enteredValue: "",
  operator: undefined,
};

/* Operate performs operator on operand1 and operand2 */
function operate(operand1, operand2, operator) {
  switch (operator) {
    case "add":
      return add(operand1, operand2);
    case "subtract":
      return subtract(operand1, operand2);
    case "multiply":
      return multiply(operand1, operand2);
    case "divide":
      return divide(operand1, operand2);
  }
}

/*-----------DISPLAY------------------------------*/
const display = document.querySelector(".display");
// shows content on screen
function populateDisplay(value = "0") {
  display.textContent = `${value}`;
}
/*------------------------------------------------*/

/*-----------Button Setup-------------------------*/
const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => buttonClick(button));
});
/*------------------------------------------------*/

function buttonClick(button) {}

// clearMemory clears display, operands and operator
function clearMemory() {}

function parseEnteredValue(digit) {
  if (memory.enteredValue.length < 9) {
    memory.enteredValue += digit;
  }
}
