import CardElement from './card';

const style = document.createElement('template');
style.innerHTML = `
    <style>
    .card{
        perspective: calc(var(--card-width) * 4);
    }
    
    .card__container {
        transition: transform 1s;
        /*Indicates that the children of the element should be positioned in the 3D-space.*/
        transform-style: preserve-3d;
    }

    .card__shadow {
        transition: transform 1s;
        z-index: 0;
        /*Safari workaround*/
        transform: translateZ(-1000px);
    }
    
    .card__face {
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
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
    ::slotted(*) {
      height: 100%;
      width: 100%;
    }
    </style>    
  `;

const template = document.createElement('template');
template.innerHTML = `
<div class="card__face card__face--front">
    <slot name="front"></slot>
</div>
<div class="card__face card__face--back">
    <slot name="back"></slot>
</div>
`;

class CardFlip extends CardElement {
    constructor () {
        super();

        this.shadowRoot.appendChild(style.content.cloneNode(true));
        //parentNode.replaceChild(newChild, oldChild);
        this._cardContainer.replaceChild(template.content.cloneNode(true), this._cardContainer.firstElementChild)
    }

    onClick () {
        this.card.classList.toggle("is-flipped");
    }

}

customElements.define('card-flip', CardFlip);