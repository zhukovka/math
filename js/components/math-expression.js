class MathExpression extends HTMLElement {
    constructor() {
        super(); // always call super() first in the constructor.
        this.classList.add("math");
    }
    connectedCallback() {
        const html = this.innerHTML;
        this.innerHTML = html.replace(/[a-z]/g, "<i>$&</i>");
    }
}

customElements.define('math-expression', MathExpression);