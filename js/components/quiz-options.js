const style = document.createElement('template');
style.innerHTML = `
<style>
    :host {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        align-self: center;
    }
    p {
        line-height: 1;
        
    }
    label {
        display: flex;
        background: #e8e2ca;
        color: #275345; 
        justify-content: center;
        padding: 1rem;
        text-transform: capitalize;
        position: relative;
        /*margin-bottom: 2rem;*/
    }

    input[type=radio]{
        width: 0;
        height: 0;
        margin: 0;
        visibility: hidden;
    }
    
    input[type=radio]:checked ~ label{
        background: #275345;
        color: #e8e2ca;
    }
    
    label:after {
        position: absolute;
        right: -45px;
        top: -5px;
        font-size: 3rem;
        color: #e8e2ca;
    }
    
    label[correct=true]:after{
        content: '✔︎';
    }
    label[correct=false]:after{
        content: '✘';
    }
    
</style>
<div class="options">

</div>

`;

class QuizOptions extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(style.content.cloneNode(true));
        this._options = this.shadowRoot.querySelector(".options");
        const name = this.getAttribute("name") || "quiz-option";
        const options = this.getAttribute("options") || "";
        this._options.innerHTML = options.split(",").map((option, i) => {
            const id = `${name}${option.replace(/\s/g, "")}`;
            return `<p><input type="radio" name="${name}" id="${id}" value="${option}"><label for="${id}">${option}</label></p>`
        }).join("");
    }

    set correct (yes) {
        const prevChecked = this.shadowRoot.querySelector("label[correct]");
        if (prevChecked) {
            prevChecked.removeAttribute("correct");
        }

        const checked = this.shadowRoot.querySelector("input[type=radio]:checked ~ label");
        if (checked) {
            checked.setAttribute("correct", `${yes}`);
        }
    }

    get name () {
        return this.getAttribute("name") || "quiz-option";
    }

    get value () {
        const input = this._options.querySelector("input:checked");
        return input && input.value;
    }
}

customElements.define('quiz-options', QuizOptions);