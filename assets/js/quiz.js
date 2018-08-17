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
    }

    connectedCallback () {
        console.log("card-quiz", this.shadowRoot.querySelectorAll("label"))
    }

    set correct (yes) {
        const options = this.querySelector("quiz-options");
        options.correct = yes
    }

    get answer () {
        const options = this.querySelector("quiz-options");
        return {key: options.name, value: options.value}
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
        
        --container-width: 100vw;
        --container-height: 100vh;
        --card-width: 80vw;
        --card-height: 80vh;
        --shadow-x: calc(var(--card-width) * 0.075);
        --card-shadow:  var(--shadow-x) var(--shadow-x) 20px rgba(0, 0, 0, 0.1), calc( -1 * var(--shadow-x)) var(--shadow-x) 20px rgba(0, 0, 0, 0.1);
      }
      
    /* Desktops and laptops ----------- */
    @media only screen  and (min-width : 768px) {
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
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        width: 70%;
        align-self: center;
    }
    p {
        line-height: 1;
        
    }
    label {
        display: flex;
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
        visibility: hidden;
    }
    
    input[type=radio]:checked ~ label{
        background: #275345;
        color: #e8e2ca;
    }
    
    label:after {
        position: absolute;
        right: -45px;
        top: -5px;
        font-size: 3rem;
        color: #e8e2ca;
    }
    
    label[correct=true]:after{
        content: '✔︎';
    }
    label[correct=false]:after{
        content: '✘';
    }
    
</style>
<div class="options">

</div>

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
            return `<p><input type="radio" name="${name}" id="${id}" value="${option}"><label for="${id}">${option}</label></p>`
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
                    card.correct = answers[key].toLowerCase() === value.toLowerCase();
                    console.log(answers[key], value)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtcXVpei5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWV4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvcXVpei1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2pzL3F1aXouanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNIZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUQ7Ozs7Ozs7Ozs7Ozs7O0FDN05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZDOzs7Ozs7Ozs7Ozs7OztBQ3JFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBOztBQUVBLDZDOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsNEU7Ozs7Ozs7Ozs7O0FDNUlBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRGQUE0RjtBQUM1RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEseUQ7Ozs7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLFVBQVUsYUFBYSxZQUFZO0FBQ3BFO0FBQ0E7O0FBRUEscUQ7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLEtBQUssRUFBRSwwQkFBMEI7QUFDM0QsbURBQW1ELEtBQUssUUFBUSxHQUFHLFdBQVcsT0FBTyxnQkFBZ0IsR0FBRyxJQUFJLE9BQU87QUFDbkgsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtDQUErQyxJQUFJO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUQ7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFFBQVEsVUFBVSxZQUFZO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsV0FBVztBQUNwQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJxdWl6LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qcy9xdWl6LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmRcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtZmxpcFwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvY2FyZC1jb250YWluZXJcIlxuaW1wb3J0ICcuL2NvbXBvbmVudHMvbWF0aC1leHByZXNzaW9uJztcbmltcG9ydCAnLi9jb21wb25lbnRzL21hdGgtZnJhY3Rpb24nOyIsImltcG9ydCB7c2h1ZmZsZX0gZnJvbSAnLi4vdXRpbHMnO1xuXG5jb25zdCBLRVlDT0RFID0ge1xuICAgIERPV046IDQwLFxuICAgIExFRlQ6IDM3LFxuICAgIFJJR0hUOiAzOSxcbiAgICBVUDogMzgsXG4gICAgSE9NRTogMzYsXG4gICAgRU5EOiAzNSxcbiAgICBTUEFDRTogMzJcbn07XG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG48c3R5bGU+XG4gICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtLWluZGljYXRvci1zaXplOiAydnc7XG4gICAgICAgIC0taW5kaWNhdG9yLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuMyk7XG4gICAgICAgIC0tYWN0aXZlLWluZGljYXRvcjogd2hpdGU7XG4gICAgfVxuICAgIC8qIERlc2t0b3BzIGFuZCBsYXB0b3BzIC0tLS0tLS0tLS0tICovXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDc2OHB4KSB7XG4gICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgIC0taW5kaWNhdG9yLXNpemU6IDF2dztcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gIGFuZCAobWluLXdpZHRoIDogMTQwMHB4KSB7XG4gICAgICAgIC8qIFN0eWxlcyAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgIC0taW5kaWNhdG9yLXNpemU6IDAuNXZ3O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jb250YWluZXIge1xuICAgICAgICAtLW46IDE7XG4gICAgICAgIC0taTogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1uKSAqIDEwMCUpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKHZhcigtLWkpIC8gdmFyKC0tbikgKiAtMTAwJSkpO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjVzIGVhc2Utb3V0O1xuICAgIH1cbiAgICAuaW5kaWNhdG9yc3tcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwdmg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmluZGljYXRvcntcbiAgICAgICAgd2lkdGg6IHZhcigtLWluZGljYXRvci1zaXplKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pbmRpY2F0b3Itc2l6ZSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWluZGljYXRvci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgbWFyZ2luOiA1cHg7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC5jb250cm9scyB7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMCU7XG4gICAgfVxuICAgIFxuICAgIC5jb250cm9sczphZnRlcntcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIGJvcmRlcjogMTBweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAjcHJldiB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgfVxuICAgIFxuICAgICNwcmV2OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgbGVmdDogMzAlO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICAgIFxuICAgICNuZXh0IHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgICNuZXh0OmFmdGVye1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gICAgICAgIHJpZ2h0OiAzMCU7XG4gICAgfVxuICAgIFxuICAgIGxhYmVsW2Zvcj1cInNodWZmbGVcIl17XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB9ICAgIFxuPC9zdHlsZT5cbjx1bCBjbGFzcz1cImluZGljYXRvcnNcIj5cbiAgICBcbjwvdWw+XG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgPHNsb3Q+PC9zbG90PlxuPC9kaXY+XG48ZGl2IGlkPVwicHJldlwiIGNsYXNzPVwiY29udHJvbHNcIj5cbjwvZGl2PlxuPGRpdiBpZD1cIm5leHRcIiBjbGFzcz1cImNvbnRyb2xzXCI+XG48L2Rpdj5cblxuPGxhYmVsIGZvcj1cInNodWZmbGVcIj5cbiAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgIGlkPVwic2h1ZmZsZVwiPlxuICAgIFNodWZmbGVcbjwvbGFiZWw+XG5gO1xuXG5jbGFzcyBDYXJkQ29udGFpbmVyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5fb25LZXlEb3duID0gdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5zaHVmZmxlID0gZmFsc2U7XG4gICAgfVxuXG4gICAgc2V0IGN1cnJlbnRDYXJkIChpKSB7XG4gICAgICAgIGlmIChpID09PSB0aGlzLl9jdXJyZW50Q2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWluZXInKSxcbiAgICAgICAgICAgIGluZGljYXRvcnMgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvckFsbCgnLmluZGljYXRvcicpO1xuXG4gICAgICAgIGluZGljYXRvcnNbaV0uc3R5bGUuc2V0UHJvcGVydHkoJy0taW5kaWNhdG9yLWNvbG9yJywgJ3ZhcigtLWFjdGl2ZS1pbmRpY2F0b3IpJyk7XG5cbiAgICAgICAgbGV0IGluZGljYXRvciA9IGluZGljYXRvcnNbdGhpcy5fY3VycmVudENhcmRdO1xuICAgICAgICBpZiAoaW5kaWNhdG9yKSB7XG4gICAgICAgICAgICBpbmRpY2F0b3Iuc3R5bGUucmVtb3ZlUHJvcGVydHkoJy0taW5kaWNhdG9yLWNvbG9yJyk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pJywgaSk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDYXJkID0gaTtcbiAgICB9XG5cbiAgICBnZXQgY2FyZCgpe1xuICAgICAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2dldENhcmRzKCk7XG4gICAgICAgIHJldHVybiBjYXJkc1t0aGlzLl9jdXJyZW50Q2FyZF07XG4gICAgfVxuXG4gICAgY29ubmVjdGVkQ2FsbGJhY2sgKCkge1xuICAgICAgICBpZiAoIXRoaXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKVxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcblxuXG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gICAgICAgICAgICBpbmRpY2F0b3JzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJy5pbmRpY2F0b3JzJyksXG4gICAgICAgICAgICBuZXh0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNuZXh0JyksXG4gICAgICAgICAgICBwcmV2ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNwcmV2JyksXG4gICAgICAgICAgICBzaHVmZmxlQnRuID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJyNzaHVmZmxlJyksXG4gICAgICAgICAgICBjYXJkcyA9IHRoaXMuX2dldENhcmRzKCksXG4gICAgICAgICAgICBOID0gY2FyZHMgJiYgY2FyZHMubGVuZ3RoO1xuXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1uJywgTik7XG5cbiAgICAgICAgaW5kaWNhdG9ycy5pbm5lckhUTUwgPSBbLi4uKG5ldyBBcnJheShOKSldLm1hcChuID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPGxpIGNsYXNzPVwiaW5kaWNhdG9yXCI+PC9saT5gO1xuICAgICAgICB9KS5qb2luKCcnKTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gMDtcbiAgICAgICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IHRoaXMuX29uS2V5RG93bihLRVlDT0RFLlJJR0hULCBOKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSB0aGlzLl9vbktleURvd24oS0VZQ09ERS5MRUZULCBOKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IHRoaXMuX29uS2V5RG93bihlLmtleUNvZGUsIE4pO1xuICAgICAgICB9KTtcbiAgICAgICAgc2h1ZmZsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2h1ZmZsZSA9ICF0aGlzLnNodWZmbGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIF9nZXRDYXJkcyAoKSB7XG4gICAgICAgIGNvbnN0IHNsb3QgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3Rvcignc2xvdCcpO1xuICAgICAgICByZXR1cm4gc2xvdCAmJiBzbG90LmFzc2lnbmVkTm9kZXMoKS5maWx0ZXIobiA9PiBuIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpO1xuICAgIH1cblxuICAgIF9vbktleURvd24gKGtleUNvZGUsIE4pIHtcbiAgICAgICAgbGV0IGkgPSB0aGlzLl9jdXJyZW50Q2FyZDtcbiAgICAgICAgc3dpdGNoIChrZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuTEVGVDpcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5zaHVmZmxlID8gKE1hdGgucmFuZG9tKCkgKiBOKSB8IDAgOiAoTiArIC0taSkgJSBOO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLlJJR0hUOlxuICAgICAgICAgICAgICAgIGkgPSB0aGlzLnNodWZmbGUgPyAoTWF0aC5yYW5kb20oKSAqIE4pIHwgMCA6ICgrK2kpICUgTiA7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIEtFWUNPREUuU1BBQ0U6XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpO1xuICAgICAgICAgICAgICAgIGNhcmRzW2ldLm9uQ2xpY2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtY29udGFpbmVyJywgQ2FyZENvbnRhaW5lcik7IiwiaW1wb3J0IENhcmRFbGVtZW50IGZyb20gJy4vY2FyZCc7XG5cbmNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnN0eWxlLmlubmVySFRNTCA9IGBcbiAgICA8c3R5bGU+XG4gICAgLmNhcmR7XG4gICAgICAgIHBlcnNwZWN0aXZlOiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpICogNCk7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19jb250YWluZXIge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIC8qSW5kaWNhdGVzIHRoYXQgdGhlIGNoaWxkcmVuIG9mIHRoZSBlbGVtZW50IHNob3VsZCBiZSBwb3NpdGlvbmVkIGluIHRoZSAzRC1zcGFjZS4qL1xuICAgICAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICAgIH1cblxuICAgIC5jYXJkX19zaGFkb3cge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XG4gICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgIC8qU2FmYXJpIHdvcmthcm91bmQqL1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVooLTEwMDBweCk7XG4gICAgfVxuICAgIFxuICAgIC5jYXJkX19mYWNlIHtcbiAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICB9XG4gICAgLmNhcmRfX2ZhY2UtLWJhY2sge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuY2FyZC5pcy1mbGlwcGVkID4gLmNhcmRfX2NvbnRhaW5lciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5jYXJkLmlzLWZsaXBwZWQgfiAuY2FyZF9fc2hhZG93IHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuICAgIDo6c2xvdHRlZCgqKSB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gICAgPC9zdHlsZT4gICAgXG4gIGA7XG5cbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbjxkaXYgY2xhc3M9XCJjYXJkX19mYWNlIGNhcmRfX2ZhY2UtLWZyb250XCI+XG4gICAgPHNsb3QgbmFtZT1cImZyb250XCI+PC9zbG90PlxuPC9kaXY+XG48ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1iYWNrXCI+XG4gICAgPHNsb3QgbmFtZT1cImJhY2tcIj48L3Nsb3Q+XG48L2Rpdj5cbmA7XG5cbmNsYXNzIENhcmRGbGlwIGV4dGVuZHMgQ2FyZEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQoc3R5bGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICAvL3BhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld0NoaWxkLCBvbGRDaGlsZCk7XG4gICAgICAgIHRoaXMuX2NhcmRDb250YWluZXIucmVwbGFjZUNoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpLCB0aGlzLl9jYXJkQ29udGFpbmVyLmZpcnN0RWxlbWVudENoaWxkKVxuICAgIH1cblxuICAgIG9uQ2xpY2sgKCkge1xuICAgICAgICB0aGlzLmNhcmQuY2xhc3NMaXN0LnRvZ2dsZShcImlzLWZsaXBwZWRcIik7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2FyZC1mbGlwJywgQ2FyZEZsaXApOyIsImltcG9ydCBDYXJkRWxlbWVudCBmcm9tICcuL2NhcmQnO1xuXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5zdHlsZS5pbm5lckhUTUwgPSBgXG48c3R5bGU+XG4gICAgLmNhcmRfX2ZhY2Uge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuICAgIFxuPC9zdHlsZT5cbmA7XG5cbmNsYXNzIENhcmRRdWl6IGV4dGVuZHMgQ2FyZEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FyZC1xdWl6XCIsIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIikpXG4gICAgfVxuXG4gICAgc2V0IGNvcnJlY3QgKHllcykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwicXVpei1vcHRpb25zXCIpO1xuICAgICAgICBvcHRpb25zLmNvcnJlY3QgPSB5ZXNcbiAgICB9XG5cbiAgICBnZXQgYW5zd2VyICgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucXVlcnlTZWxlY3RvcihcInF1aXotb3B0aW9uc1wiKTtcbiAgICAgICAgcmV0dXJuIHtrZXk6IG9wdGlvbnMubmFtZSwgdmFsdWU6IG9wdGlvbnMudmFsdWV9XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtcXVpeicsIENhcmRRdWl6KTsiLCJjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5zdHlsZS5pbm5lckhUTUwgPSBgXG48c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLypUaGUgY29udGFpbiBDU1MgcHJvcGVydHkgYWxsb3dzIGFuIGF1dGhvciBcbiAgICAgICAgdG8gaW5kaWNhdGUgdGhhdCBhbiBlbGVtZW50IGFuZCBpdHMgY29udGVudHMgYXJlLCBcbiAgICAgICAgYXMgbXVjaCBhcyBwb3NzaWJsZSwgaW5kZXBlbmRlbnQgb2YgdGhlIHJlc3Qgb2YgdGhlIGRvY3VtZW50IHRyZWUuKi9cbiAgICAgICAgY29udGFpbjogY29udGVudDtcbiAgICAgICAgXG4gICAgICAgIC0tYmFja2dyb3VuZDojNzhDN0RFO1xuICAgICAgICAtLWNhcmQtZmFjZTogI0E0REJFQTtcbiAgICAgICAgLS1jYXJkLXRleHQ6ICMyOTMxMzI7XG4gICAgICAgIFxuICAgICAgICAtLWNvbnRhaW5lci13aWR0aDogMTAwdnc7XG4gICAgICAgIC0tY29udGFpbmVyLWhlaWdodDogMTAwdmg7XG4gICAgICAgIC0tY2FyZC13aWR0aDogODB2dztcbiAgICAgICAgLS1jYXJkLWhlaWdodDogODB2aDtcbiAgICAgICAgLS1zaGFkb3cteDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDAuMDc1KTtcbiAgICAgICAgLS1jYXJkLXNoYWRvdzogIHZhcigtLXNoYWRvdy14KSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGNhbGMoIC0xICogdmFyKC0tc2hhZG93LXgpKSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICBcbiAgICAvKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiA3NjhweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWNhcmQtd2lkdGg6IDUwdnc7XG4gICAgICAgICAgIC0tY2FyZC1oZWlnaHQ6IDUwdmg7XG4gICAgICAgICAgIC0tc2hhZG93LXg6IGNhbGModmFyKC0tY2FyZC13aWR0aCkgKiAwLjA3NSk7XG4gICAgICAgICAgIC0tY2FyZC1zaGFkb3c6ICB2YXIoLS1zaGFkb3cteCkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBjYWxjKCAtMSAqIHZhcigtLXNoYWRvdy14KSkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiAxMjAwcHgpIHtcbiAgICAgICAgLyogU3R5bGVzICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgLS1jYXJkLXdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAtLWNhcmQtaGVpZ2h0OiA0MHZoO1xuICAgICAgICAgICAtLXNoYWRvdy14OiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpICogMC4wNzUpO1xuICAgICAgICAgICAtLWNhcmQtc2hhZG93OiAgdmFyKC0tc2hhZG93LXgpIHZhcigtLXNoYWRvdy14KSAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgY2FsYyggLTEgKiB2YXIoLS1zaGFkb3cteCkpIHZhcigtLXNoYWRvdy14KSAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICA6aG9zdCguZ3JlZW4pIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNDg4ZTVlO1xuICAgICAgICAtLWNhcmQtZmFjZTogIzY2YjI3ZTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvbnRhaW5lci1oZWlnaHQpO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICB9XG5cbiAgICAuc2NlbmUge1xuICAgICAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jYXJke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmNhcmRfX2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLypib3gtc2hhZG93OiAxcHggMXB4IDAgIzgzY2RlMjsqL1xuICAgIH1cblxuICAgIC5jYXJkX19zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmRfX2ZhY2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtZmFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLXRleHQpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICA8L3N0eWxlPlxuYDtcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19mYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fc2hhZG93XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG5jbGFzcyBDYXJkRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5fY2FyZENvbnRhaW5lciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2NvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5jYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljayAoKSB7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYS1jYXJkJywgQ2FyZEVsZW1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkRWxlbWVudDsiLCJjbGFzcyBNYXRoRXhwcmVzc2lvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7IC8vIGFsd2F5cyBjYWxsIHN1cGVyKCkgZmlyc3QgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJtYXRoXCIpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBsZXQgdGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0ZXh0Q29udGVudC5yZXBsYWNlKC9bYS16XS9nLCBcIjxpPiQmPC9pPlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiJm5ic3A7XCIpO1xuICAgICAgICAgICAgaWYodGV4dENvbnRlbnQuaW5jbHVkZXMoXCIvXCIpKXtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oXFxkKlxcL1xcZCkvZywgXCI8bWF0aC1mcmFjdGlvbj4kJjwvbWF0aC1mcmFjdGlvbj5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBub2RlLm91dGVySFRNTDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0aC1leHByZXNzaW9uJywgTWF0aEV4cHJlc3Npb24pOyIsImNsYXNzIE1hdGhGcmFjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7IC8vIGFsd2F5cyBjYWxsIHN1cGVyKCkgZmlyc3QgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBbbnVtZXJhdG9yLCBkZW5vbWluYXRvcl0gPSBjb250ZW50LnNwbGl0KFwiL1wiKTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBgPHN1cD4ke251bWVyYXRvcn08L3N1cD48c3ViPiR7ZGVub21pbmF0b3J9PC9zdWI+YDtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0aC1mcmFjdGlvbicsIE1hdGhGcmFjdGlvbik7IiwiY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuc3R5bGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgXG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U4ZTJjYTtcbiAgICAgICAgY29sb3I6ICMyNzUzNDU7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyptYXJnaW4tYm90dG9tOiAycmVtOyovXG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1yYWRpb117XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gbGFiZWx7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNzUzNDU7XG4gICAgICAgIGNvbG9yOiAjZThlMmNhO1xuICAgIH1cbiAgICBcbiAgICBsYWJlbDphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC00NXB4O1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgY29sb3I6ICNlOGUyY2E7XG4gICAgfVxuICAgIFxuICAgIGxhYmVsW2NvcnJlY3Q9dHJ1ZV06YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICfinJTvuI4nO1xuICAgIH1cbiAgICBsYWJlbFtjb3JyZWN0PWZhbHNlXTphZnRlcntcbiAgICAgICAgY29udGVudDogJ+KcmCc7XG4gICAgfVxuICAgIFxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XG5cbjwvZGl2PlxuXG5gO1xuXG5jbGFzcyBRdWl6T3B0aW9ucyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJxdWl6LW9wdGlvblwiO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJvcHRpb25zXCIpIHx8IFwiXCI7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuaW5uZXJIVE1MID0gb3B0aW9ucy5zcGxpdChcIixcIikubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7bmFtZX0ke29wdGlvbi5yZXBsYWNlKC9cXHMvZywgXCJcIil9YDtcbiAgICAgICAgICAgIHJldHVybiBgPHA+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCIke25hbWV9XCIgaWQ9XCIke2lkfVwiIHZhbHVlPVwiJHtvcHRpb259XCI+PGxhYmVsIGZvcj1cIiR7aWR9XCI+JHtvcHRpb259PC9sYWJlbD48L3A+YFxuICAgICAgICB9KS5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHNldCBjb3JyZWN0ICh5ZXMpIHtcbiAgICAgICAgY29uc3QgcHJldkNoZWNrZWQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImxhYmVsW2NvcnJlY3RdXCIpO1xuICAgICAgICBpZiAocHJldkNoZWNrZWQpIHtcbiAgICAgICAgICAgIHByZXZDaGVja2VkLnJlbW92ZUF0dHJpYnV0ZShcImNvcnJlY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gbGFiZWxcIik7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZShcImNvcnJlY3RcIiwgYCR7eWVzfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IFwicXVpei1vcHRpb25cIjtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUgKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX29wdGlvbnMucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gICAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dC52YWx1ZTtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncXVpei1vcHRpb25zJywgUXVpek9wdGlvbnMpOyIsImltcG9ydCBcIi4vY2FyZHNcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtcXVpelwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvcXVpei1vcHRpb25zXCJcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFuc3dlcnMgKCkge1xuICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBmZXRjaChcIi4vYS5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSk7XG4gICAgY29uc3QgcXVpekZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcInF1aXpcIl07XG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKTtcbiAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsYWluXCIpO1xuXG4gICAgaWYgKHF1aXpGb3JtICYmIHJlc3VsdHMpIHtcbiAgICAgICAgcXVpekZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGNvcnJlY3QgPSAwO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFuc3dlcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBxdWl6Rm9ybS5lbGVtZW50c1trXTtcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyID0gYW5zd2Vyc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IFwiY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0cy5pbm5lckhUTUwgPSBgJHtjb3JyZWN0fSBvdXQgb2YgJHtrZXlzLmxlbmd0aH0gY29ycmVjdGA7XG4gICAgICAgICAgICBpZiAoZXhwbGFpbikge1xuICAgICAgICAgICAgICAgIGV4cGxhaW4uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHF1aXpDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYXJkLXF1aXpcIik7XG5cbiAgICBpZiAocXVpekNhcmRzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNhcmQgb2YgcXVpekNhcmRzKSB7XG5cbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQge2tleSwgdmFsdWV9ID0gY2FyZC5hbnN3ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29ycmVjdCA9IGFuc3dlcnNba2V5XS50b0xvd2VyQ2FzZSgpID09PSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhbnN3ZXJzW2tleV0sIHZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGV4cGxhaW4pIHtcblxuICAgICAgICBleHBsYWluLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV4cGxhbmF0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZXhwbGFuYXRpb25cIik7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV4cGxhbmF0aW9uIG9mIGV4cGxhbmF0aW9ucykge1xuICAgICAgICAgICAgICAgIGV4cGxhbmF0aW9uLnN0eWxlLnJlbW92ZVByb3BlcnR5KFwiZGlzcGxheVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmZ1bmN0aW9uIHNodWZmbGUgKGFycmF5KSB7XG4gICAgbGV0IHNodWZmbGVkQXJyYXkgPSBbXTtcbiAgICB3aGlsZSAoYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5yYW5kb20oKSAqIChhcnJheS5sZW5ndGgpIHwgMDtcbiAgICAgICAgbGV0IHNwbGljZSA9IGFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgc2h1ZmZsZWRBcnJheS5wdXNoKHNwbGljZVswXSk7XG4gICAgfVxuICAgIHJldHVybiBzaHVmZmxlZEFycmF5O1xufVxuXG5mdW5jdGlvbiBzaHVmZmxlUXVlc3Rpb25zIChxdWVzdGlvbkxpc3RzKSB7XG4gICAgZm9yIChjb25zdCBxdWVzdGlvbnMgb2YgcXVlc3Rpb25MaXN0cykge1xuICAgICAgICBjb25zdCBxID0gc2h1ZmZsZShbLi4ucXVlc3Rpb25zLmNoaWxkcmVuXSk7XG4gICAgICAgIGNvbnN0IGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgICAgICBxdWVzdGlvbnMuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgICAgZm9yIChjb25zdCBlbCBvZiBxKSB7XG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcXVlc3Rpb25zLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcbiAgICB9XG5cbn1cblxuY29uc3QgcXVlc3Rpb25zVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInF1ZXN0aW9uc1RlbXBsYXRlXCIpO1xuaWYgKHF1ZXN0aW9uc1RlbXBsYXRlKSB7XG4gICAgY29uc3QgY2xvbmVUZW1wbGF0ZSA9IGRvY3VtZW50LmltcG9ydE5vZGUocXVlc3Rpb25zVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XG4gICAgY29uc3QgcXVlc3Rpb25MaXN0cyA9IGNsb25lVGVtcGxhdGUucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbnNcIik7XG4gICAgc2h1ZmZsZVF1ZXN0aW9ucyhxdWVzdGlvbkxpc3RzKTtcbiAgICBjb25zdCBxdWVzdGlvbkNvbnRhaW5lcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc0NvbnRhaW5lclwiKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXN0aW9uQ29udGFpbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjb250YWluZXIgPSBxdWVzdGlvbkNvbnRhaW5lcnNbaV07XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdWVzdGlvbkxpc3RzW2ldKTtcbiAgICB9XG59XG5sb2FkQW5zd2VycygpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNodWZmbGUgKGFycmF5KSB7XG4gICAgbGV0IHNodWZmbGVkQXJyYXkgPSBbXTtcbiAgICB3aGlsZSAoYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGxldCBpID0gTWF0aC5yYW5kb20oKSAqIChhcnJheS5sZW5ndGgpIHwgMDtcbiAgICAgICAgbGV0IHNwbGljZSA9IGFycmF5LnNwbGljZShpLCAxKTtcbiAgICAgICAgc2h1ZmZsZWRBcnJheS5wdXNoKHNwbGljZVswXSk7XG4gICAgfVxuICAgIHJldHVybiBzaHVmZmxlZEFycmF5O1xufSJdLCJzb3VyY2VSb290IjoiIn0=