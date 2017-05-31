import React from 'react'

const LastNumbers = () => {
  let lastNumbers = {
    status: 'waiting',
    answer: '',
    answerLength: 3,
    startLength: 4,
    curMaxLength: 4,
    maxLength: 11,
    answers: { right: 0, wrong: 0},
    speed: 1500
  }
  let myInterval

  function checkAnswer (e) {
    console.log('checking answer')
    e.preventDefault()
    let answerEl = document.getElementById('answer')
    let myAnswer = answerEl.value
    answerEl.value = ''
    console.log('answer:', lastNumbers.answer)
    console.log('my answer:', myAnswer)

    if (myAnswer === lastNumbers.answer.slice(-(lastNumbers.answerLength))) {
      console.log('right')
      lastNumbers.answers.right ++
    } else {
      console.log('wrong')
      lastNumbers.answers.wrong ++
    }

    lastNumbers.answer = ''
    lastNumbers.status = 'starting'
  }

  function startStop() {
    let startStopButton = document.getElementById('startStopButton')
    let getRandomNumber = (max = 1) => {
      return Math.floor(Math.random() * (max + 1))
    }
    let displayEl = document.getElementById('messageDisplay')

    if(lastNumbers.status === 'waiting') {
      lastNumbers.status = 'starting'
      startStopButton.innerHTML = 'Stop'
      myInterval = setInterval(() => {
        console.log('test')
        switch (lastNumbers.status) {
          case 'waiting':
            console.log('waiting')
            break
          case 'starting':
            console.log('starting')
            lastNumbers.status = 'building'
            break
          case 'building':
            console.log('building')
            if (lastNumbers.answer.length < lastNumbers.curMaxLength) {
              displayEl.innerHTML = '&nbsp;'
              setTimeout( () => {
                let newNumber = getRandomNumber(9)
                displayEl.innerHTML = newNumber
                lastNumbers.answer += newNumber
              }, lastNumbers.speed / 2)
            } else {
              if (lastNumbers.curMaxLength < lastNumbers.maxLength) {
                lastNumbers.curMaxLength += getRandomNumber()
              }
              displayEl.innerHTML = `What were the last ${lastNumbers.answerLength} numbers?`
              lastNumbers.status = 'asking'
            }
            break
          case 'asking':
            console.log('asking')
            // waiting for answer submission
            // measure time to input answer
            break
          default:
            console.log('default')
            break
        }
      }, lastNumbers.speed)
    } else {
      setTimeout( () => {
        startStopButton.innerHTML = 'Start'
        lastNumbers.status = 'waiting'
        displayEl.innerHTML = 'Click Start'
      }, lastNumbers.speed / 2)
      clearInterval(myInterval)
    }
  }

  return (
    <div className="w3-display-container game-container">
      <div className="w3-display-middle w3-card-2 w3-white w3-padding-16">
        <h1>Last Numbers</h1>
        <hr />
        <h2
          className="w3-light-grey"
          id="messageDisplay">Click Start</h2>
        <form onSubmit={checkAnswer}>
          <input
            className="w3-input w3-center"
            type="number"
            placeholder="###"
            id="answer"
            />
        </form>
        <button
          className="w3-btn w3-blue"
          onClick={startStop}
          id="startStopButton">Start</button>
      </div>
    </div>
  )
}

export default LastNumbers
