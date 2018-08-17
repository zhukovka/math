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
        const checkButton = document.createElement("button");
        checkButton.className = "check";
        checkButton.textContent = "Check";
        //<button class="check">Check</button>
        this.appendChild(checkButton);
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
                    card.correct = !!value && !!answers[key] && answers[key].toLowerCase() === value.toLowerCase();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vanMvY2FyZHMuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9jYXJkLWNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtZmxpcC5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQtcXVpei5qcyIsIndlYnBhY2s6Ly8vLi9qcy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWV4cHJlc3Npb24uanMiLCJ3ZWJwYWNrOi8vLy4vanMvY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2pzL2NvbXBvbmVudHMvcXVpei1vcHRpb25zLmpzIiwid2VicGFjazovLy8uL2pzL3F1aXouanMiLCJ3ZWJwYWNrOi8vLy4vanMvdXRpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNIZ0I7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEs7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsdUQ7Ozs7Ozs7Ozs7Ozs7O0FDN05BOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDZDOzs7Ozs7Ozs7Ozs7OztBQ3JFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTs7QUFFQSw2Qzs7Ozs7Ozs7Ozs7O0FDeENBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsYUFBYTtBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLDRFOzs7Ozs7Ozs7OztBQzVJQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0RkFBNEY7QUFDNUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlEOzs7Ozs7Ozs7OztBQzFCQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxVQUFVLGFBQWEsWUFBWTtBQUNwRTtBQUNBOztBQUVBLHFEOzs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixLQUFLLEVBQUUsMEJBQTBCO0FBQzNELG1EQUFtRCxLQUFLLFFBQVEsR0FBRyxXQUFXLE9BQU8sZ0JBQWdCLEdBQUcsSUFBSSxPQUFPO0FBQ25ILFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQ0FBK0MsSUFBSTtBQUNuRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1EOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxRQUFRLFVBQVUsWUFBWTtBQUNqRTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLFdBQVc7QUFDcEM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLCtCQUErQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMzRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoicXVpei5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vanMvcXVpei5qc1wiKTtcbiIsImltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkXCJcbmltcG9ydCBcIi4vY29tcG9uZW50cy9jYXJkLWZsaXBcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtY29udGFpbmVyXCJcbmltcG9ydCAnLi9jb21wb25lbnRzL21hdGgtZXhwcmVzc2lvbic7XG5pbXBvcnQgJy4vY29tcG9uZW50cy9tYXRoLWZyYWN0aW9uJzsiLCJpbXBvcnQge3NodWZmbGV9IGZyb20gJy4uL3V0aWxzJztcblxuY29uc3QgS0VZQ09ERSA9IHtcbiAgICBET1dOOiA0MCxcbiAgICBMRUZUOiAzNyxcbiAgICBSSUdIVDogMzksXG4gICAgVVA6IDM4LFxuICAgIEhPTUU6IDM2LFxuICAgIEVORDogMzUsXG4gICAgU1BBQ0U6IDMyXG59O1xuY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLS1pbmRpY2F0b3Itc2l6ZTogMnZ3O1xuICAgICAgICAtLWluZGljYXRvci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjMpO1xuICAgICAgICAtLWFjdGl2ZS1pbmRpY2F0b3I6IHdoaXRlO1xuICAgIH1cbiAgICAvKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiA3NjhweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWluZGljYXRvci1zaXplOiAxdnc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuICBhbmQgKG1pbi13aWR0aCA6IDE0MDBweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWluZGljYXRvci1zaXplOiAwLjV2dztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY29udGFpbmVyIHtcbiAgICAgICAgLS1uOiAxO1xuICAgICAgICAtLWk6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tbikgKiAxMDAlKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYyh2YXIoLS1pKSAvIHZhcigtLW4pICogLTEwMCUpKTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC41cyBlYXNlLW91dDtcbiAgICB9XG4gICAgLmluZGljYXRvcnN7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMHZoO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB6LWluZGV4OiA5OTk7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5pbmRpY2F0b3J7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1pbmRpY2F0b3Itc2l6ZSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0taW5kaWNhdG9yLXNpemUpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pbmRpY2F0b3ItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgIH1cbiAgICBcbiAgICBcbiAgICAuY29udHJvbHMge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgIH1cbiAgICBcbiAgICAuY29udHJvbHM6YWZ0ZXJ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAyMHB4O1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXI6IDEwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgI3ByZXYge1xuICAgICAgICBsZWZ0OiAwO1xuICAgIH1cbiAgICBcbiAgICAjcHJldjphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGxlZnQ6IDMwJTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cbiAgICBcbiAgICAjbmV4dCB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICAjbmV4dDphZnRlcntcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAgICAgICByaWdodDogMzAlO1xuICAgIH1cbiAgICBcbiAgICBsYWJlbFtmb3I9XCJzaHVmZmxlXCJde1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJvdHRvbTogMjBweDtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgfSAgICBcbjwvc3R5bGU+XG48dWwgY2xhc3M9XCJpbmRpY2F0b3JzXCI+XG4gICAgXG48L3VsPlxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgIDxzbG90Pjwvc2xvdD5cbjwvZGl2PlxuPGRpdiBpZD1cInByZXZcIiBjbGFzcz1cImNvbnRyb2xzXCI+XG48L2Rpdj5cbjxkaXYgaWQ9XCJuZXh0XCIgY2xhc3M9XCJjb250cm9sc1wiPlxuPC9kaXY+XG5cbjxsYWJlbCBmb3I9XCJzaHVmZmxlXCI+XG4gICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICBpZD1cInNodWZmbGVcIj5cbiAgICBTaHVmZmxlXG48L2xhYmVsPlxuYDtcblxuY2xhc3MgQ2FyZENvbnRhaW5lciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX29uS2V5RG93biA9IHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIHRoaXMuc2h1ZmZsZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHNldCBjdXJyZW50Q2FyZCAoaSkge1xuICAgICAgICBpZiAoaSA9PT0gdGhpcy5fY3VycmVudENhcmQpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY29udGFpbmVyJyksXG4gICAgICAgICAgICBpbmRpY2F0b3JzID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5pbmRpY2F0b3InKTtcblxuICAgICAgICBpbmRpY2F0b3JzW2ldLnN0eWxlLnNldFByb3BlcnR5KCctLWluZGljYXRvci1jb2xvcicsICd2YXIoLS1hY3RpdmUtaW5kaWNhdG9yKScpO1xuXG4gICAgICAgIGxldCBpbmRpY2F0b3IgPSBpbmRpY2F0b3JzW3RoaXMuX2N1cnJlbnRDYXJkXTtcbiAgICAgICAgaWYgKGluZGljYXRvcikge1xuICAgICAgICAgICAgaW5kaWNhdG9yLnN0eWxlLnJlbW92ZVByb3BlcnR5KCctLWluZGljYXRvci1jb2xvcicpO1xuICAgICAgICB9XG5cblxuICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0taScsIGkpO1xuICAgICAgICB0aGlzLl9jdXJyZW50Q2FyZCA9IGk7XG4gICAgfVxuXG4gICAgZ2V0IGNhcmQoKXtcbiAgICAgICAgY29uc3QgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpO1xuICAgICAgICByZXR1cm4gY2FyZHNbdGhpcy5fY3VycmVudENhcmRdO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSlcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICcwJyk7XG5cblxuICAgICAgICBjb25zdCBjb250YWluZXIgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignLmNvbnRhaW5lcicpLFxuICAgICAgICAgICAgaW5kaWNhdG9ycyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuaW5kaWNhdG9ycycpLFxuICAgICAgICAgICAgbmV4dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjbmV4dCcpLFxuICAgICAgICAgICAgcHJldiA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjcHJldicpLFxuICAgICAgICAgICAgc2h1ZmZsZUJ0biA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjc2h1ZmZsZScpLFxuICAgICAgICAgICAgY2FyZHMgPSB0aGlzLl9nZXRDYXJkcygpLFxuICAgICAgICAgICAgTiA9IGNhcmRzICYmIGNhcmRzLmxlbmd0aDtcblxuICAgICAgICBjb250YWluZXIuc3R5bGUuc2V0UHJvcGVydHkoJy0tbicsIE4pO1xuXG4gICAgICAgIGluZGljYXRvcnMuaW5uZXJIVE1MID0gWy4uLihuZXcgQXJyYXkoTikpXS5tYXAobiA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYDxsaSBjbGFzcz1cImluZGljYXRvclwiPjwvbGk+YDtcbiAgICAgICAgfSkuam9pbignJyk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50Q2FyZCA9IDA7XG4gICAgICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSB0aGlzLl9vbktleURvd24oS0VZQ09ERS5SSUdIVCwgTik7XG4gICAgICAgIH0pO1xuICAgICAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRDYXJkID0gdGhpcy5fb25LZXlEb3duKEtFWUNPREUuTEVGVCwgTik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENhcmQgPSB0aGlzLl9vbktleURvd24oZS5rZXlDb2RlLCBOKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNodWZmbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNodWZmbGUgPSAhdGhpcy5zaHVmZmxlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBfZ2V0Q2FyZHMgKCkge1xuICAgICAgICBjb25zdCBzbG90ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ3Nsb3QnKTtcbiAgICAgICAgcmV0dXJuIHNsb3QgJiYgc2xvdC5hc3NpZ25lZE5vZGVzKCkuZmlsdGVyKG4gPT4gbiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KTtcbiAgICB9XG5cbiAgICBfb25LZXlEb3duIChrZXlDb2RlLCBOKSB7XG4gICAgICAgIGxldCBpID0gdGhpcy5fY3VycmVudENhcmQ7XG4gICAgICAgIHN3aXRjaCAoa2V5Q29kZSkge1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLkxFRlQ6XG4gICAgICAgICAgICAgICAgaSA9IHRoaXMuc2h1ZmZsZSA/IChNYXRoLnJhbmRvbSgpICogTikgfCAwIDogKE4gKyAtLWkpICUgTjtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgS0VZQ09ERS5SSUdIVDpcbiAgICAgICAgICAgICAgICBpID0gdGhpcy5zaHVmZmxlID8gKE1hdGgucmFuZG9tKCkgKiBOKSB8IDAgOiAoKytpKSAlIE4gO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBLRVlDT0RFLlNQQUNFOlxuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRzID0gdGhpcy5fZ2V0Q2FyZHMoKTtcbiAgICAgICAgICAgICAgICBjYXJkc1tpXS5vbkNsaWNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gaTtcbiAgICB9XG5cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJkLWNvbnRhaW5lcicsIENhcmRDb250YWluZXIpOyIsImltcG9ydCBDYXJkRWxlbWVudCBmcm9tICcuL2NhcmQnO1xuXG5jb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5zdHlsZS5pbm5lckhUTUwgPSBgXG4gICAgPHN0eWxlPlxuICAgIC5jYXJke1xuICAgICAgICBwZXJzcGVjdGl2ZTogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDQpO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fY29udGFpbmVyIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICAvKkluZGljYXRlcyB0aGF0IHRoZSBjaGlsZHJlbiBvZiB0aGUgZWxlbWVudCBzaG91bGQgYmUgcG9zaXRpb25lZCBpbiB0aGUgM0Qtc3BhY2UuKi9cbiAgICAgICAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcbiAgICB9XG5cbiAgICAuY2FyZF9fc2hhZG93IHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICAvKlNhZmFyaSB3b3JrYXJvdW5kKi9cbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKC0xMDAwcHgpO1xuICAgIH1cbiAgICBcbiAgICAuY2FyZF9fZmFjZSB7XG4gICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxuICAgIC5jYXJkX19mYWNlLS1iYWNrIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmNhcmQuaXMtZmxpcHBlZCA+IC5jYXJkX19jb250YWluZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuY2FyZC5pcy1mbGlwcGVkIH4gLmNhcmRfX3NoYWRvdyB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xuICAgIH1cbiAgICA6OnNsb3R0ZWQoKikge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIDwvc3R5bGU+ICAgIFxuICBgO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG48ZGl2IGNsYXNzPVwiY2FyZF9fZmFjZSBjYXJkX19mYWNlLS1mcm9udFwiPlxuICAgIDxzbG90IG5hbWU9XCJmcm9udFwiPjwvc2xvdD5cbjwvZGl2PlxuPGRpdiBjbGFzcz1cImNhcmRfX2ZhY2UgY2FyZF9fZmFjZS0tYmFja1wiPlxuICAgIDxzbG90IG5hbWU9XCJiYWNrXCI+PC9zbG90PlxuPC9kaXY+XG5gO1xuXG5jbGFzcyBDYXJkRmxpcCBleHRlbmRzIENhcmRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgLy9wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdDaGlsZCwgb2xkQ2hpbGQpO1xuICAgICAgICB0aGlzLl9jYXJkQ29udGFpbmVyLnJlcGxhY2VDaGlsZCh0ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSwgdGhpcy5fY2FyZENvbnRhaW5lci5maXJzdEVsZW1lbnRDaGlsZClcbiAgICB9XG5cbiAgICBvbkNsaWNrICgpIHtcbiAgICAgICAgdGhpcy5jYXJkLmNsYXNzTGlzdC50b2dnbGUoXCJpcy1mbGlwcGVkXCIpO1xuICAgIH1cblxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtZmxpcCcsIENhcmRGbGlwKTsiLCJpbXBvcnQgQ2FyZEVsZW1lbnQgZnJvbSAnLi9jYXJkJztcblxuY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuc3R5bGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgIC5jYXJkX19mYWNlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cbiAgICBcbjwvc3R5bGU+XG5gO1xuXG5jbGFzcyBDYXJkUXVpeiBleHRlbmRzIENhcmRFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgICAgIGNvbnN0IGNoZWNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgY2hlY2tCdXR0b24uY2xhc3NOYW1lID0gXCJjaGVja1wiO1xuICAgICAgICBjaGVja0J1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2hlY2tcIjtcbiAgICAgICAgLy88YnV0dG9uIGNsYXNzPVwiY2hlY2tcIj5DaGVjazwvYnV0dG9uPlxuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKGNoZWNrQnV0dG9uKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2FyZC1xdWl6XCIsIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yQWxsKFwibGFiZWxcIikpXG4gICAgfVxuXG4gICAgc2V0IGNvcnJlY3QgKHllcykge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5xdWVyeVNlbGVjdG9yKFwicXVpei1vcHRpb25zXCIpO1xuICAgICAgICBvcHRpb25zLmNvcnJlY3QgPSB5ZXNcbiAgICB9XG5cbiAgICBnZXQgYW5zd2VyICgpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMucXVlcnlTZWxlY3RvcihcInF1aXotb3B0aW9uc1wiKTtcbiAgICAgICAgcmV0dXJuIHtrZXk6IG9wdGlvbnMubmFtZSwgdmFsdWU6IG9wdGlvbnMudmFsdWV9XG4gICAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2NhcmQtcXVpeicsIENhcmRRdWl6KTsiLCJjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5zdHlsZS5pbm5lckhUTUwgPSBgXG48c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgLypUaGUgY29udGFpbiBDU1MgcHJvcGVydHkgYWxsb3dzIGFuIGF1dGhvciBcbiAgICAgICAgdG8gaW5kaWNhdGUgdGhhdCBhbiBlbGVtZW50IGFuZCBpdHMgY29udGVudHMgYXJlLCBcbiAgICAgICAgYXMgbXVjaCBhcyBwb3NzaWJsZSwgaW5kZXBlbmRlbnQgb2YgdGhlIHJlc3Qgb2YgdGhlIGRvY3VtZW50IHRyZWUuKi9cbiAgICAgICAgY29udGFpbjogY29udGVudDtcbiAgICAgICAgXG4gICAgICAgIC0tYmFja2dyb3VuZDojNzhDN0RFO1xuICAgICAgICAtLWNhcmQtZmFjZTogI0E0REJFQTtcbiAgICAgICAgLS1jYXJkLXRleHQ6ICMyOTMxMzI7XG4gICAgICAgIFxuICAgICAgICAtLWNvbnRhaW5lci13aWR0aDogMTAwdnc7XG4gICAgICAgIC0tY29udGFpbmVyLWhlaWdodDogMTAwdmg7XG4gICAgICAgIC0tY2FyZC13aWR0aDogODB2dztcbiAgICAgICAgLS1jYXJkLWhlaWdodDogODB2aDtcbiAgICAgICAgLS1zaGFkb3cteDogY2FsYyh2YXIoLS1jYXJkLXdpZHRoKSAqIDAuMDc1KTtcbiAgICAgICAgLS1jYXJkLXNoYWRvdzogIHZhcigtLXNoYWRvdy14KSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSksIGNhbGMoIC0xICogdmFyKC0tc2hhZG93LXgpKSB2YXIoLS1zaGFkb3cteCkgMjBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gICAgICB9XG4gICAgICBcbiAgICAvKiBEZXNrdG9wcyBhbmQgbGFwdG9wcyAtLS0tLS0tLS0tLSAqL1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiA3NjhweCkge1xuICAgICAgICAvKiBTdHlsZXMgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgICAtLWNhcmQtd2lkdGg6IDUwdnc7XG4gICAgICAgICAgIC0tY2FyZC1oZWlnaHQ6IDUwdmg7XG4gICAgICAgICAgIC0tc2hhZG93LXg6IGNhbGModmFyKC0tY2FyZC13aWR0aCkgKiAwLjA3NSk7XG4gICAgICAgICAgIC0tY2FyZC1zaGFkb3c6ICB2YXIoLS1zaGFkb3cteCkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpLCBjYWxjKCAtMSAqIHZhcigtLXNoYWRvdy14KSkgdmFyKC0tc2hhZG93LXgpIDIwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgICB9XG4gICAgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiAxMjAwcHgpIHtcbiAgICAgICAgLyogU3R5bGVzICovXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAgLS1jYXJkLXdpZHRoOiA0MHZ3O1xuICAgICAgICAgICAtLWNhcmQtaGVpZ2h0OiA0MHZoO1xuICAgICAgICAgICAtLXNoYWRvdy14OiBjYWxjKHZhcigtLWNhcmQtd2lkdGgpICogMC4wNzUpO1xuICAgICAgICAgICAtLWNhcmQtc2hhZG93OiAgdmFyKC0tc2hhZG93LXgpIHZhcigtLXNoYWRvdy14KSAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKSwgY2FsYyggLTEgKiB2YXIoLS1zaGFkb3cteCkpIHZhcigtLXNoYWRvdy14KSAyMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICA6aG9zdCguZ3JlZW4pIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiAjNDg4ZTVlO1xuICAgICAgICAtLWNhcmQtZmFjZTogIzY2YjI3ZTtcbiAgICB9XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1jb250YWluZXItd2lkdGgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNvbnRhaW5lci1oZWlnaHQpO1xuXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcbiAgICB9XG5cbiAgICAuc2NlbmUge1xuICAgICAgICB3aWR0aDogdmFyKC0tY2FyZC13aWR0aCk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tY2FyZC1oZWlnaHQpO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jYXJke1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLmNhcmRfX2NvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLypib3gtc2hhZG93OiAxcHggMXB4IDAgIzgzY2RlMjsqL1xuICAgIH1cblxuICAgIC5jYXJkX19zaGFkb3cge1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1jYXJkLXNoYWRvdyk7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA5MCU7XG4gICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgei1pbmRleDogMDtcbiAgICB9XG4gICAgXG4gICAgLmNhcmRfX2ZhY2Uge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNhcmQtZmFjZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jYXJkLXRleHQpO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICBcbiAgICA8L3N0eWxlPlxuYDtcbmNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzY2VuZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19mYWNlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fc2hhZG93XCI+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG5jbGFzcyBDYXJkRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5fY2FyZENvbnRhaW5lciA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX2NvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5jYXJkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZFwiKTtcbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjayAoKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb25DbGljayAoKSB7XG4gICAgfVxuXG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYS1jYXJkJywgQ2FyZEVsZW1lbnQpO1xuXG5leHBvcnQgZGVmYXVsdCBDYXJkRWxlbWVudDsiLCJjbGFzcyBNYXRoRXhwcmVzc2lvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7IC8vIGFsd2F5cyBjYWxsIHN1cGVyKCkgZmlyc3QgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoXCJtYXRoXCIpO1xuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgbGV0IGh0bWwgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IG5vZGUgb2YgdGhpcy5jaGlsZE5vZGVzKSB7XG4gICAgICAgICAgICBsZXQgdGV4dENvbnRlbnQgPSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgbGV0IGNvbnRlbnQgPSB0ZXh0Q29udGVudC5yZXBsYWNlKC9bYS16XS9nLCBcIjxpPiQmPC9pPlwiKS5yZXBsYWNlKC9cXHMrL2csIFwiJm5ic3A7XCIpO1xuICAgICAgICAgICAgaWYodGV4dENvbnRlbnQuaW5jbHVkZXMoXCIvXCIpKXtcbiAgICAgICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKC8oXFxkKlxcL1xcZCkvZywgXCI8bWF0aC1mcmFjdGlvbj4kJjwvbWF0aC1mcmFjdGlvbj5cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBub2RlLmlubmVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBub2RlLm91dGVySFRNTDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgaHRtbCArPSBub2RlLnRleHRDb250ZW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5uZXJIVE1MID0gaHRtbDtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0aC1leHByZXNzaW9uJywgTWF0aEV4cHJlc3Npb24pOyIsImNsYXNzIE1hdGhGcmFjdGlvbiBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7IC8vIGFsd2F5cyBjYWxsIHN1cGVyKCkgZmlyc3QgaW4gdGhlIGNvbnN0cnVjdG9yLlxuICAgIH1cblxuICAgIGNvbm5lY3RlZENhbGxiYWNrICgpIHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IHRoaXMudGV4dENvbnRlbnQ7XG4gICAgICAgIGxldCBbbnVtZXJhdG9yLCBkZW5vbWluYXRvcl0gPSBjb250ZW50LnNwbGl0KFwiL1wiKTtcbiAgICAgICAgdGhpcy5pbm5lckhUTUwgPSBgPHN1cD4ke251bWVyYXRvcn08L3N1cD48c3ViPiR7ZGVub21pbmF0b3J9PC9zdWI+YDtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbWF0aC1mcmFjdGlvbicsIE1hdGhGcmFjdGlvbik7IiwiY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuc3R5bGUuaW5uZXJIVE1MID0gYFxuPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgXG4gICAgfVxuICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYmFja2dyb3VuZDogI2U4ZTJjYTtcbiAgICAgICAgY29sb3I6ICMyNzUzNDU7IFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMXJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgLyptYXJnaW4tYm90dG9tOiAycmVtOyovXG4gICAgfVxuXG4gICAgaW5wdXRbdHlwZT1yYWRpb117XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gbGFiZWx7XG4gICAgICAgIGJhY2tncm91bmQ6ICMyNzUzNDU7XG4gICAgICAgIGNvbG9yOiAjZThlMmNhO1xuICAgIH1cbiAgICBcbiAgICBsYWJlbDphZnRlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC00NXB4O1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICAgICAgY29sb3I6ICNlOGUyY2E7XG4gICAgfVxuICAgIFxuICAgIGxhYmVsW2NvcnJlY3Q9dHJ1ZV06YWZ0ZXJ7XG4gICAgICAgIGNvbnRlbnQ6ICfinJTvuI4nO1xuICAgIH1cbiAgICBsYWJlbFtjb3JyZWN0PWZhbHNlXTphZnRlcntcbiAgICAgICAgY29udGVudDogJ+KcmCc7XG4gICAgfVxuICAgIFxuPC9zdHlsZT5cbjxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XG5cbjwvZGl2PlxuXG5gO1xuXG5jbGFzcyBRdWl6T3B0aW9ucyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgICAgdGhpcy5zaGFkb3dSb290LmFwcGVuZENoaWxkKHN0eWxlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiLm9wdGlvbnNcIik7XG4gICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLmdldEF0dHJpYnV0ZShcIm5hbWVcIikgfHwgXCJxdWl6LW9wdGlvblwiO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJvcHRpb25zXCIpIHx8IFwiXCI7XG4gICAgICAgIHRoaXMuX29wdGlvbnMuaW5uZXJIVE1MID0gb3B0aW9ucy5zcGxpdChcIixcIikubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7bmFtZX0ke29wdGlvbi5yZXBsYWNlKC9cXHMvZywgXCJcIil9YDtcbiAgICAgICAgICAgIHJldHVybiBgPHA+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCIke25hbWV9XCIgaWQ9XCIke2lkfVwiIHZhbHVlPVwiJHtvcHRpb259XCI+PGxhYmVsIGZvcj1cIiR7aWR9XCI+JHtvcHRpb259PC9sYWJlbD48L3A+YFxuICAgICAgICB9KS5qb2luKFwiXCIpO1xuICAgIH1cblxuICAgIHNldCBjb3JyZWN0ICh5ZXMpIHtcbiAgICAgICAgY29uc3QgcHJldkNoZWNrZWQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcImxhYmVsW2NvcnJlY3RdXCIpO1xuICAgICAgICBpZiAocHJldkNoZWNrZWQpIHtcbiAgICAgICAgICAgIHByZXZDaGVja2VkLnJlbW92ZUF0dHJpYnV0ZShcImNvcnJlY3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjaGVja2VkID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkIH4gbGFiZWxcIik7XG4gICAgICAgIGlmIChjaGVja2VkKSB7XG4gICAgICAgICAgICBjaGVja2VkLnNldEF0dHJpYnV0ZShcImNvcnJlY3RcIiwgYCR7eWVzfWApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0IG5hbWUgKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpIHx8IFwicXVpei1vcHRpb25cIjtcbiAgICB9XG5cbiAgICBnZXQgdmFsdWUgKCkge1xuICAgICAgICBjb25zdCBpbnB1dCA9IHRoaXMuX29wdGlvbnMucXVlcnlTZWxlY3RvcihcImlucHV0OmNoZWNrZWRcIik7XG4gICAgICAgIHJldHVybiBpbnB1dCAmJiBpbnB1dC52YWx1ZTtcbiAgICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncXVpei1vcHRpb25zJywgUXVpek9wdGlvbnMpOyIsImltcG9ydCBcIi4vY2FyZHNcIlxuaW1wb3J0IFwiLi9jb21wb25lbnRzL2NhcmQtcXVpelwiXG5pbXBvcnQgXCIuL2NvbXBvbmVudHMvcXVpei1vcHRpb25zXCJcblxuYXN5bmMgZnVuY3Rpb24gbG9hZEFuc3dlcnMgKCkge1xuICAgIGNvbnN0IGFuc3dlcnMgPSBhd2FpdCBmZXRjaChcIi4vYS5qc29uXCIpLnRoZW4ociA9PiByLmpzb24oKSk7XG4gICAgY29uc3QgcXVpekZvcm0gPSBkb2N1bWVudC5mb3Jtc1tcInF1aXpcIl07XG4gICAgY29uc3QgcmVzdWx0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzdWx0c1wiKTtcbiAgICBjb25zdCBleHBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleHBsYWluXCIpO1xuXG4gICAgaWYgKHF1aXpGb3JtICYmIHJlc3VsdHMpIHtcbiAgICAgICAgcXVpekZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZSkgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IGNvcnJlY3QgPSAwO1xuICAgICAgICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKGFuc3dlcnMpO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGtleXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5wdXQgPSBxdWl6Rm9ybS5lbGVtZW50c1trXTtcbiAgICAgICAgICAgICAgICBsZXQgYW5zd2VyID0gYW5zd2Vyc1trXTtcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlucHV0LmNsYXNzTmFtZSA9IFwiY29ycmVjdFwiO1xuICAgICAgICAgICAgICAgICAgICBjb3JyZWN0Kys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0cy5pbm5lckhUTUwgPSBgJHtjb3JyZWN0fSBvdXQgb2YgJHtrZXlzLmxlbmd0aH0gY29ycmVjdGA7XG4gICAgICAgICAgICBpZiAoZXhwbGFpbikge1xuICAgICAgICAgICAgICAgIGV4cGxhaW4uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IHF1aXpDYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJjYXJkLXF1aXpcIik7XG5cbiAgICBpZiAocXVpekNhcmRzLmxlbmd0aCkge1xuICAgICAgICBmb3IgKGNvbnN0IGNhcmQgb2YgcXVpekNhcmRzKSB7XG5cbiAgICAgICAgICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJjaGVja1wiKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQge2tleSwgdmFsdWV9ID0gY2FyZC5hbnN3ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNhcmQuY29ycmVjdCA9ICEhdmFsdWUgJiYgISFhbnN3ZXJzW2tleV0gJiYgYW5zd2Vyc1trZXldLnRvTG93ZXJDYXNlKCkgPT09IHZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFuc3dlcnNba2V5XSwgdmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXhwbGFpbikge1xuXG4gICAgICAgIGV4cGxhaW4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXhwbGFuYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5leHBsYW5hdGlvblwiKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXhwbGFuYXRpb24gb2YgZXhwbGFuYXRpb25zKSB7XG4gICAgICAgICAgICAgICAgZXhwbGFuYXRpb24uc3R5bGUucmVtb3ZlUHJvcGVydHkoXCJkaXNwbGF5XCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSAoYXJyYXkpIHtcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFtdO1xuICAgIHdoaWxlIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCkgfCAwO1xuICAgICAgICBsZXQgc3BsaWNlID0gYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBzaHVmZmxlZEFycmF5LnB1c2goc3BsaWNlWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG59XG5cbmZ1bmN0aW9uIHNodWZmbGVRdWVzdGlvbnMgKHF1ZXN0aW9uTGlzdHMpIHtcbiAgICBmb3IgKGNvbnN0IHF1ZXN0aW9ucyBvZiBxdWVzdGlvbkxpc3RzKSB7XG4gICAgICAgIGNvbnN0IHEgPSBzaHVmZmxlKFsuLi5xdWVzdGlvbnMuY2hpbGRyZW5dKTtcbiAgICAgICAgY29uc3QgZnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgICAgIHF1ZXN0aW9ucy5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBmb3IgKGNvbnN0IGVsIG9mIHEpIHtcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgfVxuICAgICAgICBxdWVzdGlvbnMuYXBwZW5kQ2hpbGQoZnJhZ21lbnQpO1xuICAgIH1cblxufVxuXG5jb25zdCBxdWVzdGlvbnNUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicXVlc3Rpb25zVGVtcGxhdGVcIik7XG5pZiAocXVlc3Rpb25zVGVtcGxhdGUpIHtcbiAgICBjb25zdCBjbG9uZVRlbXBsYXRlID0gZG9jdW1lbnQuaW1wb3J0Tm9kZShxdWVzdGlvbnNUZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcbiAgICBjb25zdCBxdWVzdGlvbkxpc3RzID0gY2xvbmVUZW1wbGF0ZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnF1ZXN0aW9uc1wiKTtcbiAgICBzaHVmZmxlUXVlc3Rpb25zKHF1ZXN0aW9uTGlzdHMpO1xuICAgIGNvbnN0IHF1ZXN0aW9uQ29udGFpbmVycyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucXVlc3Rpb25zQ29udGFpbmVyXCIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlc3Rpb25Db250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IHF1ZXN0aW9uQ29udGFpbmVyc1tpXTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1ZXN0aW9uTGlzdHNbaV0pO1xuICAgIH1cbn1cbmxvYWRBbnN3ZXJzKCk7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2h1ZmZsZSAoYXJyYXkpIHtcbiAgICBsZXQgc2h1ZmZsZWRBcnJheSA9IFtdO1xuICAgIHdoaWxlIChhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgbGV0IGkgPSBNYXRoLnJhbmRvbSgpICogKGFycmF5Lmxlbmd0aCkgfCAwO1xuICAgICAgICBsZXQgc3BsaWNlID0gYXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgICBzaHVmZmxlZEFycmF5LnB1c2goc3BsaWNlWzBdKTtcbiAgICB9XG4gICAgcmV0dXJuIHNodWZmbGVkQXJyYXk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==