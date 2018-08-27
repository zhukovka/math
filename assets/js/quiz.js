/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/quiz.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/cards.js":
/*!*********************!*\
  !*** ./js/cards.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card */ "./js/components/card.js");
/* harmony import */ var _components_card_flip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card-flip */ "./js/components/card-flip.js");
/* harmony import */ var _components_card_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/card-container */ "./js/components/card-container.js");
/* harmony import */ var _components_math_expression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/math-expression */ "./js/components/math-expression.js");
/* harmony import */ var _components_math_expression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_math_expression__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_math_fraction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/math-fraction */ "./js/components/math-fraction.js");
/* harmony import */ var _components_math_fraction__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_math_fraction__WEBPACK_IMPORTED_MODULE_4__);






/***/ }),

/***/ "./js/components/card-container.js":
/*!*****************************************!*\
  !*** ./js/components/card-container.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./js/utils.js");


const KEYCODE = {
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    HOME: 36,
    END: 35,
    SPACE: 32
};
const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
        --container-height: 100%;
        --indicator-size: 2vw;
        --indicator-color: rgba(255,255,255,0.3);
        --active-indicator: white;
        display: block;
        width: 100%;
        height: var(--container-height);
        overflow: hidden;
    }
    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 768px) {
        /* Styles */
        :host {
           --indicator-size: 1vw;
        }
    }
    @media only screen  and (min-width : 1400px) {
        /* Styles */
        :host {
           --indicator-size: 0.5vw;
        }
    }
    .container {
        --n: 1;
        --i: 0;
        display: flex;
        align-items: center;
        overflow-y: hidden;
        width: calc(var(--n) * 100%);
        height: var(--container-height);
        transform: translate(calc(var(--i) / var(--n) * -100%));
        transition: transform .5s ease-out;
    }
    .indicators{
        position: fixed;
        top: 0;
        width: 100%;
        height: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        margin: 0;
        z-index: 999;
        list-style: none;
    }
    
    .indicator{
        width: var(--indicator-size);
        height: var(--indicator-size);
        background: var(--indicator-color);
        border-radius: 50%;
        margin: 5px;
    }
    
    
    .controls {
        position: fixed;
        top: 0;
        height: 100%;
        width: 10%;
    }
    
    .controls:after{
        position: absolute;
        bottom: 20px;
        width: 0;
        height: 0;
        border: 10px solid transparent;
        border-left-color: white;
        border-bottom-color: white;
    }

    #prev {
        left: 0;
    }
    
    #prev:after{
        content: '';
        left: 30%;
        transform: rotate(45deg);
    }
    
    #next {
        right: 0;
    }
    
    #next:after{
        content: '';
        transform: rotate(-135deg);
        right: 30%;
    }
    
    label[for="shuffle"]{
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
    }    
</style>
<ul class="indicators">
    
</ul>
<div class="container">
    <slot></slot>
</div>
<div id="prev" class="controls">
</div>
<div id="next" class="controls">
</div>

<label for="shuffle">
    <input type="checkbox"  id="shuffle">
    Shuffle
</label>
`;

class CardContainer extends HTMLElement {
    constructor () {
        super();
        this._onKeyDown = this._onKeyDown.bind(this);
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shuffle = false;
    }

    set currentCard (i) {
        if (i === this._currentCard) {
            return
        }
        const container = this.shadowRoot.querySelector('.container'),
            indicators = this.shadowRoot.querySelectorAll('.indicator');

        indicators[i].style.setProperty('--indicator-color', 'var(--active-indicator)');

        let indicator = indicators[this._currentCard];
        if (indicator) {
            indicator.style.removeProperty('--indicator-color');
        }


        container.style.setProperty('--i', i);
        this._currentCard = i;
    }

    get card(){
        const cards = this._getCards();
        return cards[this._currentCard];
    }

    connectedCallback () {
        if (!this.hasAttribute('tabindex'))
            this.setAttribute('tabindex', '0');


        const container = this.shadowRoot.querySelector('.container'),
            indicators = this.shadowRoot.querySelector('.indicators'),
            next = this.shadowRoot.querySelector('#next'),
            prev = this.shadowRoot.querySelector('#prev'),
            shuffleBtn = this.shadowRoot.querySelector('#shuffle'),
            cards = this._getCards(),
            N = cards && cards.length;

        container.style.setProperty('--n', N);

        indicators.innerHTML = [...(new Array(N))].map(n => {
            return `<li class="indicator"></li>`;
        }).join('');

        this.currentCard = 0;
        next.addEventListener('click', e => {
            this.currentCard = this._onKeyDown(KEYCODE.RIGHT, N);
        });
        prev.addEventListener('click', e => {
            this.currentCard = this._onKeyDown(KEYCODE.LEFT, N);
        });
        this.addEventListener('keydown', e => {
            this.currentCard = this._onKeyDown(e.keyCode, N);
        });
        shuffleBtn.addEventListener('change', e => {
            this.shuffle = !this.shuffle;
        });
    }

    _getCards () {
        const slot = this.shadowRoot.querySelector('slot');
        return slot && slot.assignedNodes().filter(n => n instanceof HTMLElement);
    }

    _onKeyDown (keyCode, N) {
        let i = this._currentCard;
        switch (keyCode) {
            case KEYCODE.LEFT:
                i = this.shuffle ? (Math.random() * N) | 0 : (N + --i) % N;
                break;
            case KEYCODE.RIGHT:
                i = this.shuffle ? (Math.random() * N) | 0 : (++i) % N ;
                break;
            case KEYCODE.SPACE:
                const cards = this._getCards();
                cards[i].onClick();
                break;
        }

        return i;
    }

}

customElements.define('card-container', CardContainer);

/***/ }),

/***/ "./js/components/card-flip.js":
/*!************************************!*\
  !*** ./js/components/card-flip.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./js/components/card.js");


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

class CardFlip extends _card__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ "./js/components/card-quiz.js":
/*!************************************!*\
  !*** ./js/components/card-quiz.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./js/components/card.js");


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

class CardQuiz extends _card__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

/***/ }),

/***/ "./js/components/card.js":
/*!*******************************!*\
  !*** ./js/components/card.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const style = document.createElement('template');
style.innerHTML = `
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
        
        --container-width: 100%;
        --container-height: 100%;
        --card-width: 80%;
        --card-height: 80%;
        --shadow-x: calc(var(--card-width) * 0.075);
        --card-shadow:  var(--shadow-x) var(--shadow-x) 20px rgba(0, 0, 0, 0.1), calc( -1 * var(--shadow-x)) var(--shadow-x) 20px rgba(0, 0, 0, 0.1);
        width: var(--container-width);
        height: var(--container-height)
      }
    
    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 768px) and (min-height : 400px) {
        /* Styles */
        :host {
           --card-width: 50%;
           --card-height: 50%;
           --shadow-x: calc(var(--card-width) * 0.075);
           --card-shadow:  var(--shadow-x) var(--shadow-x) 20px rgba(0, 0, 0, 0.1), calc( -1 * var(--shadow-x)) var(--shadow-x) 20px rgba(0, 0, 0, 0.1);
        }
    }
    @media only screen  and (min-width : 1200px) {
        /* Styles */
        :host {
           --card-width: 40%;
           --card-height: 40%;
           --shadow-x: calc(var(--card-width) * 0.075);
           --card-shadow:  var(--shadow-x) var(--shadow-x) 20px rgba(0, 0, 0, 0.1), calc( -1 * var(--shadow-x)) var(--shadow-x) 20px rgba(0, 0, 0, 0.1);
        }
    }
    
    :host(.green) {
        --background: #488e5e;
        --card-face: #66b27e;
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
        /*box-shadow: 1px 1px 0 #83cde2;*/
    }

    .card__shadow {
        box-shadow: var(--card-shadow);
        position: absolute;
        height: 90%;
        width: 90%;
        background: rgba(0, 0, 0, 0.2);
        z-index: 0;
    }
    
    .card__face {
        position: absolute;
        height: 100%;
        width: 100%;
        background: var(--card-face);
        color: var(--card-text);
        box-sizing: border-box;
        padding: 20px;
    }
    
    </style>
`;
const template = document.createElement('template');
template.innerHTML = `
    <div class="container">
        <div class="scene">
            <div class="card">
                <div class="card__container">
                    <div class="card__face">
                        <slot></slot>
                    </div>
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
        this.shadowRoot.appendChild(style.content.cloneNode(true));
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

/* harmony default export */ __webpack_exports__["default"] = (CardElement);

/***/ }),

/***/ "./js/components/math-expression.js":
/*!******************************************!*\
  !*** ./js/components/math-expression.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/components/math-fraction.js":
/*!****************************************!*\
  !*** ./js/components/math-fraction.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

class MathFraction extends HTMLElement {
    constructor () {
        super(); // always call super() first in the constructor.
    }

    connectedCallback () {
        const content = this.textContent;
        let [numerator, denominator] = content.split("/");
        this.innerHTML = `<sup>${numerator}</sup><sub>${denominator}</sub>`;
    }
}

customElements.define('math-fraction', MathFraction);

/***/ }),

/***/ "./js/components/quiz-input.js":
/*!*************************************!*\
  !*** ./js/components/quiz-input.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/components/quiz-options.js":
/*!***************************************!*\
  !*** ./js/components/quiz-options.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ }),

/***/ "./js/quiz.js":
/*!********************!*\
  !*** ./js/quiz.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./js/cards.js");
/* harmony import */ var _components_card_quiz__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card-quiz */ "./js/components/card-quiz.js");
/* harmony import */ var _components_quiz_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/quiz-options */ "./js/components/quiz-options.js");
/* harmony import */ var _components_quiz_options__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_quiz_options__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_quiz_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/quiz-input */ "./js/components/quiz-input.js");
/* harmony import */ var _components_quiz_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_quiz_input__WEBPACK_IMPORTED_MODULE_3__);





async function loadAnswers () {
    const answers = await fetch("./a.json").then(r => r.json());
    const quizForm = document.forms["quiz"];
    const results = document.getElementById("results");
    const explain = document.getElementById("explain");

    if (quizForm && results) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault();
            let correct = 0;
            const keys = Object.keys(answers);
            for (const k of keys) {
                let input = quizForm.elements[k];
                let answer = answers[k];
                if (input && input.value.toLowerCase() === answer) {
                    input.className = "correct";
                    correct++;
                }
            }
            results.innerHTML = `${correct} out of ${keys.length} correct`;
            if (explain) {
                explain.style.removeProperty("display");
            }
        })
    }

    const quizCards = document.querySelectorAll("card-quiz");

    if (quizCards.length) {
        for (const card of quizCards) {

            card.addEventListener("click", e => {
                if (e.target.classList.contains("check")) {
                    let {key, value} = card.answer;
                    card.correct = !!value && !!answers[key] && checkAnswer(value, answers[key]);
                }
            });
        }
    }

    if (explain) {

        explain.addEventListener("click", e => {
            const explanations = document.querySelectorAll(".explanation");
            for (const explanation of explanations) {
                explanation.style.removeProperty("display");
            }
        });
    }

}

function checkAnswer (answer, solution) {
    answer = answer.replace(/\s/g, "").toLowerCase();
    solution = solution.replace(/\s/g, "").toLowerCase();
    return answer === solution;
}

function shuffle (array) {
    let shuffledArray = [];
    while (array.length) {
        let i = Math.random() * (array.length) | 0;
        let splice = array.splice(i, 1);
        shuffledArray.push(splice[0]);
    }
    return shuffledArray;
}

function shuffleQuestions (questionLists) {
    for (const questions of questionLists) {
        const q = shuffle([...questions.children]);
        const fragment = document.createDocumentFragment();
        questions.innerHTML = "";
        for (const el of q) {
            fragment.appendChild(el);
        }
        questions.appendChild(fragment);
    }

}

const questionsTemplate = document.getElementById("questionsTemplate");
if (questionsTemplate) {
    const cloneTemplate = document.importNode(questionsTemplate.content, true);
    const questionLists = cloneTemplate.querySelectorAll(".questions");
    shuffleQuestions(questionLists);
    const questionContainers = document.querySelectorAll(".questionsContainer");
    for (let i = 0; i < questionContainers.length; i++) {
        const container = questionContainers[i];
        container.appendChild(questionLists[i]);
    }
}
loadAnswers();


/***/ }),

/***/ "./js/utils.js":
/*!*********************!*\
  !*** ./js/utils.js ***!
  \*********************/
/*! exports provided: shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
function shuffle (array) {
    let shuffledArray = [];
    while (array.length) {
        let i = Math.random() * (array.length) | 0;
        let splice = array.splice(i, 1);
        shuffledArray.push(splice[0]);
    }
    return shuffledArray;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtcXVpei5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWV4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvcXVpei1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL3F1aXotb3B0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9qcy9xdWl6LmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSGdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVEOzs7Ozs7Ozs7Ozs7OztBQ2hPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7Ozs7QUNyRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQix3Q0FBd0M7QUFDbEU7QUFDQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7O0FDdkNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0RTs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RDs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxhQUFhLFlBQVk7QUFDcEU7QUFDQTs7QUFFQSxxRDs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsSUFBSTtBQUN0RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQzs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEtBQUssRUFBRSwwQkFBMEI7QUFDM0Qsb0RBQW9ELEtBQUssUUFBUSxHQUFHLFdBQVcsT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLE9BQU87QUFDcEgsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRLFVBQVUsWUFBWTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvcXVpei5qc1wiKTtcbiIsImltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkLWZsaXBcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtY29udGFpbmVyXCJcbmltcG9ydCAnLi9jb21wb25lbnRzL21hdGgtZXhwcmVzc2lvbic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uJzsiLCJpbXBvcnQge3NodWZmbGV9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgS0VZQ09ERSA9IHtcbiAgICBET1dOOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBSSUdIVDogMzksXG4gICAgVVA6IDM4LFxuICAgIEhPTUU6IDM2LFxuICAgIEVORDogMzUsXG4gICAgU1BBQ0U6IDMyXG59O1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgICAgLS1jb250YWluZXItaGVpZ2h0OiAxMDAlO1xuICAgICAgICAtLWluZGljYXRvci1zaXplOiAydnc7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgICAgIC0tYWN0aXZlLWluZGljYXRvcjogd2hpdGU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jb250YWluZXItaGVpZ2h0KTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG4gICAgLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoIDogNzY4cHgpIHtcbiAgICAgICAgLyogU3R5bGVzICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgLS1pbmRpY2F0b3Itc2l6ZTogMXZ3O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiAxNDAwcHgpIHtcbiAgICAgICAgLyogU3R5bGVzICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgLS1pbmRpY2F0b3Itc2l6ZTogMC41dnc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIC0tbjogMTtcbiAgICAgICAgLS1pOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLW4pICogMTAwJSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGModmFyKC0taSkgLyB2YXIoLS1uKSAqIC0xMDAlKSk7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuNXMgZWFzZS1vdXQ7XG4gICAgfVxuICAgIC5pbmRpY2F0b3Jze1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTB2aDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgei1pbmRleDogOTk5O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuaW5kaWNhdG9ye1xuICAgICAgICB3aWR0aDogdmFyKC0taW5kaWNhdG9yLXNpemUpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWluZGljYXRvci1zaXplKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW5kaWNhdG9yLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IDVweDtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLmNvbnRyb2xzIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRyb2xzOmFmdGVye1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHdoaXRlO1xuICAgIH1cblxuICAgICNwcmV2IHtcbiAgICAgICAgbGVmdDogMDtcbiAgICB9XG4gICAgXG4gICAgI3ByZXY6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBsZWZ0OiAzMCU7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgXG4gICAgI25leHQge1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG4gICAgXG4gICAgI25leHQ6YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcbiAgICAgICAgcmlnaHQ6IDMwJTtcbiAgICB9XG4gICAgXG4gICAgbGFiZWxbZm9yPVwic2h1ZmZsZVwiXXtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIH0gICAgXG48L3N0eWxlPlxuPHVsIGNsYXNzPVwiaW5kaWNhdG9yc1wiPlxuICAgIFxuPC91bD5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG48L2Rpdj5cbjxkaXYgaWQ9XCJwcmV2XCIgY2xhc3M9XCJjb250cm9sc1wiPlxuPC9kaXY+XG48ZGl2IGlkPVwibmV4dFwiIGNsYXNzPVwiY29udHJvbHNcIj5cbjwvZGl2PlxuXG48bGFiZWwgZm9yPVwic2h1ZmZsZVwiPlxuICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiAgaWQ9XCJzaHVmZmxlXCI+XG4gICAgU2h1ZmZsZVxuPC9sYWJlbD5cbmA7XG5cbmNsYXNzIENhcmRDb250YWluZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9vbktleURvd24gPSB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB0aGlzLnNodWZmbGUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBzZXQgY3VycmVudENhcmQgKGkpIHtcbiAgICAgICAgaWYgKGkgPT09IHRoaXMuX2N1cnJlbnRDYXJkKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgaW5kaWNhdG9ycyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuaW5kaWNhdG9yJyk7XG5cbiAgICAgICAgaW5kaWNhdG9yc1tpXS5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pbmRpY2F0b3ItY29sb3InLCAndmFyKC0tYWN0aXZlLWluZGljYXRvciknKTtcblxuICAgICAgICBsZXQgaW5kaWNhdG9yID0gaW5kaWNhdG9yc1t0aGlzLl9jdXJyZW50Q2FyZF07XG4gICAgICAgIGlmIChpbmRpY2F0b3IpIHtcbiAgICAgICAgICAgIGluZGljYXRvci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnLS1pbmRpY2F0b3ItY29sb3InKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLWknLCBpKTtcbiAgICAgICAgdGhpcy5fY3VycmVudENhcmQgPSBpO1xuICAgIH1cblxuICAgIGdldCBjYXJkKCl7XG4gICAgICAgIGNvbnN0IGNhcmRzID0gdGhpcy5fZ2V0Q2FyZHMoKTtcbiAgICAgICAgcmV0dXJuIGNhcmRzW3RoaXMuX2N1cnJlbnRDYXJkXTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgICAgICAgICAgIGluZGljYXRvcnMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmluZGljYXRvcnMnKSxcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI25leHQnKSxcbiAgICAgICAgICAgIHByZXYgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3ByZXYnKSxcbiAgICAgICAgICAgIHNodWZmbGVCdG4gPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3NodWZmbGUnKSxcbiAgICAgICAgICAgIGNhcmRzID0gdGhpcy5fZ2V0Q2FyZHMoKSxcbiAgICAgICAgICAgIE4gPSBjYXJkcyAmJiBjYXJkcy5sZW5ndGg7XG5cbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLW4nLCBOKTtcblxuICAgICAgICBpbmRpY2F0b3JzLmlubmVySFRNTCA9IFsuLi4obmV3IEFycmF5KE4pKV0ubWFwKG4gPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGA8bGkgY2xhc3M9XCJpbmRpY2F0b3JcIj48L2xpPmA7XG4gICAgICAgIH0pLmpvaW4oJycpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudENhcmQgPSAwO1xuICAgICAgICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gdGhpcy5fb25LZXlEb3duKEtFWUNPREUuUklHSFQsIE4pO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IHRoaXMuX29uS2V5RG93bihLRVlDT0RFLkxFRlQsIE4pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gdGhpcy5fb25LZXlEb3duKGUua2V5Q29kZSwgTik7XG4gICAgICAgIH0pO1xuICAgICAgICBzaHVmZmxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5zaHVmZmxlID0gIXRoaXMuc2h1ZmZsZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldENhcmRzICgpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XG4gICAgICAgIHJldHVybiBzbG90ICYmIHNsb3QuYXNzaWduZWROb2RlcygpLmZpbHRlcihuID0+IG4gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCk7XG4gICAgfVxuXG4gICAgX29uS2V5RG93biAoa2V5Q29kZSwgTikge1xuICAgICAgICBsZXQgaSA9IHRoaXMuX2N1cnJlbnRDYXJkO1xuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5MRUZUOlxuICAgICAgICAgICAgICAgIGkgPSB0aGlzLnNodWZmbGUgPyAoTWF0aC5yYW5kb20oKSAqIE4pIHwgMCA6IChOICsgLS1pKSAlIE47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuUklHSFQ6XG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuc2h1ZmZsZSA/IChNYXRoLnJhbmRvbSgpICogTikgfCAwIDogKCsraSkgJSBOIDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5TUEFDRTpcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2dldENhcmRzKCk7XG4gICAgICAgICAgICAgICAgY2FyZHNbaV0ub25DbGljaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGk7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2FyZC1jb250YWluZXInLCBDYXJkQ29udGFpbmVyKTsiLCJpbXBvcnQgQ2FyZEVsZW1lbnQgZnJvbSAnLi9jYXJkJztcblxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuc3R5bGUuaW5uZXJIVE1MID0gYFxuICAgIDxzdHlsZT5cbiAgICAuY2FyZHtcbiAgICAgICAgcGVyc3BlY3RpdmU6IGNhbGModmFyKC0tY2FyZC13aWR0aCkgKiA0KTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmRfX2NvbnRhaW5lciB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgLypJbmRpY2F0ZXMgdGhhdCB0aGUgY2hpbGRyZW4gb2YgdGhlIGVsZW1lbnQgc2hvdWxkIGJlIHBvc2l0aW9uZWQgaW4gdGhlIDNELXNwYWNlLiovXG4gICAgICAgIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gICAgfVxuXG4gICAgLmNhcmRfX3NoYWRvdyB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxcztcbiAgICAgICAgei1pbmRleDogMDtcbiAgICAgICAgLypTYWZhcmkgd29ya2Fyb3VuZCovXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigtMTAwMHB4KTtcbiAgICB9XG4gICAgXG4gICAgLmNhcmRfX2ZhY2Uge1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgICAuY2FyZF9fZmFjZS0tYmFjayB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5jYXJkLmlzLWZsaXBwZWQgPiAuY2FyZF9fY29udGFpbmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmNhcmQuaXMtZmxpcHBlZCB+IC5jYXJkX19zaGFkb3cge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG4gICAgOjpzbG90dGVkKCopIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgICA8L3N0eWxlPiAgICBcbiAgYDtcblxuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuPGRpdiBjbGFzcz1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tZnJvbnRcIj5cbiAgICA8c2xvdCBuYW1lPVwiZnJvbnRcIj48L3Nsb3Q+XG48L2Rpdj5cbjxkaXYgY2xhc3M9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWJhY2tcIj5cbiAgICA8c2xvdCBuYW1lPVwiYmFja1wiPjwvc2xvdD5cbjwvZGl2PlxuYDtcblxuY2xhc3MgQ2FyZEZsaXAgZXh0ZW5kcyBDYXJkRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIC8vcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Q2hpbGQsIG9sZENoaWxkKTtcbiAgICAgICAgdGhpcy5fY2FyZENvbnRhaW5lci5yZXBsYWNlQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSksIHRoaXMuX2NhcmRDb250YWluZXIuZmlyc3RFbGVtZW50Q2hpbGQpXG4gICAgfVxuXG4gICAgb25DbGljayAoKSB7XG4gICAgICAgIHRoaXMuY2FyZC5jbGFzc0xpc3QudG9nZ2xlKFwiaXMtZmxpcHBlZFwiKTtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLWZsaXAnLCBDYXJkRmxpcCk7IiwiaW1wb3J0IENhcmRFbGVtZW50IGZyb20gJy4vY2FyZCc7XG5cbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbjxzdHlsZT5cbiAgICAuY2FyZF9fZmFjZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgXG48L3N0eWxlPlxuYDtcblxuY2xhc3MgQ2FyZFF1aXogZXh0ZW5kcyBDYXJkRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBjb25zdCBjaGVja0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIGNoZWNrQnV0dG9uLmNsYXNzTmFtZSA9IFwiY2hlY2tcIjtcbiAgICAgICAgY2hlY2tCdXR0b24udGV4dENvbnRlbnQgPSBcIkNoZWNrXCI7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoY2hlY2tCdXR0b24pO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjYXJkLXF1aXpcIiwgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoXCJsYWJlbFwiKSlcbiAgICB9XG5cbiAgICBzZXQgY29ycmVjdCAoeWVzKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJxdWl6LW9wdGlvbnMsIHF1aXotaW5wdXRcIik7XG4gICAgICAgIGlmIChvcHRpb25zKSBvcHRpb25zLmNvcnJlY3QgPSB5ZXNcbiAgICB9XG5cbiAgICBnZXQgYW5zd2VyICgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucXVlcnlTZWxlY3RvcihcInF1aXotb3B0aW9ucywgcXVpei1pbnB1dFwiKTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMgPyB7a2V5OiBvcHRpb25zLm5hbWUsIHZhbHVlOiBvcHRpb25zLnZhbHVlfSA6IHt9O1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLXF1aXonLCBDYXJkUXVpeik7IiwiY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuc3R5bGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC8qVGhlIGNvbnRhaW4gQ1NTIHByb3BlcnR5IGFsbG93cyBhbiBhdXRob3IgXG4gICAgICAgIHRvIGluZGljYXRlIHRoYXQgYW4gZWxlbWVudCBhbmQgaXRzIGNvbnRlbnRzIGFyZSwgXG4gICAgICAgIGFzIG11Y2ggYXMgcG9zc2libGUsIGluZGVwZW5kZW50IG9mIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudCB0cmVlLiovXG4gICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgIFxuICAgICAgICAtLWJhY2tncm91bmQ6Izc4QzdERTtcbiAgICAgICAgLS1jYXJkLWZhY2U6ICNBNERCRUE7XG4gICAgICAgIC0tY2FyZC10ZXh0OiAjMjkzMTMyO1xuICAgICAgICBcbiAgICAgICAgLS1jb250YWluZXItd2lkdGg6IDEwMCU7XG4gICAgICAgIC0tY29udGFpbmVyLWhlaWdodDogMTAwJTtcbiAgICAgICAgLS1jYXJkLXdpZHRoOiA4MCU7XG4gICAgICAgIC0tY2FyZC1oZWlnaHQ6IDgwJTtcbiAgICAgICAgLS1zaGFkb3cteDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDAuMDc1KTtcbiAgICAgICAgLS1jYXJkLXNoYWRvdzogIHZhcigtLXNoYWRvdy14KSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGNhbGMoIC0xICogdmFyKC0tc2hhZG93LXgpKSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvbnRhaW5lci1oZWlnaHQpXG4gICAgICB9XG4gICAgXG4gICAgLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoIDogNzY4cHgpIGFuZCAobWluLWhlaWdodCA6IDQwMHB4KSB7XG4gICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgIC0tY2FyZC13aWR0aDogNTAlO1xuICAgICAgICAgICAtLWNhcmQtaGVpZ2h0OiA1MCU7XG4gICAgICAgICAgIC0tc2hhZG93LXg6IGNhbGModmFyKC0tY2FyZC13aWR0aCkgKiAwLjA3NSk7XG4gICAgICAgICAgIC0tY2FyZC1zaGFkb3c6ICB2YXIoLS1zaGFkb3cteCkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBjYWxjKCAtMSAqIHZhcigtLXNoYWRvdy14KSkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiAxMjAwcHgpIHtcbiAgICAgICAgLyogU3R5bGVzICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgLS1jYXJkLXdpZHRoOiA0MCU7XG4gICAgICAgICAgIC0tY2FyZC1oZWlnaHQ6IDQwJTtcbiAgICAgICAgICAgLS1zaGFkb3cteDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDAuMDc1KTtcbiAgICAgICAgICAgLS1jYXJkLXNoYWRvdzogIHZhcigtLXNoYWRvdy14KSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGNhbGMoIC0xICogdmFyKC0tc2hhZG93LXgpKSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgOmhvc3QoLmdyZWVuKSB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIzQ4OGU1ZTtcbiAgICAgICAgLS1jYXJkLWZhY2U6ICM2NmIyN2U7XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICB3aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jb250YWluZXItaGVpZ2h0KTtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgLnNjZW5lIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNhcmQtd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNhcmQtaGVpZ2h0KTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuY2FyZHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5jYXJkX19jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIC8qYm94LXNoYWRvdzogMXB4IDFweCAwICM4M2NkZTI7Ki9cbiAgICB9XG5cbiAgICAuY2FyZF9fc2hhZG93IHtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19mYWNlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jYXJkLWZhY2UpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY2FyZC10ZXh0KTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICB9XG4gICAgXG4gICAgPC9zdHlsZT5cbmA7XG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2NlbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX3NoYWRvd1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuY2xhc3MgQ2FyZEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIHRoaXMuX2NhcmRDb250YWluZXIgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYXJkX19jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2sgKCkge1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2EtY2FyZCcsIENhcmRFbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEVsZW1lbnQ7IiwiY2xhc3MgTWF0aEV4cHJlc3Npb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpOyAvLyBhbHdheXMgY2FsbCBzdXBlcigpIGZpcnN0IGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwibWF0aFwiKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIGxldCBodG1sID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBub2RlIG9mIHRoaXMuY2hpbGROb2Rlcykge1xuICAgICAgICAgICAgbGV0IHRleHRDb250ZW50ID0gbm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGxldCBjb250ZW50ID0gdGV4dENvbnRlbnQucmVwbGFjZSgvW2Etel0vZywgXCI8aT4kJjwvaT5cIikucmVwbGFjZSgvXFxzKy9nLCBcIiZuYnNwO1wiKTtcbiAgICAgICAgICAgIGlmKHRleHRDb250ZW50LmluY2x1ZGVzKFwiL1wiKSl7XG4gICAgICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQucmVwbGFjZSgvKFxcZCpcXC9cXGQpL2csIFwiPG1hdGgtZnJhY3Rpb24+JCY8L21hdGgtZnJhY3Rpb24+XCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbm9kZS5pbm5lckhUTUwgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gbm9kZS5vdXRlckhUTUw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG5vZGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICAgICAgICAgIGh0bWwgKz0gbm9kZS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGh0bWw7XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGgtZXhwcmVzc2lvbicsIE1hdGhFeHByZXNzaW9uKTsiLCJjbGFzcyBNYXRoRnJhY3Rpb24gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpOyAvLyBhbHdheXMgY2FsbCBzdXBlcigpIGZpcnN0IGluIHRoZSBjb25zdHJ1Y3Rvci5cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLnRleHRDb250ZW50O1xuICAgICAgICBsZXQgW251bWVyYXRvciwgZGVub21pbmF0b3JdID0gY29udGVudC5zcGxpdChcIi9cIik7XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gYDxzdXA+JHtudW1lcmF0b3J9PC9zdXA+PHN1Yj4ke2Rlbm9taW5hdG9yfTwvc3ViPmA7XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ21hdGgtZnJhY3Rpb24nLCBNYXRoRnJhY3Rpb24pOyIsImNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbjxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICAgIC0tdW5kZXJsaW5lOiAjMjc1MzQ1O1xuICAgIH1cbiAgICBpbnB1dCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4zKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICB9XG4gICAgaW5wdXQ6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAvKmJvcmRlci13aWR0aDogMnB4OyovXG4gICAgfVxuICAgIHNwYW4ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IC01cHg7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3M7XG4gICAgfVxuICAgIGlucHV0OmZvY3VzIH4gbGFiZWwge1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tdW5kZXJsaW5lKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB9XG4gICAgc3Bhbi5jb3JyZWN0OmFmdGVye1xuICAgICAgICBjb250ZW50OiAn4pyU77iOJztcbiAgICB9XG4gICAgc3Bhbi53cm9uZzphZnRlcntcbiAgICAgICAgY29udGVudDogJ+KcmCc7XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgfVxuPC9zdHlsZT5cbjxzcGFuPlxuICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYW5zd2VyXCI+XG4gICAgPGxhYmVsIGZvcj1cImFuc3dlclwiIGFyaWEtbGFiZWw9XCJhbnN3ZXJcIj48L2xhYmVsPlxuPC9zcGFuPlxuYDtcbmNsYXNzIFF1aXpJbnB1dCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5faW5wdXQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xuICAgICAgICB0aGlzLl9pbnB1dC5uYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IFwicXVpei1pbnB1dFwiO1xuICAgICAgICB0aGlzLl9pbnB1dC5zaXplID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJzaXplXCIpIHx8IFwiNVwiO1xuICAgICAgICB0aGlzLl9pbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBlID0+IHtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBzZXQgY29ycmVjdCAoeWVzKSB7XG4gICAgICAgIC8vIGNvbnN0IHByZXZDaGVja2VkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFtjb3JyZWN0XVwiKTtcbiAgICAgICAgLy8gaWYgKHByZXZDaGVja2VkKSB7XG4gICAgICAgIC8vICAgICBwcmV2Q2hlY2tlZC5yZW1vdmVBdHRyaWJ1dGUoXCJjb3JyZWN0XCIpO1xuICAgICAgICAvLyB9XG5cbiAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwic3BhblwiKTtcbiAgICAgICAgY2hlY2tlZC5jbGFzc05hbWUgPSB5ZXMgPyBcImNvcnJlY3RcIiA6IFwid3JvbmdcIjtcbiAgICAgICAgLy8gaWYgKGNoZWNrZWQpIHtcbiAgICAgICAgLy8gICAgIGNoZWNrZWQuc2V0QXR0cmlidXRlKFwiY29ycmVjdFwiLCBgJHt5ZXN9YCk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBnZXQgbmFtZSAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJxdWl6LWlucHV0XCI7XG4gICAgfVxuXG4gICAgZ2V0IHZhbHVlICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lucHV0LnZhbHVlO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdxdWl6LWlucHV0JywgUXVpeklucHV0KTsiLCJjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5zdHlsZS5pbm5lckhUTUwgPSBgXG48c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgICAtLW9wdGlvbnMtd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8qZmxleDogMTsqL1xuICAgICAgICB3aWR0aDogdmFyKC0tb3B0aW9ucy13aWR0aCk7XG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLm9wdGlvbnN7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIFxuICAgIC8qIExhbmRzY2FwZSAqL1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBcbiAgICAgIGFuZCAobWluLWRldmljZS13aWR0aDogMzIwcHgpIFxuICAgICAgYW5kIChtYXgtZGV2aWNlLXdpZHRoOiA4MTJweClcbiAgICAgIGFuZCAoLXdlYmtpdC1taW4tZGV2aWNlLXBpeGVsLXJhdGlvOiAyKVxuICAgICAgYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgIC5vcHRpb25ze1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuICAgICAgICAub3B0aW9ucyA+IGxpIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCA1cHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoIDogNzY4cHgpe1xuICAgICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgIC0tb3B0aW9ucy13aWR0aDogNzAlO1xuICAgICAgICAgIH1cbiAgICB9XG4gICAgLm9wdGlvbnMgPiBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYmFja2dyb3VuZDogI2U4ZTJjYTtcbiAgICAgICAgY29sb3I6ICMyNzUzNDU7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyptYXJnaW4tYm90dG9tOiAycmVtOyovXG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1yYWRpb117XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gbGFiZWx7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNzUzNDU7XG4gICAgICAgIGNvbG9yOiAjZThlMmNhO1xuICAgIH1cbiAgICBcbiAgICBsYWJlbDphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIH1cbiAgICBcbiAgICBsYWJlbFtjb3JyZWN0PXRydWVdOmFmdGVye1xuICAgICAgICBjb250ZW50OiAn4pyU77iOJztcbiAgICAgICAgY29sb3I6ICMwMGJiMDA7XG4gICAgfVxuICAgIGxhYmVsW2NvcnJlY3Q9ZmFsc2VdOmFmdGVye1xuICAgICAgICBjb250ZW50OiAn4pyYJztcbiAgICAgICAgY29sb3I6IHJlZDtcbiAgICB9XG4gICAgXG48L3N0eWxlPlxuPHVsIGNsYXNzPVwib3B0aW9uc1wiPlxuXG48L3VsPlxuYDtcblxuY2xhc3MgUXVpek9wdGlvbnMgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIHRoaXMuX29wdGlvbnMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5vcHRpb25zXCIpO1xuICAgICAgICBjb25zdCBuYW1lID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IFwicXVpei1vcHRpb25cIjtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZ2V0QXR0cmlidXRlKFwib3B0aW9uc1wiKSB8fCBcIlwiO1xuICAgICAgICB0aGlzLl9vcHRpb25zLmlubmVySFRNTCA9IG9wdGlvbnMuc3BsaXQoXCIsXCIpLm1hcCgob3B0aW9uLCBpKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpZCA9IGAke25hbWV9JHtvcHRpb24ucmVwbGFjZSgvXFxzL2csIFwiXCIpfWA7XG4gICAgICAgICAgICByZXR1cm4gYDxsaT48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIiR7bmFtZX1cIiBpZD1cIiR7aWR9XCIgdmFsdWU9XCIke29wdGlvbn1cIj48bGFiZWwgZm9yPVwiJHtpZH1cIj4ke29wdGlvbn08L2xhYmVsPjwvbGk+YFxuICAgICAgICB9KS5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHNldCBjb3JyZWN0ICh5ZXMpIHtcbiAgICAgICAgY29uc3QgcHJldkNoZWNrZWQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImxhYmVsW2NvcnJlY3RdXCIpO1xuICAgICAgICBpZiAocHJldkNoZWNrZWQpIHtcbiAgICAgICAgICAgIHByZXZDaGVja2VkLnJlbW92ZUF0dHJpYnV0ZShcImNvcnJlY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gbGFiZWxcIik7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZShcImNvcnJlY3RcIiwgYCR7eWVzfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IFwicXVpei1vcHRpb25cIjtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUgKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX29wdGlvbnMucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gICAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dC52YWx1ZTtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncXVpei1vcHRpb25zJywgUXVpek9wdGlvbnMpOyIsImltcG9ydCBcIi4vY2FyZHNcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtcXVpelwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvcXVpei1vcHRpb25zXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9xdWl6LWlucHV0XCJcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFuc3dlcnMgKCkge1xuICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBmZXRjaChcIi4vYS5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSk7XG4gICAgY29uc3QgcXVpekZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcInF1aXpcIl07XG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKTtcbiAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsYWluXCIpO1xuXG4gICAgaWYgKHF1aXpGb3JtICYmIHJlc3VsdHMpIHtcbiAgICAgICAgcXVpekZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGNvcnJlY3QgPSAwO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFuc3dlcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBxdWl6Rm9ybS5lbGVtZW50c1trXTtcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyID0gYW5zd2Vyc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IFwiY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0cy5pbm5lckhUTUwgPSBgJHtjb3JyZWN0fSBvdXQgb2YgJHtrZXlzLmxlbmd0aH0gY29ycmVjdGA7XG4gICAgICAgICAgICBpZiAoZXhwbGFpbikge1xuICAgICAgICAgICAgICAgIGV4cGxhaW4uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHF1aXpDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYXJkLXF1aXpcIik7XG5cbiAgICBpZiAocXVpekNhcmRzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNhcmQgb2YgcXVpekNhcmRzKSB7XG5cbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQge2tleSwgdmFsdWV9ID0gY2FyZC5hbnN3ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29ycmVjdCA9ICEhdmFsdWUgJiYgISFhbnN3ZXJzW2tleV0gJiYgY2hlY2tBbnN3ZXIodmFsdWUsIGFuc3dlcnNba2V5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXhwbGFpbikge1xuXG4gICAgICAgIGV4cGxhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhwbGFuYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHBsYW5hdGlvblwiKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXhwbGFuYXRpb24gb2YgZXhwbGFuYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgZXhwbGFuYXRpb24uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gY2hlY2tBbnN3ZXIgKGFuc3dlciwgc29sdXRpb24pIHtcbiAgICBhbnN3ZXIgPSBhbnN3ZXIucmVwbGFjZSgvXFxzL2csIFwiXCIpLnRvTG93ZXJDYXNlKCk7XG4gICAgc29sdXRpb24gPSBzb2x1dGlvbi5yZXBsYWNlKC9cXHMvZywgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYW5zd2VyID09PSBzb2x1dGlvbjtcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSAoYXJyYXkpIHtcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFtdO1xuICAgIHdoaWxlIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCkgfCAwO1xuICAgICAgICBsZXQgc3BsaWNlID0gYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBzaHVmZmxlZEFycmF5LnB1c2goc3BsaWNlWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHNodWZmbGVRdWVzdGlvbnMgKHF1ZXN0aW9uTGlzdHMpIHtcbiAgICBmb3IgKGNvbnN0IHF1ZXN0aW9ucyBvZiBxdWVzdGlvbkxpc3RzKSB7XG4gICAgICAgIGNvbnN0IHEgPSBzaHVmZmxlKFsuLi5xdWVzdGlvbnMuY2hpbGRyZW5dKTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHF1ZXN0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIHEpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVzdGlvbnMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cblxufVxuXG5jb25zdCBxdWVzdGlvbnNUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25zVGVtcGxhdGVcIik7XG5pZiAocXVlc3Rpb25zVGVtcGxhdGUpIHtcbiAgICBjb25zdCBjbG9uZVRlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShxdWVzdGlvbnNUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBxdWVzdGlvbkxpc3RzID0gY2xvbmVUZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc1wiKTtcbiAgICBzaHVmZmxlUXVlc3Rpb25zKHF1ZXN0aW9uTGlzdHMpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zQ29udGFpbmVyXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25Db250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHF1ZXN0aW9uQ29udGFpbmVyc1tpXTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uTGlzdHNbaV0pO1xuICAgIH1cbn1cbmxvYWRBbnN3ZXJzKCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZSAoYXJyYXkpIHtcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFtdO1xuICAgIHdoaWxlIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCkgfCAwO1xuICAgICAgICBsZXQgc3BsaWNlID0gYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBzaHVmZmxlZEFycmF5LnB1c2goc3BsaWNlWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==