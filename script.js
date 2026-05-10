const counter = document.querySelector("#counter-bar-ext");
const counterBar = counter.querySelector("#counter-bar-int");

function chargeData () {
    for (let i = 0; i <= 5; i++) {
        setTimeout(incrase, 750 * (i + 1));
    }
}

function incrase () {
    let value = parseInt(counterBar.dataset.value) || 0;
    value++;
    counterBar.dataset.value = value;
    counterBar.style.width = (value * 100) + "px";
}

chargeData();