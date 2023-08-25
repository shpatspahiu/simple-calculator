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

  return (a / b).toFixed(2);
}
/* ------------------------------------- */

let memory = {
  num1: 0,
  num2: 0,
  displayValue: "",
  operator: undefined,
  calculationStarted: false,
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
// *********************************************************** \\
function buttonClick(button) {
  // NUMBER CLICK
  if (button.classList.contains("operand")) {
    operandClick(button);
  }

  // ADD SUBTRACT MULTIPLY DIVIDE CLICK
  if (button.classList.contains("operator")) {
    operatorClick(button);
  }

  // EQUALS CLICK:
  if (button.classList.contains("equals")) {
    equalsClick();
  }

  // AC CLICK:
  if (button.value === "ac") clearMemory();
}
// *********************************************************** \\

function operandClick(button) {
  memory.calculationStarted = true;
  populateDisplay(fetchDisplayValue(button.value));
}

function operatorClick(button) {
  if (!memory.calculationStarted) {
    console.log("calculation hasnt started");
    return;
  }

  // if num1 is not assigned a value
  if (!memory.num1) {
    memory.num1 = Number(memory.displayValue);
    console.log(`num1 is: ${memory.num1}`);
    // reset displayValue
    memory.displayValue = "";
  } else {
    memory.num2 = Number(memory.displayValue);
    console.log(`num2 is: ${memory.num2}`);
    memory.num1 = operate(memory.num1, memory.num2, memory.operator);
    populateDisplay(memory.num1);
    memory.num2 = 0;
  }

  // assign new operator
  memory.operator = button.value;

  memory.displayValue = "";
}

// clearMemory clears display, operands and operator
function clearMemory() {
  memory.num1 = 0;
  memory.num2 = 0;
  memory.displayValue = "";
  memory.operator = undefined;
  memory.calculationStarted = false;
  populateDisplay();
}

function setOperator(value) {
  memory.operator = value;
  return memory.operator;
}

// FETCH DISPLAY VALUE
function fetchDisplayValue(digit) {
  if (digit && memory.displayValue.length < 8) {
    memory.displayValue += digit;
  }
  return memory.displayValue;
}
