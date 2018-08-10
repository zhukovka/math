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
/* harmony import */ var _components_card_container__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_card_container__WEBPACK_IMPORTED_MODULE_2__);




/***/ }),

/***/ "./js/components/card-container.js":
/*!*****************************************!*\
  !*** ./js/components/card-container.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

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
</style>
<div class="container">
    <slot></slot>
</div>
<div id="prev" class="controls">
</div>
<div id="next" class="controls">
</div>
`;

class CardContainer extends HTMLElement {
    constructor () {
        super();
        this._onKeyDown = this._onKeyDown.bind(this);
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }


    connectedCallback () {
        if (!this.hasAttribute('tabindex'))
            this.setAttribute('tabindex', '0');


        const container = this.shadowRoot.querySelector('.container'),
            next = this.shadowRoot.querySelector('#next'),
            prev = this.shadowRoot.querySelector('#prev'),
            cards = this._getCards(),
            N = cards && cards.length;

        container.style.setProperty('--n', N);

        let i = 0;
        next.addEventListener("click", e => {
            i = this._onKeyDown(KEYCODE.RIGHT, i, N, container);
        });
        prev.addEventListener("click", e => {
            i = this._onKeyDown(KEYCODE.LEFT, i, N, container);
        });
        this.addEventListener('keydown', e => {
            i = this._onKeyDown(e.keyCode, i, N, container);
        });
    }

    _getCards () {
        const slot = this.shadowRoot.querySelector('slot');
        return slot && slot.assignedElements();
    }

    _onKeyDown (keyCode, i, N, container) {
        let _i = i;
        switch (keyCode) {
            case KEYCODE.LEFT:
                _i = (N + --_i) % N;
                break;
            case KEYCODE.RIGHT:
                _i = ++_i % N;
                break;
            case KEYCODE.SPACE:
                const cards = this._getCards();
                cards[i].onClick();
                break;
        }

        if (i !== _i) {
            container.style.setProperty('--i', _i);
        }
        return _i;
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
        this._cardContainer.appendChild(template.content.cloneNode(true))
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

/* harmony default export */ __webpack_exports__["default"] = (CardElement);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHVEOzs7Ozs7Ozs7Ozs7OztBQ3hJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsNEUiLCJmaWxlIjoiY2FyZHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2pzL2NhcmRzLmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmRcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtZmxpcFwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvY2FyZC1jb250YWluZXJcIiIsImNvbnN0IEtFWUNPREUgPSB7XG4gICAgRE9XTjogNDAsXG4gICAgTEVGVDogMzcsXG4gICAgUklHSFQ6IDM5LFxuICAgIFVQOiAzOCxcbiAgICBIT01FOiAzNixcbiAgICBFTkQ6IDM1LFxuICAgIFNQQUNFOiAzMlxufTtcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxzdHlsZT5cbiAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICAtLW46IDE7XG4gICAgICAgIC0taTogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1uKSAqIDEwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLWkpIC8gdmFyKC0tbikgKiAtMTAwJSkpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2Utb3V0O1xuICAgIH1cblxuICAgIC5jb250cm9scyB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuICAgIFxuICAgIC5jb250cm9sczphZnRlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAjcHJldiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIFxuICAgICNwcmV2OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIFxuICAgICNuZXh0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgICNuZXh0OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICAgIHJpZ2h0OiAzMCU7XG4gICAgfVxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICA8c2xvdD48L3Nsb3Q+XG48L2Rpdj5cbjxkaXYgaWQ9XCJwcmV2XCIgY2xhc3M9XCJjb250cm9sc1wiPlxuPC9kaXY+XG48ZGl2IGlkPVwibmV4dFwiIGNsYXNzPVwiY29udHJvbHNcIj5cbjwvZGl2PlxuYDtcblxuY2xhc3MgQ2FyZENvbnRhaW5lciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX29uS2V5RG93biA9IHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICB9XG5cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSlcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpLFxuICAgICAgICAgICAgcHJldiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjcHJldicpLFxuICAgICAgICAgICAgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpLFxuICAgICAgICAgICAgTiA9IGNhcmRzICYmIGNhcmRzLmxlbmd0aDtcblxuICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tbicsIE4pO1xuXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBpID0gdGhpcy5fb25LZXlEb3duKEtFWUNPREUuUklHSFQsIGksIE4sIGNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGkgPSB0aGlzLl9vbktleURvd24oS0VZQ09ERS5MRUZULCBpLCBOLCBjb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICAgICAgICBpID0gdGhpcy5fb25LZXlEb3duKGUua2V5Q29kZSwgaSwgTiwgY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgX2dldENhcmRzICgpIHtcbiAgICAgICAgY29uc3Qgc2xvdCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdzbG90Jyk7XG4gICAgICAgIHJldHVybiBzbG90ICYmIHNsb3QuYXNzaWduZWRFbGVtZW50cygpO1xuICAgIH1cblxuICAgIF9vbktleURvd24gKGtleUNvZGUsIGksIE4sIGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgX2kgPSBpO1xuICAgICAgICBzd2l0Y2ggKGtleUNvZGUpIHtcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5MRUZUOlxuICAgICAgICAgICAgICAgIF9pID0gKE4gKyAtLV9pKSAlIE47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuUklHSFQ6XG4gICAgICAgICAgICAgICAgX2kgPSArK19pICUgTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5TUEFDRTpcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2dldENhcmRzKCk7XG4gICAgICAgICAgICAgICAgY2FyZHNbaV0ub25DbGljaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGkgIT09IF9pKSB7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0taScsIF9pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX2k7XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtY29udGFpbmVyJywgQ2FyZENvbnRhaW5lcik7IiwiaW1wb3J0IENhcmRFbGVtZW50IGZyb20gJy4vY2FyZCc7XG5cbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgLmNhcmR7XG4gICAgICAgIHBlcnNwZWN0aXZlOiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpICogNCk7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19jb250YWluZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIC8qSW5kaWNhdGVzIHRoYXQgdGhlIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50IHNob3VsZCBiZSBwb3NpdGlvbmVkIGluIHRoZSAzRC1zcGFjZS4qL1xuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIH1cblxuICAgIC5jYXJkX19zaGFkb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19mYWNlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtZmFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLXRleHQpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAuY2FyZF9fZmFjZS0tYmFjayB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5jYXJkLmlzLWZsaXBwZWQgPiAuY2FyZF9fY29udGFpbmVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmNhcmQuaXMtZmxpcHBlZCB+IC5jYXJkX19zaGFkb3cge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG4gICAgPC9zdHlsZT4gICAgXG4gIGA7XG5cbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCI+XG4gICAgPHNsb3QgbmFtZT1cImZyb250XCI+PC9zbG90PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCI+XG4gICAgPHNsb3QgbmFtZT1cImJhY2tcIj48L3Nsb3Q+XG48L2Rpdj5cbmA7XG5cbmNsYXNzIENhcmRGbGlwIGV4dGVuZHMgQ2FyZEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5fY2FyZENvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSlcbiAgICB9XG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5jYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1mbGlwcGVkXCIpO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtZmxpcCcsIENhcmRGbGlwKTsiLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIC8qVGhlIGNvbnRhaW4gQ1NTIHByb3BlcnR5IGFsbG93cyBhbiBhdXRob3IgXG4gICAgICAgIHRvIGluZGljYXRlIHRoYXQgYW4gZWxlbWVudCBhbmQgaXRzIGNvbnRlbnRzIGFyZSwgXG4gICAgICAgIGFzIG11Y2ggYXMgcG9zc2libGUsIGluZGVwZW5kZW50IG9mIHRoZSByZXN0IG9mIHRoZSBkb2N1bWVudCB0cmVlLiovXG4gICAgICAgIGNvbnRhaW46IGNvbnRlbnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDojNzhDN0RFO1xuICAgICAgICAtLWNhcmQtZmFjZTogI0E0REJFQTtcbiAgICAgICAgLS1jYXJkLXRleHQ6ICMyOTMxMzI7XG4gICAgICAgIC0tY29udGFpbmVyLXdpZHRoOiAxMDB2dztcbiAgICAgICAgLS1jb250YWluZXItaGVpZ2h0OiAxMDB2aDtcbiAgICAgICAgLS1jYXJkLXdpZHRoOiAyNTBweDtcbiAgICAgICAgLS1jYXJkLWhlaWdodDogNDYwcHg7XG4gICAgICAgIC0tY2FyZC1zaGFkb3c6IDIwcHggMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgLTIwcHggMjBweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5zY2VuZSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuY2FyZF9fY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2hhZG93OiAxcHggMXB4IDAgIzgzY2RlMjtcbiAgICB9XG5cbiAgICAuY2FyZF9fc2hhZG93IHtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tY2FyZC1zaGFkb3cpO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogOTAlO1xuICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX3NoYWRvd1wiPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYDtcblxuY2xhc3MgQ2FyZEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIHRoaXMuX2NhcmRDb250YWluZXIgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIi5jYXJkX19jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMuY2FyZCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIik7XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2sgKCkge1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2EtY2FyZCcsIENhcmRFbGVtZW50KTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZEVsZW1lbnQ7Il0sInNvdXJjZVJvb3QiOiIifQ==