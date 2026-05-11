const counter = document.querySelector("#counter-bar-ext");
const counterBar = counter.querySelector("#counter-bar-int");

const basicSleepTime = 1250;
const nbrOfIncrase = 5;

function incrase () {
    let value = parseInt(counterBar.dataset.value) || 0;
    value++;
    counterBar.dataset.value = value;
    counterBar.style.width = (value * 0.75 * window.innerWidth / nbrOfIncrase) + "px";
}

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const runIncrements = async () => {
    for (let i = 0; i < nbrOfIncrase; i++) {
        await sleep(basicSleepTime) * (Math.random() + 0.5);
        incrase();
    }
};

function printAlert () {
    document.querySelector("#counter-text").remove();
    document.querySelector("#counter-bar-ext").remove();

    let text = "";

    if (confirm("Votre appareil a été piraté. Voulez-vous activer la protection anti-virus ?")) {
        text = "Haha, j'ai réussi à vous faire appuyer sur le bouton !\n\nVous avez de la chance que je ne sois pas un vrai pirate informatique, sans quoi toutes vos données auraient déjà été volées !";
    } else {
        text = "Vous n'avez pas cliqué ? Me voilà étonné.\n\nDans tous les cas, sachez que votre appareil n'a pas été piraté.\n\nCependant, j'ai tout de même réussi à vous envoyer sur ce site web sans que vous n'ayez eu votre mot à dire.";
    }

    const h1 = document.createElement("h1");
    document.body.appendChild(h1);
    h1.innerText = text;

    const separateur = document.createElement("div");
    separateur.style.height = "75vh";
    document.body.appendChild(separateur);

    const p = document.createElement("p");
    document.body.appendChild(p);
    p.innerText = "";
}

runIncrements().then(() => setTimeout(printAlert, 2009));