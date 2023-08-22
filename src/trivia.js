
const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "Berlin", "London"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        answer: "Mars"
    }
    // Add more
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    optionsElement.innerHTML = "";
    currentQuestion.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="answer" value="${option}">
            ${option}
        `;
        optionsElement.appendChild(label);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector("input[name='answer']:checked");
    if (selectedOption) {
        const answer = selectedOption.value;
        const correctAnswer = questions[currentQuestionIndex].answer;
        if (answer === correctAnswer) {
            resultElement.textContent = "Correct!";
        } else {
            resultElement.textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        }
    }
}

nextButton.addEventListener("click", () => {
    checkAnswer();
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        resultElement.textContent = "";
    } else {
        questionElement.textContent = "Trivia completed!";
        optionsElement.innerHTML = "";
        nextButton.style.display = "none";
        resultElement.textContent = "";
    }
});
