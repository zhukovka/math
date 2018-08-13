class MathExpression extends HTMLElement {
    constructor () {
        super(); // always call super() first in the constructor.
        this.classList.add("math");
    }

    connectedCallback () {
        let html = "";
        for (const node of this.childNodes) {
            let textContent = node.textContent;
            let content = textContent.replace(/[a-z]/g, "<i>$&</i>").replace(/\s+/g, "&nbsp;");
            if(textContent.includes("/")){
                content = content.replace(/(\d*\/\d)/g, "<math-fraction>$&</math-fraction>")
            }
            if (node instanceof HTMLElement) {
                node.innerHTML = content;
                html += node.outerHTML;
            } else {
                node.textContent = content;
                html += node.textContent;
            }
        }
        this.innerHTML = html;
    }
}

customElements.define('math-expression', MathExpression);