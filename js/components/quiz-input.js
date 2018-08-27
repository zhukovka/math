const style = document.createElement('template');
style.innerHTML = `
<style>
    :host {
        --underline: #275345;
    }
    input {
        font-family: inherit;
        font-size: inherit;
        font-style: italic;
        background: transparent;
        border: none;
        border-bottom: 1px solid rgba(0,0,0,0.3);
        line-height: 1;
        -webkit-appearance: none;
        padding: 0;
        box-shadow: none;
        border-radius: 0;
    }
    input:focus {
        outline: none;
        /*border-width: 2px;*/
    }
    span {
        position: relative;
    }
    label {
        position: absolute;
        left: 0;
        bottom: -5px;
        height: 1px;
        width: 100%;
        transform: scale(0);
        transition: transform 0.3s;
    }
    input:focus ~ label {
        height: 2px;
        background: var(--underline);
        transform: scale(1);
    }
    span.correct:after{
        content: '✔︎';
    }
    span.wrong:after{
        content: '✘';
        color: red;
    }
</style>
<span>
    <input type="text" id="answer">
    <label for="answer" aria-label="answer"></label>
</span>
`;
class QuizInput extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(style.content.cloneNode(true));
        this._input = this.shadowRoot.querySelector("input");
        this._input.name = this.getAttribute("name") || "quiz-input";
        this._input.size = this.getAttribute("size") || "5";
        this._input.addEventListener("keydown", e => {
            e.stopPropagation()
        })
    }

    set correct (yes) {
        // const prevChecked = this.shadowRoot.querySelector("label[correct]");
        // if (prevChecked) {
        //     prevChecked.removeAttribute("correct");
        // }

        const checked = this.shadowRoot.querySelector("span");
        checked.className = yes ? "correct" : "wrong";
        // if (checked) {
        //     checked.setAttribute("correct", `${yes}`);
        // }
    }

    get name () {
        return this.getAttribute("name") || "quiz-input";
    }

    get value () {
        return this._input.value;
    }
}

customElements.define('quiz-input', QuizInput);