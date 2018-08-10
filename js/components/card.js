const template = document.createElement('template');
template.innerHTML = `
    <style>
      :host {
        display: flex;
        flex-wrap: wrap;
        /*The contain CSS property allows an author 
        to indicate that an element and its contents are, 
        as much as possible, independent of the rest of the document tree.*/
        contain: content;
        --background:#78C7DE;
        --card-face: #A4DBEA;
        --card-text: #293132;
        --container-width: 100vw;
        --container-height: 100vh;
        --card-width: 250px;
        --card-height: 460px;
        --card-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1), -20px 20px 20px rgba(0, 0, 0, 0.1);
      }
    .container {
        width: var(--container-width);
        height: var(--container-height);

        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--background);
    }

    .scene {
        width: var(--card-width);
        height: var(--card-height);
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .card{
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    .card__container {
        width: 100%;
        height: 100%;
        position: relative;
        box-shadow: 1px 1px 0 #83cde2;
    }

    .card__shadow {
        box-shadow: var(--card-shadow);
        position: absolute;
        height: 90%;
        width: 90%;
        background: rgba(0, 0, 0, 0.2);
        z-index: 0;
    }

    </style>
    <div class="container">
        <div class="scene">
            <div class="card">
                <div class="card__container">
                    <slot></slot>
                </div>
            </div>
            <div class="card__shadow"></div>
        </div>
    </div>
  `;

class CardElement extends HTMLElement {
    constructor () {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this._cardContainer = this.shadowRoot.querySelector(".card__container");
        this.card = this.shadowRoot.querySelector(".card");
    }

    connectedCallback () {
        this.addEventListener('click', () => {
            this.onClick();
        });
    }

    onClick () {
    }

}

customElements.define('a-card', CardElement);

export default CardElement;