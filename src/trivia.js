//Preguntas para la Trivia
const questions = [
    {
        question: "Who is Ayn Rand?",
        options: ["Novelist", "Actor", "Politician"],
        answer: "Novelist"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter"],
        answer: "Mars"
    }
    // Add more
];

const start = document.getElementById("start");
const playerName = document.getElementById("playerName");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const resultElement = document.getElementById("result");
const quizSection = document.getElementById("quiz");
const startButton = document.getElementById("startButton");

let currentQuestionIndex = 0;
let correct = 0;
let incorrect = 0;

startQuiz()

function startQuiz() {
    quizSection.style.display = "none";          
        startButton.addEventListener('click', () => {
            if(playerName.value.length){
                console.log('estoy')
                start.style.display = "none";
                quizSection.style.display = "flex";            
                loadQuestion();
                console.log()
                console.log(playerName.value.length)
            }else {
                alert('Please enter a name');
            }          
             
    })   
          
}


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
            console.log("correct")
            correct++
          
        } else {
            console.log("incorrect")
            incorrect++
        
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
        resultElement.innerHTML = `<p>Correct answers: <span>${correct}</span></p> <p>Incorrect answers: <span>${incorrect}</span></p> <p>Total questions: <span>${questions.length}</span></p> <p>Percentage: <span>${(correct / questions.length) * 100}%</span></p> <p>Thank you for playing</p> `;
    }
});

//window.addEventListener("load", startQuiz); 