const additionOp = document.querySelector("#add");
const minusOp = document.querySelector("#subtract")
const multiOp = document.querySelector("#multi")
const divideOp = document.querySelector("#divide")
const clearBtn = document.querySelector("#clear")

const equals = document.querySelector("#equals")
const display = document.querySelector(".display");
const zero = document.querySelector("#zero");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");


additionOp.addEventListener("click", populateDisplay);
equals.addEventListener("click", populateDisplay);
minusOp.addEventListener("click", populateDisplay);
multiOp.addEventListener("click", populateDisplay);
divideOp.addEventListener("click", populateDisplay);
zero.addEventListener("click", populateDisplay);
one.addEventListener("click", populateDisplay);
two.addEventListener("click", populateDisplay);
three.addEventListener("click", populateDisplay);
four.addEventListener("click", populateDisplay);
five.addEventListener("click", populateDisplay);
six.addEventListener("click", populateDisplay);
seven.addEventListener("click", populateDisplay);
eight.addEventListener("click", populateDisplay);
nine.addEventListener("click", populateDisplay);


additionOp.addEventListener("click", getNum);
equals.addEventListener("click", getNum);
minusOp.addEventListener("click", getNum);
multiOp.addEventListener("click", getNum);

divideOp.addEventListener("click", getNum);
clearBtn.addEventListener("click", clear);

one.addEventListener("click", getNum);
two.addEventListener("click", getNum);
three.addEventListener("click", getNum);
four.addEventListener("click", getNum);
five.addEventListener("click", getNum);
six.addEventListener("click", getNum);
seven.addEventListener("click", getNum);
eight.addEventListener("click", getNum);
nine.addEventListener("click", getNum);



let currentDisplay = "";
let opperator = "";
let evenOrOdd = 0;
let firstCalcNum = 0;
let secondCalcNum = 0;
let currentNum = 0;
let ifFirstNum = true;
let lastNum =0;

function getNum() {

    /*
if(evenOrOdd % 2 === 0){
firstCalcNum = this.innerHTML;
} else {
secondCalcNum = this.innerHTML;
}
evenOrOdd++;
*/
    if (this.innerHTML === "+" || this.innerHTML === "-" || this.innerHTML === "*" || 
    this.innerHTML === "\u00F7") {
        lastNum = currentNum;
        currentNum = 0;
        opperator = this.innerHTML;
        ifFirstNum = true;
    } else if (this.innerHTML === "=") { 
        //console.log(lastNum);
        //console.log(currentNum);
        console.log(operate(opperator, lastNum, currentNum));
    }
    else if (ifFirstNum) {
        currentNum = parseInt(currentNum) + parseInt(this.innerHTML);
        ifFirstNum = false;
    } else {
        currentNum += this.innerHTML;
    }
    //console.log(currentNum);


}


function populateDisplay() {
    // if(this.innerHTML === "+"){
    //   currentNum = lastNum;
    // }
    currentDisplay += this.innerHTML;
    //currentNum = currentDisplay;
    //console.log(currentDisplay);
    display.innerHTML = currentDisplay;
}

function add(a, b) {

    return parseInt(a) + parseInt(b);
}


function subtract(a, b) {
    return parseInt(a) - parseInt(b);
}



function multiply(a, b) {
     let sum = parseInt(a) * parseInt(b);
    return sum;
}


function divide(firstNum, secondNum) {
    return parseInt(firstNum) / parseInt(secondNum);
}


function operate(operator, numOne, numTwo) {
    switch (operator) {
        case "+":
            return add(numOne, numTwo);
            break;

        case "-":
            return subtract(numOne, numTwo);
            break;

        case "*":
            return multiply(numOne, numTwo);
            break;

        case "\u00F7":
            return divide(numOne, numTwo);
            break;
    }

}


function clear(){
 opperator = "";
evenOrOdd = 0;
firstCalcNum = 0;
secondCalcNum = 0;
currentNum = 0;
ifFirstNum = true;
lastNum =0;
currentDisplay = "";
    display.innerHTML = "";
}

//console.log(operate("*", 7, 5));

//console.log(operate("+", 7, 5));

