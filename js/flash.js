const template = document.getElementById("cards");
const clone = document.importNode(template.content, true);
const container = document.getElementById("cardContainer");
const nextCard = document.getElementById("nextCard");
const flipCard = document.getElementById("flipCard");

let cards = [...clone.querySelectorAll(".card")];
let currentIndex = 0;

flipCard.addEventListener("click", (e) => {
    const card = container.querySelector(".card");
    if (card) {
        const sides = card.children;
        for (const side of sides) {
            side.classList.toggle("hidden");
        }
    }
});

nextCard.addEventListener("click", (e) => {
    currentIndex++;
    displayCard(currentIndex % cards.length);
});

function displayCard (index) {
    if (cards[index]) {
        container.innerHTML = cards[index].outerHTML;
    }
}

function shuffleCards () {
    let shuffledCards = [];
    while (cards.length) {
        let i = Math.random() * (cards.length - 1) | 0;
        let splice = cards.splice(i, 1);
        shuffledCards.push(splice[0]);
    }
    cards = shuffledCards;
}

shuffleCards();
displayCard(0);
