function clearScreen(){
    primaryScreen.textContent = "00";
    secondaryScreen.textContent = "00";
}

const clearButton = document.querySelector('.clear');
const primaryScreen = document.querySelector('.primary-screen');
const secondaryScreen = document.querySelector('.secondary-screen');