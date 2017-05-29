let answer = ''
let answers = { right: 0, wrong: 0 }
let speed = 1500
let status = 'waiting'
let startMaxLength = 3
let curMaxLength = startMaxLength
let totalMaxLength = 11

function loaded () {
  console.log('loaded')
  document.querySelector('#numberForm').addEventListener('submit', function (event) {
    event.preventDefault()
  })
}

function checkAnswer () {
  console.log('answer')
  let answerEl = document.getElementById('numberAnswer')
  let myAnswer = answerEl.value
  answerEl.value = ''

  if (myAnswer === answer) {
    console.log('right')
    answers.right += 1
  } else {
    console.log('wrong!')
    answers.wrong += 1
  }
  answer = ''
  status = 'starting'
}

function startStop () {
  let startStopButton = document.getElementById('startStopButton')

  if(startStopButton.innerHTML === 'Start'){
    status = 'starting'
    startStopButton.innerHTML = 'Stop'
  } else {
    status = 'waiting'
    answer = ''
    answers.right = 0
    answers.wrong = 0
    curMaxLength = startMaxLength
    startStopButton.innerHTML = 'Start'
  }
}

function getRandomNumber (max) {
  return Math.floor(Math.random() * (max + 1))
}

setInterval(function () {
  let numbersEl = document.getElementById('numbers')
  switch (status) {
    case 'waiting':
      console.log(status)
      numbersEl.innerHTML = 'click start'
      break
    case 'starting':
      status = 'building'
      break
    case 'building':
      console.log(status)
      // add to answer until length === curMaxLength
      if (answer.length < curMaxLength) {
        numbersEl.innerHTML = '&nbsp;'
        setTimeout(function () {
          let newNumber = getRandomNumber(9)
          // show number
          numbersEl.innerHTML = newNumber
          answer += newNumber
        }, speed /2)
      } else {
        // possibly increment current max length
        if (curMaxLength < totalMaxLength) {
          curMaxLength += getRandomNumber(1)
        }
        // ask for answer
        numbersEl.innerHTML = 'Please enter the answer.'
        status = 'asking'
      }
      break
    case 'asking':
      break
    default:
      console.log('hit default case')
      break
  }
}, speed)
