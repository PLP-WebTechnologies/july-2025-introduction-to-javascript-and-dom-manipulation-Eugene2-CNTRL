// Part 1: Variable declarations and conditionals
function checkAge(age) {
    let status;
    if (age >= 18) {
        status = 'Adult';
    } else {
        status = 'Minor';
    }
    return status;
}

// Part 2: Custom functions
function greet(name) {
    return `Hello, ${name}!`;
}

function square(number) {
    return number * number;
}

// Part 3: Loop examples

// For loop to generate numbers 1 to 5
function loopNumbers() {
    let result = '';
    for (let i = 1; i <= 5; i++) {
        result += i + ' ';
    }
    return result.trim();
}

// While loop to count down from 5
function countdown() {
    let count = 5;
    let text = '';
    while (count > 0) {
        text += count + '... ';
        count--;
    }
    return text.trim();
}

// Part 4: DOM interactions

const outputDiv = document.getElementById('output');
const statusP = document.getElementById('status');

document.getElementById('varButton').addEventListener('click', () => {
    const age = 20;      // variable declaration
    const result = checkAge(age);
    outputDiv.textContent = `Age: ${age} - Status: ${result}`;
    statusP.textContent = 'Checked variable and conditional.';
});

document.getElementById('functionsButton').addEventListener('click', () => {
    const greeting = greet('Alice');
    const squared = square(7);
    outputDiv.textContent = `${greeting} The square of 7 is ${squared}.`;
    statusP.textContent = 'Called two custom functions.';
});

document.getElementById('loopsButton').addEventListener('click', () => {
    const nums = loopNumbers();
    const down = countdown();
    outputDiv.textContent = `For loop output: ${nums}\nWhile loop output: ${down}`;
    statusP.textContent = 'Executed two loop examples.';
});
