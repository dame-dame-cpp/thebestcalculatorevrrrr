const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let previousInput = '';
let operator = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (button.classList.contains('operator')) {
            if (value === '^2') {
                currentInput = Math.pow(parseFloat(currentInput), 2).toString(); // Square
            } else if (value === '^3') {
                currentInput = Math.pow(parseFloat(currentInput), 3).toString(); // Cube
            } else if (value === '^') {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            } else {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else if (value === 'π') {
            currentInput = Math.PI.toString(); // Pi
        } else if (value === 'e') {
            currentInput = Math.E.toString(); // Euler's number
        } else if (button.classList.contains('equal-sign')) {
            if (operator && previousInput && currentInput) {
                currentInput = calculate(previousInput, currentInput, operator);
                operator = '';
            }
        } else if (button.classList.contains('all-clear')) {
            currentInput = '';
            previousInput = '';
            operator = '';
        } else {
            currentInput += value;
        }
        display.value = currentInput;
    });
});

function calculate(first, second, operator) {
    const num1 = parseFloat(first);
    const num2 = parseFloat(second);

    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '^':
            return Math.pow(num1, num2); // Power (x^y)
        default:
            return second;
    }
}