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
  displayValue: "",
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

function buttonClick(button) {
  /**LOGIC HERE: */
  // when number buttons are clicked:
  // -- update display value as long as it is needed/possible
  if (button.classList.contains("operand")) {
    populateDisplay(fetchDisplayValue(button.value));
  }

  // add - subtract - multiply - divide
  if (button.classList.contains("operator")) {
    console.log(setOperator(button.value));
  }

  // when operator buttons are clicked
  // -- update number that is unassigned a value (that is zero)
  // e.g. if n1 is zero then update it with display value,
  // when operator buttons are clicked and n1 is already assigned
  // -- update n2 with the display value
  // --

  // when equals button is clicked
  // -- update the n2 value, make operation based on operand 1 and 2
  // -- and the selected operator, assign result to n1, and show it on display
  if (button.value === "=") {
    populateDisplay(memory.num1);
  }

  // when ac button is clicked
  // -clear the memory:
  // -- remove all that displayValue contains
  // -- set display to zero
  // -- delete num1 num2 and operator values
  if (button.value === "ac") clearMemory();
}

// clearMemory clears display, operands and operator
function clearMemory() {
  memory.num1 = 0;
  memory.num2 = 0;
  memory.displayValue = "";
  memory.operator = undefined;
  populateDisplay();
}

function setOperator(value) {
  memory.operator = value;
  return memory.operator;
}

// if there is a digit and displayValue doesn't exceed 8 numbers
// add the digit to the displayValue

// else just return the value of displayValue
function fetchDisplayValue(digit) {
  if (digit && memory.displayValue.length < 8) {
    memory.displayValue += digit;
  }
  return memory.displayValue;
}
