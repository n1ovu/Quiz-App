import { quizData } from "./data.js"

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("submit")
const answerEls = document.querySelectorAll(".answer")
const quiz = document.getElementById("quiz")
// const answer = document.querySelector(".answer")

let currentQuestion = 0
// let answer = undefined
let score = 0

// console.log(quizData.length)

loadQuiz()

function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuestion]
  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.answers.a
  b_text.innerText = currentQuizData.answers.b
  c_text.innerText = currentQuizData.answers.c
  d_text.innerText = currentQuizData.answers.d
}

function getSelected() {
  let answer = undefined

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  })
}

submitBtn.addEventListener("click", () => {
  // Check to see the answer
  const answer = getSelected()

  if (answer) {
    if (answer === quizData[currentQuestion].correct) {
      score++
    }
    currentQuestion++
    if (currentQuestion < quizData.length) {
      loadQuiz()
    } else {
      // TODO: Show results
      quiz.innerHTML = `<h1>Your <em>score</em> is: ${score} out of ${quizData.length}</h1><button onClick="location.reload()">Reload</button>`
    }
  }
})
