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
        display: block;
        width: 100vw;
        overflow: hidden;
        --indicator-size: 2vw;
        --indicator-color: rgba(255,255,255,0.3);
        --active-indicator: white;
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
        
        --container-width: 100vw;
        --container-height: 100vh;
        --card-width: 80vw;
        --card-height: 80vh;
        --shadow-x: calc(var(--card-width) * 0.075);
        --card-shadow:  var(--shadow-x) var(--shadow-x) 20px rgba(0, 0, 0, 0.1), calc( -1 * var(--shadow-x)) var(--shadow-x) 20px rgba(0, 0, 0, 0.1);
      }
    
    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 768px) and (min-height : 400px) {
        /* Styles */
        :host {
           --card-width: 50vw;
           --card-height: 50vh;
           --shadow-x: calc(var(--card-width) * 0.075);
           --card-shadow:  var(--shadow-x) var(--shadow-x) 20px rgba(0, 0, 0, 0.1), calc( -1 * var(--shadow-x)) var(--shadow-x) 20px rgba(0, 0, 0, 0.1);
        }
    }
    @media only screen  and (min-width : 1200px) {
        /* Styles */
        :host {
           --card-width: 40vw;
           --card-height: 40vh;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWV4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDSGdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLHVEOzs7Ozs7Ozs7Ozs7OztBQzdOQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDRFOzs7Ozs7Ozs7OztBQzVJQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVLGFBQWEsWUFBWTtBQUNwRTtBQUNBOztBQUVBLHFEOzs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6ImNhcmRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9jYXJkcy5qc1wiKTtcbiIsImltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkLWZsaXBcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtY29udGFpbmVyXCJcbmltcG9ydCAnLi9jb21wb25lbnRzL21hdGgtZXhwcmVzc2lvbic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uJzsiLCJpbXBvcnQge3NodWZmbGV9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgS0VZQ09ERSA9IHtcbiAgICBET1dOOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBSSUdIVDogMzksXG4gICAgVVA6IDM4LFxuICAgIEhPTUU6IDM2LFxuICAgIEVORDogMzUsXG4gICAgU1BBQ0U6IDMyXG59O1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLS1pbmRpY2F0b3Itc2l6ZTogMnZ3O1xuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgICAtLWFjdGl2ZS1pbmRpY2F0b3I6IHdoaXRlO1xuICAgIH1cbiAgICAvKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiA3NjhweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWluZGljYXRvci1zaXplOiAxdnc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDE0MDBweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWluZGljYXRvci1zaXplOiAwLjV2dztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgLS1uOiAxO1xuICAgICAgICAtLWk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tbikgKiAxMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1pKSAvIHZhcigtLW4pICogLTEwMCUpKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcbiAgICB9XG4gICAgLmluZGljYXRvcnN7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5pbmRpY2F0b3J7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1pbmRpY2F0b3Itc2l6ZSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0taW5kaWNhdG9yLXNpemUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmRpY2F0b3ItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuY29udHJvbHMge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgICBcbiAgICAuY29udHJvbHM6YWZ0ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgI3ByZXYge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICBcbiAgICAjcHJldjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICBcbiAgICAjbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICAjbmV4dDphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgICAgICByaWdodDogMzAlO1xuICAgIH1cbiAgICBcbiAgICBsYWJlbFtmb3I9XCJzaHVmZmxlXCJde1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfSAgICBcbjwvc3R5bGU+XG48dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+XG4gICAgXG48L3VsPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxzbG90Pjwvc2xvdD5cbjwvZGl2PlxuPGRpdiBpZD1cInByZXZcIiBjbGFzcz1cImNvbnRyb2xzXCI+XG48L2Rpdj5cbjxkaXYgaWQ9XCJuZXh0XCIgY2xhc3M9XCJjb250cm9sc1wiPlxuPC9kaXY+XG5cbjxsYWJlbCBmb3I9XCJzaHVmZmxlXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICBpZD1cInNodWZmbGVcIj5cbiAgICBTaHVmZmxlXG48L2xhYmVsPlxuYDtcblxuY2xhc3MgQ2FyZENvbnRhaW5lciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX29uS2V5RG93biA9IHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50Q2FyZCAoaSkge1xuICAgICAgICBpZiAoaSA9PT0gdGhpcy5fY3VycmVudENhcmQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gICAgICAgICAgICBpbmRpY2F0b3JzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpY2F0b3InKTtcblxuICAgICAgICBpbmRpY2F0b3JzW2ldLnN0eWxlLnNldFByb3BlcnR5KCctLWluZGljYXRvci1jb2xvcicsICd2YXIoLS1hY3RpdmUtaW5kaWNhdG9yKScpO1xuXG4gICAgICAgIGxldCBpbmRpY2F0b3IgPSBpbmRpY2F0b3JzW3RoaXMuX2N1cnJlbnRDYXJkXTtcbiAgICAgICAgaWYgKGluZGljYXRvcikge1xuICAgICAgICAgICAgaW5kaWNhdG9yLnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLWluZGljYXRvci1jb2xvcicpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0taScsIGkpO1xuICAgICAgICB0aGlzLl9jdXJyZW50Q2FyZCA9IGk7XG4gICAgfVxuXG4gICAgZ2V0IGNhcmQoKXtcbiAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpO1xuICAgICAgICByZXR1cm4gY2FyZHNbdGhpcy5fY3VycmVudENhcmRdO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSlcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgaW5kaWNhdG9ycyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9ycycpLFxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpLFxuICAgICAgICAgICAgcHJldiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjcHJldicpLFxuICAgICAgICAgICAgc2h1ZmZsZUJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjc2h1ZmZsZScpLFxuICAgICAgICAgICAgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpLFxuICAgICAgICAgICAgTiA9IGNhcmRzICYmIGNhcmRzLmxlbmd0aDtcblxuICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tbicsIE4pO1xuXG4gICAgICAgIGluZGljYXRvcnMuaW5uZXJIVE1MID0gWy4uLihuZXcgQXJyYXkoTikpXS5tYXAobiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYDxsaSBjbGFzcz1cImluZGljYXRvclwiPjwvbGk+YDtcbiAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IDA7XG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSB0aGlzLl9vbktleURvd24oS0VZQ09ERS5SSUdIVCwgTik7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gdGhpcy5fb25LZXlEb3duKEtFWUNPREUuTEVGVCwgTik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSB0aGlzLl9vbktleURvd24oZS5rZXlDb2RlLCBOKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNodWZmbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNodWZmbGUgPSAhdGhpcy5zaHVmZmxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0Q2FyZHMgKCkge1xuICAgICAgICBjb25zdCBzbG90ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3QnKTtcbiAgICAgICAgcmV0dXJuIHNsb3QgJiYgc2xvdC5hc3NpZ25lZE5vZGVzKCkuZmlsdGVyKG4gPT4gbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBfb25LZXlEb3duIChrZXlDb2RlLCBOKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY3VycmVudENhcmQ7XG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLkxFRlQ6XG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuc2h1ZmZsZSA/IChNYXRoLnJhbmRvbSgpICogTikgfCAwIDogKE4gKyAtLWkpICUgTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5SSUdIVDpcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5zaHVmZmxlID8gKE1hdGgucmFuZG9tKCkgKiBOKSB8IDAgOiAoKytpKSAlIE4gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLlNQQUNFOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRzID0gdGhpcy5fZ2V0Q2FyZHMoKTtcbiAgICAgICAgICAgICAgICBjYXJkc1tpXS5vbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLWNvbnRhaW5lcicsIENhcmRDb250YWluZXIpOyIsImltcG9ydCBDYXJkRWxlbWVudCBmcm9tICcuL2NhcmQnO1xuXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5zdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgIC5jYXJke1xuICAgICAgICBwZXJzcGVjdGl2ZTogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDQpO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fY29udGFpbmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAvKkluZGljYXRlcyB0aGF0IHRoZSBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCBzaG91bGQgYmUgcG9zaXRpb25lZCBpbiB0aGUgM0Qtc3BhY2UuKi9cbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB9XG5cbiAgICAuY2FyZF9fc2hhZG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAvKlNhZmFyaSB3b3JrYXJvdW5kKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDAwcHgpO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fZmFjZSB7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmNhcmQuaXMtZmxpcHBlZCA+IC5jYXJkX19jb250YWluZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuY2FyZC5pcy1mbGlwcGVkIH4gLmNhcmRfX3NoYWRvdyB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cbiAgICA6OnNsb3R0ZWQoKikge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIDwvc3R5bGU+ICAgIFxuICBgO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiPlxuICAgIDxzbG90IG5hbWU9XCJmcm9udFwiPjwvc2xvdD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiPlxuICAgIDxzbG90IG5hbWU9XCJiYWNrXCI+PC9zbG90PlxuPC9kaXY+XG5gO1xuXG5jbGFzcyBDYXJkRmxpcCBleHRlbmRzIENhcmRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgLy9wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdDaGlsZCwgb2xkQ2hpbGQpO1xuICAgICAgICB0aGlzLl9jYXJkQ29udGFpbmVyLnJlcGxhY2VDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSwgdGhpcy5fY2FyZENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZClcbiAgICB9XG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5jYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1mbGlwcGVkXCIpO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtZmxpcCcsIENhcmRGbGlwKTsiLCJjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5zdHlsZS5pbm5lckhUTUwgPSBgXG48c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLypUaGUgY29udGFpbiBDU1MgcHJvcGVydHkgYWxsb3dzIGFuIGF1dGhvciBcbiAgICAgICAgdG8gaW5kaWNhdGUgdGhhdCBhbiBlbGVtZW50IGFuZCBpdHMgY29udGVudHMgYXJlLCBcbiAgICAgICAgYXMgbXVjaCBhcyBwb3NzaWJsZSwgaW5kZXBlbmRlbnQgb2YgdGhlIHJlc3Qgb2YgdGhlIGRvY3VtZW50IHRyZWUuKi9cbiAgICAgICAgY29udGFpbjogY29udGVudDtcbiAgICAgICAgXG4gICAgICAgIC0tYmFja2dyb3VuZDojNzhDN0RFO1xuICAgICAgICAtLWNhcmQtZmFjZTogI0E0REJFQTtcbiAgICAgICAgLS1jYXJkLXRleHQ6ICMyOTMxMzI7XG4gICAgICAgIFxuICAgICAgICAtLWNvbnRhaW5lci13aWR0aDogMTAwdnc7XG4gICAgICAgIC0tY29udGFpbmVyLWhlaWdodDogMTAwdmg7XG4gICAgICAgIC0tY2FyZC13aWR0aDogODB2dztcbiAgICAgICAgLS1jYXJkLWhlaWdodDogODB2aDtcbiAgICAgICAgLS1zaGFkb3cteDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDAuMDc1KTtcbiAgICAgICAgLS1jYXJkLXNoYWRvdzogIHZhcigtLXNoYWRvdy14KSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGNhbGMoIC0xICogdmFyKC0tc2hhZG93LXgpKSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgXG4gICAgLyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoIDogNzY4cHgpIGFuZCAobWluLWhlaWdodCA6IDQwMHB4KSB7XG4gICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgIC0tY2FyZC13aWR0aDogNTB2dztcbiAgICAgICAgICAgLS1jYXJkLWhlaWdodDogNTB2aDtcbiAgICAgICAgICAgLS1zaGFkb3cteDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDAuMDc1KTtcbiAgICAgICAgICAgLS1jYXJkLXNoYWRvdzogIHZhcigtLXNoYWRvdy14KSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGNhbGMoIC0xICogdmFyKC0tc2hhZG93LXgpKSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDEyMDBweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWNhcmQtd2lkdGg6IDQwdnc7XG4gICAgICAgICAgIC0tY2FyZC1oZWlnaHQ6IDQwdmg7XG4gICAgICAgICAgIC0tc2hhZG93LXg6IGNhbGModmFyKC0tY2FyZC13aWR0aCkgKiAwLjA3NSk7XG4gICAgICAgICAgIC0tY2FyZC1zaGFkb3c6ICB2YXIoLS1zaGFkb3cteCkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBjYWxjKCAtMSAqIHZhcigtLXNoYWRvdy14KSkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIDpob3N0KC5ncmVlbikge1xuICAgICAgICAtLWJhY2tncm91bmQ6ICM0ODhlNWU7XG4gICAgICAgIC0tY2FyZC1mYWNlOiAjNjZiMjdlO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5zY2VuZSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuY2FyZF9fY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvKmJveC1zaGFkb3c6IDFweCAxcHggMCAjODNjZGUyOyovXG4gICAgfVxuXG4gICAgLmNhcmRfX3NoYWRvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fZmFjZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhcmQtdGV4dCk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIFxuICAgIDwvc3R5bGU+XG5gO1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNjZW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2ZhY2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19zaGFkb3dcIj48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIGA7XG5cbmNsYXNzIENhcmRFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICB0aGlzLl9jYXJkQ29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLmNhcmQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYXJkXCIpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhLWNhcmQnLCBDYXJkRWxlbWVudCk7XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRFbGVtZW50OyIsImNsYXNzIE1hdGhFeHByZXNzaW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTsgLy8gYWx3YXlzIGNhbGwgc3VwZXIoKSBmaXJzdCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcIm1hdGhcIik7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICBsZXQgaHRtbCA9IFwiXCI7XG4gICAgICAgIGZvciAoY29uc3Qgbm9kZSBvZiB0aGlzLmNoaWxkTm9kZXMpIHtcbiAgICAgICAgICAgIGxldCB0ZXh0Q29udGVudCA9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBsZXQgY29udGVudCA9IHRleHRDb250ZW50LnJlcGxhY2UoL1thLXpdL2csIFwiPGk+JCY8L2k+XCIpLnJlcGxhY2UoL1xccysvZywgXCImbmJzcDtcIik7XG4gICAgICAgICAgICBpZih0ZXh0Q29udGVudC5pbmNsdWRlcyhcIi9cIikpe1xuICAgICAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50LnJlcGxhY2UoLyhcXGQqXFwvXFxkKS9nLCBcIjxtYXRoLWZyYWN0aW9uPiQmPC9tYXRoLWZyYWN0aW9uPlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG5vZGUuaW5uZXJIVE1MID0gY29udGVudDtcbiAgICAgICAgICAgICAgICBodG1sICs9IG5vZGUub3V0ZXJIVE1MO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBub2RlLnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgICAgICAgICBodG1sICs9IG5vZGUudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBodG1sO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYXRoLWV4cHJlc3Npb24nLCBNYXRoRXhwcmVzc2lvbik7IiwiY2xhc3MgTWF0aEZyYWN0aW9uIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTsgLy8gYWx3YXlzIGNhbGwgc3VwZXIoKSBmaXJzdCBpbiB0aGUgY29uc3RydWN0b3IuXG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICBjb25zdCBjb250ZW50ID0gdGhpcy50ZXh0Q29udGVudDtcbiAgICAgICAgbGV0IFtudW1lcmF0b3IsIGRlbm9taW5hdG9yXSA9IGNvbnRlbnQuc3BsaXQoXCIvXCIpO1xuICAgICAgICB0aGlzLmlubmVySFRNTCA9IGA8c3VwPiR7bnVtZXJhdG9yfTwvc3VwPjxzdWI+JHtkZW5vbWluYXRvcn08L3N1Yj5gO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdtYXRoLWZyYWN0aW9uJywgTWF0aEZyYWN0aW9uKTsiLCJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZSAoYXJyYXkpIHtcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFtdO1xuICAgIHdoaWxlIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCkgfCAwO1xuICAgICAgICBsZXQgc3BsaWNlID0gYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBzaHVmZmxlZEFycmF5LnB1c2goc3BsaWNlWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==