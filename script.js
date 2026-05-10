const counter = document.querySelector("#counter-bar-ext");
const counterBar = counter.querySelector("#counter-bar-int");

const basicSleepTime = 1250;
const nbrOfIncrase = 5;

function chargeData () {
    for (let i = 0; i < nbrOfIncrase; i++) {
        setTimeout(incrase, basicSleepTime * (i + 1));
    }
}

function incrase () {
    let value = parseInt(counterBar.dataset.value) || 0;
    value++;
    counterBar.dataset.value = value;
    counterBar.style.width = (value * 350 / nbrOfIncrase) + "px";
}

chargeData();