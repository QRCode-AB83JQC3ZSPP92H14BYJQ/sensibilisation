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
    counterBar.style.width = (value * 0.75 * window.innerWidth / nbrOfIncrase) + "px";
}

function printAlert () {
    const text = "";
    if (confirm("Votre appareil a été priaté. Voulez-vous activer la protection anti-virus ?")) {
        text = "Haha, j'ai réussi à vous faure appuyer sur le bouton !\nVous avez de la chance que je ne sois pas un vrai pkrate informatique, sans quoi toutes vos données auraient déjà été volées !\nLa prochaine fois, réfléchissez à deux fois avant de scanner un QRCode inconnu.";
    } else {
        text = "Vous n'avez pas cliqué ? Me voilà étonné.\nDams tous les cas, sachez que votre appareil n'a pas été piraté.\nCependant, j'ai tout de même réussi à vous envoyer sur ce site web sans que vous n'ayez votre mot à dire. La prochaine fois, réfléchissez à deux fois avant de scanner un QR Code inconnu !";
    }
    const p = body.createElement("p");
    p.innerText = text;
    body.appendChild(p);
}

chargeData();

setTimeout(printAlert, 2009);
