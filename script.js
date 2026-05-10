const counter = document.querySelector("counter-bar-ext");

function chargeData () {
    for (i=0 ; i <= 5 ; i++) {
        setTimeout(incrase, 750);
    }
}

function incrase () {
    [...counter.children][0].dataset.value ++;
}