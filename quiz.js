async function loadAnswers () {
    const answers = await fetch("./a.json").then(r => r.json());
    const quizForm = document.forms["quiz"];
    const results = document.getElementById("results");
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
            results.innerHTML = `${correct} out of ${keys.length} correct`
        })
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
