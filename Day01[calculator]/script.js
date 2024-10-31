let displayValue = '';
let firstValue = null;
let secondValue = null;
let currentOperation = null;

const display = document.getElementById("display");

function appendNumber(number) {
    displayValue += number;
    updateDisplay();
}

function appendDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = '';
    firstValue = null;
    secondValue = null;
    currentOperation = null;
    updateDisplay();
}

function setOperation(operation) {
    if (currentOperation === null) {
        firstValue = parseFloat(displayValue);
        displayValue = '';
        currentOperation = operation;
    } else {
        calculate();
        firstValue = parseFloat(display.textContent);
        currentOperation = operation;
    }
}

function calculate() {
    if (currentOperation && firstValue !== null) {
        secondValue = parseFloat(displayValue);
        let result;
        
        switch (currentOperation) {
            case 'add':
                result = firstValue + secondValue;
                break;
            case 'sub':
                result = firstValue - secondValue;
                break;
            case 'mul':
                result = firstValue * secondValue;
                break;
            case 'div':
                result = firstValue / secondValue;
                break;
            case 'mod':
                result = firstValue % secondValue;
                break;
            default:
                return;
        }
        
        displayValue = result.toString();
        firstValue = null;
        secondValue = null;
        currentOperation = null;
        updateDisplay();
    }
}

function updateDisplay() {
    display.value = displayValue || '0';
}
