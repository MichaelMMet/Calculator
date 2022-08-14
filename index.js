const addition = document.querySelector("#add");
const display = document.querySelector(".display");

addition.addEventListener("click", populateDisplay);

function populateDisplay(){
console.log(this.innerHTML);

}

function add(a, b) {
    return a + b;
}


function subtract(a, b) {
    return a - b;
}



function multiply(a, b) {
    ; let sum = a * b;
    return sum;
}


function divide(firstNum, secondNum) {
    return firstNum / secondNum;
}


function operate(operator, numOne, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
            break;

        case "-":
            subtract(numOne, numTwo);
            break;

        case "*":
            return multiply(numOne, numTwo);
            break;

        case "/":
            divide(numOne, numTwo);
            break;
    }

}

console.log(operate("*", 7, 5));

console.log(operate("+", 7, 5));

