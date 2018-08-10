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
        /*The perspective CSS property determines the
        distance between the z=0 plane and the user
        in order to give a 3D-positioned element some perspective.*/
        perspective: calc(var(--card-width) * 4);
        z-index: 1;
    }

    .card__container {
        width: 100%;
        height: 100%;
        position: relative;
        transition: transform 1s;
        /*Indicates that the children of the element should be positioned in the 3D-space.*/
        transform-style: preserve-3d;
        box-shadow: 1px 1px 0 #83cde2;
    }

    .card__shadow {
        box-shadow: var(--card-shadow);
        position: absolute;
        height: 90%;
        width: 90%;
        transition: transform 1s;
        background: rgba(0, 0, 0, 0.2);
        z-index: 0;
    }

    .card__face {
        position: absolute;
        height: 100%;
        width: 100%;
        backface-visibility: hidden;
        background: var(--card-face);
        color: var(--card-text);
        box-sizing: border-box;
        padding: 20px;
    }

    .card__face--back {
        transform: rotateY(180deg);
    }

    .card.is-flipped > .card__container {
        transform: rotateY(180deg);
    }

    .card.is-flipped ~ .card__shadow {
        transform: rotateY(180deg);
    }
    </style>
    <div class="container">
        <div class="scene">
            <div class="card">
                <div class="card__container">
                    <div class="card__face card__face--front">
                        <slot name="front"></slot>
                    </div>
                    <div class="card__face card__face--back">
                        <slot name="back"></slot>
                    </div>
                </div>
            </div>
            <div class="card__shadow"></div>
        </div>
    </div>
  `;

class CardFlip extends HTMLElement {
    constructor () {
        super();
        this._onSlotChange = this._onSlotChange.bind(this);
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        this.card = this.shadowRoot.querySelector(".card");
        this._frontSlot = this.shadowRoot.querySelector('slot[name=front]');
        this._backSlot = this.shadowRoot.querySelector('slot[name=back]');
        this._frontSlot.addEventListener('slotchange', this._onSlotChange);
        this._backSlot.addEventListener('slotchange', this._onSlotChange);
    }

    _onSlotChange () {

    };

    connectedCallback () {
        this.addEventListener('click', () => {
            this.onClick();
        });
    }

    onClick () {
        this.card.classList.toggle("is-flipped");
    }

}

customElements.define('card-flip', CardFlip);