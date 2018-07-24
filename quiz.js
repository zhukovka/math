loadAnswers();

async function loadAnswers () {
    const answers = await fetch(window.location.pathname + "a.json").then(r => r.json());
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
