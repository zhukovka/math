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
/* harmony import */ var _components_card_flip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/card-flip */ "./js/components/card-flip.js");
/* harmony import */ var _components_card_flip__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_card_flip__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_card_container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/card-container */ "./js/components/card-container.js");
/* harmony import */ var _components_card_container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_card_container__WEBPACK_IMPORTED_MODULE_1__);



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
        --card-shadow: 20px 20px 20px rgba(0, 0, 0, 0.1), -20px 20px 20px rgba(0, 0, 0, 0.1);
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
/*! no static exports found */
/***/ (function(module, exports) {

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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtZmxpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4Qzs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdUQ7Ozs7Ozs7Ozs7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw2QyIsImZpbGUiOiJjYXJkcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvY2FyZHMuanNcIik7XG4iLCJpbXBvcnQgXCIuL2NvbXBvbmVudHMvY2FyZC1mbGlwXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lclwiIiwiY29uc3QgS0VZQ09ERSA9IHtcbiAgICBET1dOOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBSSUdIVDogMzksXG4gICAgVVA6IDM4LFxuICAgIEhPTUU6IDM2LFxuICAgIEVORDogMzUsXG4gICAgU1BBQ0U6IDMyXG59O1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLS1jYXJkLXNoYWRvdzogMjBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCAtMjBweCAyMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgLS1uOiAxO1xuICAgICAgICAtLWk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tbikgKiAxMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1pKSAvIHZhcigtLW4pICogLTEwMCUpKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcbiAgICB9XG5cbiAgICAuY29udHJvbHMge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgICBcbiAgICAuY29udHJvbHM6YWZ0ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgI3ByZXYge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICBcbiAgICAjcHJldjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICBcbiAgICAjbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICAjbmV4dDphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgICAgICByaWdodDogMzAlO1xuICAgIH1cbjwvc3R5bGU+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+XG48ZGl2IGlkPVwicHJldlwiIGNsYXNzPVwiY29udHJvbHNcIj5cbjwvZGl2PlxuPGRpdiBpZD1cIm5leHRcIiBjbGFzcz1cImNvbnRyb2xzXCI+XG48L2Rpdj5cbmA7XG5cbmNsYXNzIENhcmRDb250YWluZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9vbktleURvd24gPSB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5hdHRhY2hTaGFkb3coe21vZGU6ICdvcGVuJ30pO1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gICAgfVxuXG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuXG5cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgICAgICAgICAgIG5leHQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI25leHQnKSxcbiAgICAgICAgICAgIHByZXYgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignI3ByZXYnKSxcbiAgICAgICAgICAgIGNhcmRzID0gdGhpcy5fZ2V0Q2FyZHMoKSxcbiAgICAgICAgICAgIE4gPSBjYXJkcyAmJiBjYXJkcy5sZW5ndGg7XG5cbiAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLW4nLCBOKTtcblxuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgaSA9IHRoaXMuX29uS2V5RG93bihLRVlDT0RFLlJJR0hULCBpLCBOLCBjb250YWluZXIpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJldi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICAgICAgICBpID0gdGhpcy5fb25LZXlEb3duKEtFWUNPREUuTEVGVCwgaSwgTiwgY29udGFpbmVyKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgaSA9IHRoaXMuX29uS2V5RG93bihlLmtleUNvZGUsIGksIE4sIGNvbnRhaW5lcik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRDYXJkcyAoKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xuICAgICAgICByZXR1cm4gc2xvdCAmJiBzbG90LmFzc2lnbmVkRWxlbWVudHMoKTtcbiAgICB9XG5cbiAgICBfb25LZXlEb3duIChrZXlDb2RlLCBpLCBOLCBjb250YWluZXIpIHtcbiAgICAgICAgbGV0IF9pID0gaTtcbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuTEVGVDpcbiAgICAgICAgICAgICAgICBfaSA9IChOICsgLS1faSkgJSBOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLlJJR0hUOlxuICAgICAgICAgICAgICAgIF9pID0gKytfaSAlIE47XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpO1xuICAgICAgICAgICAgICAgIGNhcmRzW2ldLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpICE9PSBfaSkge1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnNldFByb3BlcnR5KCctLWknLCBfaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9pO1xuICAgIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLWNvbnRhaW5lcicsIENhcmRDb250YWluZXIpOyIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLypUaGUgY29udGFpbiBDU1MgcHJvcGVydHkgYWxsb3dzIGFuIGF1dGhvciBcbiAgICAgICAgdG8gaW5kaWNhdGUgdGhhdCBhbiBlbGVtZW50IGFuZCBpdHMgY29udGVudHMgYXJlLCBcbiAgICAgICAgYXMgbXVjaCBhcyBwb3NzaWJsZSwgaW5kZXBlbmRlbnQgb2YgdGhlIHJlc3Qgb2YgdGhlIGRvY3VtZW50IHRyZWUuKi9cbiAgICAgICAgY29udGFpbjogY29udGVudDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiM3OEM3REU7XG4gICAgICAgIC0tY2FyZC1mYWNlOiAjQTREQkVBO1xuICAgICAgICAtLWNhcmQtdGV4dDogIzI5MzEzMjtcbiAgICAgICAgLS1jb250YWluZXItd2lkdGg6IDEwMHZ3O1xuICAgICAgICAtLWNvbnRhaW5lci1oZWlnaHQ6IDEwMHZoO1xuICAgICAgICAtLWNhcmQtd2lkdGg6IDI1MHB4O1xuICAgICAgICAtLWNhcmQtaGVpZ2h0OiA0NjBweDtcbiAgICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLWNvbnRhaW5lci13aWR0aCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY29udGFpbmVyLWhlaWdodCk7XG5cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xuICAgIH1cblxuICAgIC5zY2VuZSB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1jYXJkLXdpZHRoKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJkLWhlaWdodCk7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNhcmR7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLypUaGUgcGVyc3BlY3RpdmUgQ1NTIHByb3BlcnR5IGRldGVybWluZXMgdGhlXG4gICAgICAgIGRpc3RhbmNlIGJldHdlZW4gdGhlIHo9MCBwbGFuZSBhbmQgdGhlIHVzZXJcbiAgICAgICAgaW4gb3JkZXIgdG8gZ2l2ZSBhIDNELXBvc2l0aW9uZWQgZWxlbWVudCBzb21lIHBlcnNwZWN0aXZlLiovXG4gICAgICAgIHBlcnNwZWN0aXZlOiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpICogNCk7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmNhcmRfX2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAvKkluZGljYXRlcyB0aGF0IHRoZSBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCBzaG91bGQgYmUgcG9zaXRpb25lZCBpbiB0aGUgM0Qtc3BhY2UuKi9cbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDFweCAwICM4M2NkZTI7XG4gICAgfVxuXG4gICAgLmNhcmRfX3NoYWRvdyB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWNhcmQtc2hhZG93KTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBoZWlnaHQ6IDkwJTtcbiAgICAgICAgd2lkdGg6IDkwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmNhcmRfX2ZhY2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY2FyZC1mYWNlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNhcmQtdGV4dCk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuXG4gICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuY2FyZC5pcy1mbGlwcGVkID4gLmNhcmRfX2NvbnRhaW5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5jYXJkLmlzLWZsaXBwZWQgfiAuY2FyZF9fc2hhZG93IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2NlbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImZyb250XCI+PC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImJhY2tcIj48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fc2hhZG93XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG5jbGFzcyBDYXJkRmxpcCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX29uU2xvdENoYW5nZSA9IHRoaXMuX29uU2xvdENoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG5cbiAgICAgICAgdGhpcy5jYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKTtcbiAgICAgICAgdGhpcy5fZnJvbnRTbG90ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3RbbmFtZT1mcm9udF0nKTtcbiAgICAgICAgdGhpcy5fYmFja1Nsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdFtuYW1lPWJhY2tdJyk7XG4gICAgICAgIHRoaXMuX2Zyb250U2xvdC5hZGRFdmVudExpc3RlbmVyKCdzbG90Y2hhbmdlJywgdGhpcy5fb25TbG90Q2hhbmdlKTtcbiAgICAgICAgdGhpcy5fYmFja1Nsb3QuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuX29uU2xvdENoYW5nZSk7XG4gICAgfVxuXG4gICAgX29uU2xvdENoYW5nZSAoKSB7XG5cbiAgICB9O1xuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWZsaXBwZWRcIik7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2FyZC1mbGlwJywgQ2FyZEZsaXApOyJdLCJzb3VyY2VSb290IjoiIn0=