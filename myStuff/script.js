import { quizData } from "./data.js"

const question = document.querySelector(".question")
const select = document.querySelector("select")
const span = document.querySelector("span")
const next = document.querySelector("button")

// select.style.color = "black"
// select.style.backgroundColor = "cyan"

//  maybe 

for (let i = 0; i < quizData.length; i++) {
  let theQuestion = quizData[i]
  console.log(theQuestion)

  function getQuestion() {
    question.innerHTML = theQuestion.question
    getChoices()
  }

  function getChoices() {
    const thisArray = Object.values(theQuestion.answers)
    thisArray.forEach((val) => {
      const opt = document.createElement("option")
      opt.innerHTML = val
      select.appendChild(opt)
    })
    getAnswer()
  }

  function getAnswer() {
    select.addEventListener("change", (e) => {
      if (e.target.value === theQuestion["correct"]) {
        select.classList.add("correct")
      } else {
        select.classList.add("incorrect")
      }
      nextQuestion(e.target.value)
    })
  }

  function nextQuestion(e) {
    next.addEventListener("click", (event) => {
      console.log(e, theQuestion["correct"])
      if (e === theQuestion.correct) {
        select.classList.remove("correct")
        select.classList.add("start")
      } else {
        select.classList.remove("incorrect")
        select.classList.add("start")
      }
      getQuestion()
    })
  }

  nextQuestion()
}
