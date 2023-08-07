function clearScreen(){
    primaryScreen.textContent = "00";
    secondaryScreen.textContent = "00";
}

function clearPrimaryScreen(){
    primaryScreen.textContent = "00";
}

function displayToScreen(e){
    let buttonClicked = e.target.textContent;
    let buttonClassName = e.srcElement.className;

    if (primaryScreen.textContent === "00"){
        if (buttonClassName != "numbers" || buttonClicked === "0"){
            clearPrimaryScreen();
        }
        else{
            primaryScreen.textContent = buttonClicked;
        }
    }
    else primaryScreen.textContent += buttonClicked;
}

function deleteFromScreen(){
    if (primaryScreen.textContent === "00"){
        clearPrimaryScreen();
    }
    else{
        let newContent = primaryScreen.textContent.slice(0,-1);
        newContent === "" ? clearPrimaryScreen() : primaryScreen.textContent = newContent;
    }
}

function assignOperation(){
    let textContent = primaryScreen.textContent;
   
    for (let i=0; i<textContent.length; i++){
        if (textContent[i] === "+"|| textContent[i] === "-" || textContent[i] === "÷" || textContent[i] === "x"){
            num1 = +textContent.slice(0,i);
            num2 = +textContent.slice(i+1, textContent.length);
            operator = textContent[i];
            break;
        }
    }  
    console.log(`num1 - ${num1}, num2 - ${num2}, operator - ${operator}.`)
    secondaryScreen.textContent = textContent;
    primaryScreen.textContent = calculate[operator](num1,num2);
}

// Calculator Elements

const primaryScreen = document.querySelector('.primary-screen');
const secondaryScreen = document.querySelector('.secondary-screen');

const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach((button) => button.addEventListener('click', displayToScreen))
operatorButtons.forEach((button) => button.addEventListener('click', displayToScreen))
operatorButtons.forEach((button)=> button.addEventListener('click', compute))

function compute(){

}
// Calculations

const calculate = {
    "+" : (a,b)=>a+b,
    "-" : (a,b)=>a-b,
    "x" : (a,b)=>a*b,
    "÷" : (a,b)=>a/b,
};

let num1, num2, operator;