const quizData = [
    {
        question: "Which of the following is supported by Ruby?",
        a: "Multiple Programming Paradigms",
        b: "Dynamic Type System",
        c: "Automatic Memory Management",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "Which of the following langauges' syntax matches with Ruby?",
        a: "C",
        b: "Perl",
        c: "PHP",
        d: "Java",
        correct: "b",
    },
    {
        question: "What is the extension used for saving the Ruby file?",
        a: ".rb extension",
        b: ".ruby extension",
        c: ".rby extension",
        d: ".rbb extension",
        correct: "a",
    },
    {
        question: "What error does the if condition give when not terminated with an end statement?",
        a: "Syntax error",
        b: "Unexpected end",
        c: "Expecting keyword error",
        d: "All of the above",
        correct: "d",
    },
    {
        question: "What will the following expression evaluate to? (!true && !false)",
        a: "True",
        b: "False",
        c: "Error",
        d: "None of the above",
        correct: "b",
    }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                <button onclick="location.reload()">Reload</button>
            `
        }
    }
}) 
