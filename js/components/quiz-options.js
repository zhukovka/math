const style = document.createElement('template');
style.innerHTML = `
<style>
    :host {
        --options-width: 100%;
        display: flex;
        /*flex: 1;*/
        width: var(--options-width);
        align-self: center;
    }
    
    .options{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        list-style: none;
        padding: 0;
        margin: 0;
    }
    
    /* Landscape */
    @media only screen 
      and (min-device-width: 320px) 
      and (max-device-width: 812px)
      and (-webkit-min-device-pixel-ratio: 2)
      and (orientation: landscape) {
        .options{
            flex-direction: row;
        }
        .options > li {
            margin: 0 5px;
        }
    }
    
    @media only screen and (min-width : 768px){
          :host {
            --options-width: 70%;
          }
    }
    .options > li {
        margin-bottom: 10px;
        flex: 1;
        display: flex;
    }
    label {
        display: flex;
        align-items: center;
        flex: 1;
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
        position: absolute;
    }
    
    input[type=radio]:checked ~ label{
        background: #275345;
        color: #e8e2ca;
    }
    
    label:after {
        position: absolute;
        right: 0;
        top: -5px;
        font-size: 3rem;
        z-index: 999;
        line-height: 1;
    }
    
    label[correct=true]:after{
        content: '✔︎';
        color: #00bb00;
    }
    label[correct=false]:after{
        content: '✘';
        color: red;
    }
    
</style>
<ul class="options">

</ul>
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
            return `<li><input type="radio" name="${name}" id="${id}" value="${option}"><label for="${id}">${option}</label></li>`
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