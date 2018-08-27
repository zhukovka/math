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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/cards.js");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWV4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSGdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVEOzs7Ozs7Ozs7Ozs7OztBQ2hPQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSw0RTs7Ozs7Ozs7Ozs7QUM5SUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGO0FBQzVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx5RDs7Ozs7Ozs7Ozs7QUMxQkE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsVUFBVSxhQUFhLFlBQVk7QUFDcEU7QUFDQTs7QUFFQSxxRDs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJjYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvY2FyZHMuanNcIik7XG4iLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvY2FyZFwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvY2FyZC1mbGlwXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lclwiXG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXRoLWV4cHJlc3Npb24nO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWF0aC1mcmFjdGlvbic7IiwiaW1wb3J0IHtzaHVmZmxlfSBmcm9tICcuLi91dGlscyc7XG5cbmNvbnN0IEtFWUNPREUgPSB7XG4gICAgRE9XTjogNDAsXG4gICAgTEVGVDogMzcsXG4gICAgUklHSFQ6IDM5LFxuICAgIFVQOiAzOCxcbiAgICBIT01FOiAzNixcbiAgICBFTkQ6IDM1LFxuICAgIFNQQUNFOiAzMlxufTtcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICAgIC0tY29udGFpbmVyLWhlaWdodDogMTAwJTtcbiAgICAgICAgLS1pbmRpY2F0b3Itc2l6ZTogMnZ3O1xuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgICAtLWFjdGl2ZS1pbmRpY2F0b3I6IHdoaXRlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC8qIERlc2t0b3BzIGFuZCBsYXB0b3BzIC0tLS0tLS0tLS0tICovXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSB7XG4gICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgIC0taW5kaWNhdG9yLXNpemU6IDF2dztcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoIDogMTQwMHB4KSB7XG4gICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgIC0taW5kaWNhdG9yLXNpemU6IDAuNXZ3O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICAtLW46IDE7XG4gICAgICAgIC0taTogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1uKSAqIDEwMCUpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvbnRhaW5lci1oZWlnaHQpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLWkpIC8gdmFyKC0tbikgKiAtMTAwJSkpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2Utb3V0O1xuICAgIH1cbiAgICAuaW5kaWNhdG9yc3tcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmluZGljYXRvcntcbiAgICAgICAgd2lkdGg6IHZhcigtLWluZGljYXRvci1zaXplKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pbmRpY2F0b3Itc2l6ZSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZGljYXRvci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5jb250cm9scyB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuICAgIFxuICAgIC5jb250cm9sczphZnRlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAjcHJldiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIFxuICAgICNwcmV2OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIFxuICAgICNuZXh0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgICNuZXh0OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICAgIHJpZ2h0OiAzMCU7XG4gICAgfVxuICAgIFxuICAgIGxhYmVsW2Zvcj1cInNodWZmbGVcIl17XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9ICAgIFxuPC9zdHlsZT5cbjx1bCBjbGFzcz1cImluZGljYXRvcnNcIj5cbiAgICBcbjwvdWw+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+XG48ZGl2IGlkPVwicHJldlwiIGNsYXNzPVwiY29udHJvbHNcIj5cbjwvZGl2PlxuPGRpdiBpZD1cIm5leHRcIiBjbGFzcz1cImNvbnRyb2xzXCI+XG48L2Rpdj5cblxuPGxhYmVsIGZvcj1cInNodWZmbGVcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGlkPVwic2h1ZmZsZVwiPlxuICAgIFNodWZmbGVcbjwvbGFiZWw+XG5gO1xuXG5jbGFzcyBDYXJkQ29udGFpbmVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fb25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5zaHVmZmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRDYXJkIChpKSB7XG4gICAgICAgIGlmIChpID09PSB0aGlzLl9jdXJyZW50Q2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgICAgICAgICAgIGluZGljYXRvcnMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRvcicpO1xuXG4gICAgICAgIGluZGljYXRvcnNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJy0taW5kaWNhdG9yLWNvbG9yJywgJ3ZhcigtLWFjdGl2ZS1pbmRpY2F0b3IpJyk7XG5cbiAgICAgICAgbGV0IGluZGljYXRvciA9IGluZGljYXRvcnNbdGhpcy5fY3VycmVudENhcmRdO1xuICAgICAgICBpZiAoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICBpbmRpY2F0b3Iuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0taW5kaWNhdG9yLWNvbG9yJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pJywgaSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDYXJkID0gaTtcbiAgICB9XG5cbiAgICBnZXQgY2FyZCgpe1xuICAgICAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2dldENhcmRzKCk7XG4gICAgICAgIHJldHVybiBjYXJkc1t0aGlzLl9jdXJyZW50Q2FyZF07XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKVxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gICAgICAgICAgICBpbmRpY2F0b3JzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JzJyksXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0JyksXG4gICAgICAgICAgICBwcmV2ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2JyksXG4gICAgICAgICAgICBzaHVmZmxlQnRuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzaHVmZmxlJyksXG4gICAgICAgICAgICBjYXJkcyA9IHRoaXMuX2dldENhcmRzKCksXG4gICAgICAgICAgICBOID0gY2FyZHMgJiYgY2FyZHMubGVuZ3RoO1xuXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1uJywgTik7XG5cbiAgICAgICAgaW5kaWNhdG9ycy5pbm5lckhUTUwgPSBbLi4uKG5ldyBBcnJheShOKSldLm1hcChuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9saT5gO1xuICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gMDtcbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IHRoaXMuX29uS2V5RG93bihLRVlDT0RFLlJJR0hULCBOKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSB0aGlzLl9vbktleURvd24oS0VZQ09ERS5MRUZULCBOKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IHRoaXMuX29uS2V5RG93bihlLmtleUNvZGUsIE4pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2h1ZmZsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZSA9ICF0aGlzLnNodWZmbGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRDYXJkcyAoKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xuICAgICAgICByZXR1cm4gc2xvdCAmJiBzbG90LmFzc2lnbmVkTm9kZXMoKS5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgIH1cblxuICAgIF9vbktleURvd24gKGtleUNvZGUsIE4pIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9jdXJyZW50Q2FyZDtcbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuTEVGVDpcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5zaHVmZmxlID8gKE1hdGgucmFuZG9tKCkgKiBOKSB8IDAgOiAoTiArIC0taSkgJSBOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLlJJR0hUOlxuICAgICAgICAgICAgICAgIGkgPSB0aGlzLnNodWZmbGUgPyAoTWF0aC5yYW5kb20oKSAqIE4pIHwgMCA6ICgrK2kpICUgTiA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpO1xuICAgICAgICAgICAgICAgIGNhcmRzW2ldLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtY29udGFpbmVyJywgQ2FyZENvbnRhaW5lcik7IiwiaW1wb3J0IENhcmRFbGVtZW50IGZyb20gJy4vY2FyZCc7XG5cbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgLmNhcmR7XG4gICAgICAgIHBlcnNwZWN0aXZlOiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpICogNCk7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19jb250YWluZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIC8qSW5kaWNhdGVzIHRoYXQgdGhlIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50IHNob3VsZCBiZSBwb3NpdGlvbmVkIGluIHRoZSAzRC1zcGFjZS4qL1xuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIH1cblxuICAgIC5jYXJkX19zaGFkb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIC8qU2FmYXJpIHdvcmthcm91bmQqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMDBweCk7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19mYWNlIHtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuY2FyZC5pcy1mbGlwcGVkID4gLmNhcmRfX2NvbnRhaW5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5jYXJkLmlzLWZsaXBwZWQgfiAuY2FyZF9fc2hhZG93IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuICAgIDo6c2xvdHRlZCgqKSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgPC9zdHlsZT4gICAgXG4gIGA7XG5cbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCI+XG4gICAgPHNsb3QgbmFtZT1cImZyb250XCI+PC9zbG90PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCI+XG4gICAgPHNsb3QgbmFtZT1cImJhY2tcIj48L3Nsb3Q+XG48L2Rpdj5cbmA7XG5cbmNsYXNzIENhcmRGbGlwIGV4dGVuZHMgQ2FyZEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAvL3BhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0NoaWxkLCBvbGRDaGlsZCk7XG4gICAgICAgIHRoaXMuX2NhcmRDb250YWluZXIucmVwbGFjZUNoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLCB0aGlzLl9jYXJkQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKVxuICAgIH1cblxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWZsaXBwZWRcIik7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2FyZC1mbGlwJywgQ2FyZEZsaXApOyIsImNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbjxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAvKlRoZSBjb250YWluIENTUyBwcm9wZXJ0eSBhbGxvd3MgYW4gYXV0aG9yIFxuICAgICAgICB0byBpbmRpY2F0ZSB0aGF0IGFuIGVsZW1lbnQgYW5kIGl0cyBjb250ZW50cyBhcmUsIFxuICAgICAgICBhcyBtdWNoIGFzIHBvc3NpYmxlLCBpbmRlcGVuZGVudCBvZiB0aGUgcmVzdCBvZiB0aGUgZG9jdW1lbnQgdHJlZS4qL1xuICAgICAgICBjb250YWluOiBjb250ZW50O1xuICAgICAgICBcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiM3OEM3REU7XG4gICAgICAgIC0tY2FyZC1mYWNlOiAjQTREQkVBO1xuICAgICAgICAtLWNhcmQtdGV4dDogIzI5MzEzMjtcbiAgICAgICAgXG4gICAgICAgIC0tY29udGFpbmVyLXdpZHRoOiAxMDAlO1xuICAgICAgICAtLWNvbnRhaW5lci1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIC0tY2FyZC13aWR0aDogODAlO1xuICAgICAgICAtLWNhcmQtaGVpZ2h0OiA4MCU7XG4gICAgICAgIC0tc2hhZG93LXg6IGNhbGModmFyKC0tY2FyZC13aWR0aCkgKiAwLjA3NSk7XG4gICAgICAgIC0tY2FyZC1zaGFkb3c6ICB2YXIoLS1zaGFkb3cteCkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBjYWxjKCAtMSAqIHZhcigtLXNoYWRvdy14KSkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB3aWR0aDogdmFyKC0tY29udGFpbmVyLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jb250YWluZXItaGVpZ2h0KVxuICAgICAgfVxuICAgIFxuICAgIC8qIERlc2t0b3BzIGFuZCBsYXB0b3BzIC0tLS0tLS0tLS0tICovXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSBhbmQgKG1pbi1oZWlnaHQgOiA0MDBweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWNhcmQtd2lkdGg6IDUwJTtcbiAgICAgICAgICAgLS1jYXJkLWhlaWdodDogNTAlO1xuICAgICAgICAgICAtLXNoYWRvdy14OiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpICogMC4wNzUpO1xuICAgICAgICAgICAtLWNhcmQtc2hhZG93OiAgdmFyKC0tc2hhZG93LXgpIHZhcigtLXNoYWRvdy14KSAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgY2FsYyggLTEgKiB2YXIoLS1zaGFkb3cteCkpIHZhcigtLXNoYWRvdy14KSAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoIDogMTIwMHB4KSB7XG4gICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgIC0tY2FyZC13aWR0aDogNDAlO1xuICAgICAgICAgICAtLWNhcmQtaGVpZ2h0OiA0MCU7XG4gICAgICAgICAgIC0tc2hhZG93LXg6IGNhbGModmFyKC0tY2FyZC13aWR0aCkgKiAwLjA3NSk7XG4gICAgICAgICAgIC0tY2FyZC1zaGFkb3c6ICB2YXIoLS1zaGFkb3cteCkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBjYWxjKCAtMSAqIHZhcigtLXNoYWRvdy14KSkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIDpob3N0KC5ncmVlbikge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM0ODhlNWU7XG4gICAgICAgIC0tY2FyZC1mYWNlOiAjNjZiMjdlO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5zY2VuZSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuY2FyZF9fY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvKmJveC1zaGFkb3c6IDFweCAxcHggMCAjODNjZGUyOyovXG4gICAgfVxuXG4gICAgLmNhcmRfX3NoYWRvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fZmFjZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhcmQtdGV4dCk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIDwvc3R5bGU+XG5gO1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2ZhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19zaGFkb3dcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbmNsYXNzIENhcmRFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB0aGlzLl9jYXJkQ29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhLWNhcmQnLCBDYXJkRWxlbWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRFbGVtZW50OyIsImNsYXNzIE1hdGhFeHByZXNzaW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTsgLy8gYWx3YXlzIGNhbGwgc3VwZXIoKSBmaXJzdCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcIm1hdGhcIik7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICBsZXQgaHRtbCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRleHRDb250ZW50LnJlcGxhY2UoL1thLXpdL2csIFwiPGk+JCY8L2k+XCIpLnJlcGxhY2UoL1xccysvZywgXCImbmJzcDtcIik7XG4gICAgICAgICAgICBpZih0ZXh0Q29udGVudC5pbmNsdWRlcyhcIi9cIikpe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyhcXGQqXFwvXFxkKS9nLCBcIjxtYXRoLWZyYWN0aW9uPiQmPC9tYXRoLWZyYWN0aW9uPlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICBodG1sICs9IG5vZGUub3V0ZXJIVE1MO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICBodG1sICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYXRoLWV4cHJlc3Npb24nLCBNYXRoRXhwcmVzc2lvbik7IiwiY2xhc3MgTWF0aEZyYWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTsgLy8gYWx3YXlzIGNhbGwgc3VwZXIoKSBmaXJzdCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IFtudW1lcmF0b3IsIGRlbm9taW5hdG9yXSA9IGNvbnRlbnQuc3BsaXQoXCIvXCIpO1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGA8c3VwPiR7bnVtZXJhdG9yfTwvc3VwPjxzdWI+JHtkZW5vbWluYXRvcn08L3N1Yj5gO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYXRoLWZyYWN0aW9uJywgTWF0aEZyYWN0aW9uKTsiLCJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZSAoYXJyYXkpIHtcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFtdO1xuICAgIHdoaWxlIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCkgfCAwO1xuICAgICAgICBsZXQgc3BsaWNlID0gYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBzaHVmZmxlZEFycmF5LnB1c2goc3BsaWNlWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==