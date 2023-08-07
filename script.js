function clearScreen(){
    primaryScreen.textContent = "00";
    secondaryScreen.textContent = "00";
}

function displayToScreen(e){
    let buttonClicked = e.target.textContent;
    let buttonClassName = e.srcElement.className;
    console.log(buttonClassName)
    if (primaryScreen.textContent === "00"){
        if (buttonClassName != "numbers"){
            primaryScreen.textContent = "00";
        }
        else{
            primaryScreen.textContent = buttonClicked;
        }
    }
    else primaryScreen.textContent += buttonClicked;
}

function deleteFromScreen(){
    let newContent = primaryScreen.textContent.slice(0,-1);
    primaryScreen.textContent = newContent;
}

const primaryScreen = document.querySelector('.primary-screen');
const secondaryScreen = document.querySelector('.secondary-screen');

const numberButtons = document.querySelectorAll('.numbers');
const operatorButtons = document.querySelectorAll('.operator');

const clearButton = document.querySelector('.clear');
const deleteButton = document.querySelector('.delete');

numberButtons.forEach((button) => button.addEventListener('click', displayToScreen))
operatorButtons.forEach((button) => button.addEventListener('click', displayToScreen))
deleteButton.addEventListener('click', deleteFromScreen)