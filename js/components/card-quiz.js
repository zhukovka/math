import CardElement from './card';

const style = document.createElement('template');
style.innerHTML = `
<style>
    .card__face {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    
</style>
`;

class CardQuiz extends CardElement {
    constructor () {
        super();
        this.shadowRoot.appendChild(style.content.cloneNode(true));
        const checkButton = document.createElement("button");
        checkButton.className = "check";
        checkButton.textContent = "Check";
        this.appendChild(checkButton);
    }

    connectedCallback () {
        console.log("card-quiz", this.shadowRoot.querySelectorAll("label"))
    }

    set correct (yes) {
        const options = this.querySelector("quiz-options, quiz-input");
        if (options) options.correct = yes
    }

    get answer () {
        const options = this.querySelector("quiz-options, quiz-input");
        return options ? {key: options.name, value: options.value} : {};
    }
}

customElements.define('card-quiz', CardQuiz);