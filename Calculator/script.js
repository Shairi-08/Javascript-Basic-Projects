// Get the display element
const display = document.getElementById('display');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to delete the last character
function deleteLastChar() {
    display.value = display.value.slice(0, -1);
}

// Function to add a character to the display
function addToDisplay(value) {
    // If the last character is the result of a calculation, start a new expression
    if (display.value && !isNaN(display.value[display.value.length - 1]) && value === '=') {
        display.value = display.value + value;
    } else {
        display.value += value;
    }
}

// Function to evaluate the expression
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}
