const questions = [
    {
        question: "Which is the largest Animal in the World?",
        answers: [
            { text: "Shark", correct:false},
            { text: "Blue Whale", correct:true},
            { text: "Elephant", correct:false},
            { text: "Giraffe", correct:false },
        ]

    },
    {
        question: "What is the capital of France?",
    answers: [
        { text: "Berlin", correct: false },
        { text: "Madrid", correct: false },
        { text: "Paris", correct: true },
        { text: "Rome", correct: false },
    ]

    },
    {
        question: "Which planet is known as the Red Planet?",
    answers: [
        { text: "Earth", correct: false },
        { text: "Jupiter", correct: false },
        { text: "Mars", correct: true },
        { text: "Venus", correct: false },
    ]

    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
answers: [
    { text: "Mark Twain", correct: false },
    { text: "Charles Dickens", correct: false },
    { text: "William Shakespeare", correct: true },
    { text: "Jane Austen", correct: false },
]

    },
    {
        question: "What is the chemical symbol for water?",
answers: [
    { text: "O2", correct: false },
    { text: "H2O", correct: true },
    { text: "CO2", correct: false },
    { text: "NaCl", correct: false },
]

    },
    {
        question: "Which country is home to the kangaroo?",
answers: [
    { text: "Australia", correct: true },
    { text: "India", correct: false },
    { text: "South Africa", correct: false },
    { text: "Canada", correct: false },
]


    },
    {
        question: "Who painted the Mona Lisa?",
answers: [
    { text: "Pablo Picasso", correct: false },
    { text: "Leonardo da Vinci", correct: true },
    { text: "Vincent van Gogh", correct: false },
    { text: "Michelangelo", correct: false },
]

    },
    {
        question: "What is the hardest natural substance on Earth?",
answers: [
    { text: "Gold", correct: false },
    { text: "Iron", correct: false },
    { text: "Diamond", correct: true },
    { text: "Silver", correct: false },
]

    },
    {
        question: "What is the largest planet in our solar system?",
answers: [
    { text: "Earth", correct: false },
    { text: "Saturn", correct: false },
    { text: "Jupiter", correct: true },
    { text: "Neptune", correct: false },
]

    },
    {
        question: "Which element does 'O' represent on the periodic table?",
answers: [
    { text: "Oxygen", correct: true },
    { text: "Osmium", correct: false },
    { text: "Oganesson", correct: false },
    { text: "Obsidian", correct: false },
]

    },
    {
        question: "What is the tallest mountain in the world?",
answers: [
    { text: "K2", correct: false },
    { text: "Mount Everest", correct: true },
    { text: "Kangchenjunga", correct: false },
    { text: "Lhotse", correct: false },
]

    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentquestionindex = 0;
let score = 0;

function startQuiz(){
    currentquestionindex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentquestion = questions[currentquestionindex];
    let questionNo = currentquestionindex + 1;
    questionElement.innerHTML = questionNo + ". "+currentquestion.question;

    currentquestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML =answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);


    });
}

function resetState(){
    nextButton.style.display = 'none';
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect");

    }
    Array.from(answerButton.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again!";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentquestionindex++;
    if(currentquestionindex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentquestionindex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();