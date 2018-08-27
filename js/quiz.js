import "./cards"
import "./components/card-quiz"
import "./components/quiz-options"
import "./components/quiz-input"

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
