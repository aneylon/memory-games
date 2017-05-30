import React, { Component } from 'react'

class NumbersInARow extends Component {
  constructor (props) {
    super(props)
    this.state = {
      speed: 1500,
      answer: '',
      answers: { right: 0, wrong: 0 },
      status: 'waiting',
      startLength: 3,
      curMaxLength: 3,
      totalMaxLength: 11
    }
    this.startStop = this.startStop.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
  }

  componentDidMount () {
    let numbersEl = document.getElementById('numbers')
    this.interval = setInterval(() => {
      switch (this.state.status) {
        case 'waiting':
          numbersEl.innerHTML = 'Click Start'
          break
        case 'starting':
          this.state.status = 'building'
          break
        case 'building':
          if (this.state.answer.length < this.state.curMaxLength) {
            numbersEl.innerHTML = '&nbsp;'
            setTimeout( () => {
              let newNumber = this.getRandomNumber(9)
              numbersEl.innerHTML = newNumber
              this.state.answer += newNumber
            }, this.state.speed / 2)
          } else {
            if (this.state.curMaxLength < this.state.totalMaxLength) {
              this.state.curMaxLength += this.getRandomNumber(1)
            }
            numbersEl.innerHTML = 'Please enter your answer.'
            this.state.status = 'asking'
          }
          break
        case 'asking':
          break
        default:
          break
      }
    }, this.state.speed)
  }

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  getRandomNumber (max) {
    return Math.floor(Math.random() * (max + 1))
  }

  startStop () {
    let startStopButton = document.getElementById('startStopButton')

    if (startStopButton.innerHTML === 'Start') {
      this.state.status = 'starting'
      startStopButton.innerHTML = 'Stop'
    } else {
      this.state.status = 'waiting'
      this.state.answer = ''
      this.state.answers.right = 0
      this.state.answers.wrong = 0
      this.state.curMaxLength = this.startLength
      startStopButton.innerHTML = 'Start'
    }
  }

  checkAnswer (e) {
    e.preventDefault()
    e.stopPropagation()

    let answerEl = document.getElementById('numberAnswer')
    let myAnswer = answerEl.value
    answerEl.value = ''

    if (myAnswer === this.state.answer) {
      this.state.answers.right ++
    } else {
      this.state.answers.wrong ++
    }
    this.state.answer = ''
    this.state.status = 'starting'
  }

  render () {
    return (
      <div className="w3-display-container game-container">
        <div className="w3-display-middle w3-card-2 w3-white">
          <h1>Numbers in a Row</h1>
          <hr />
          <h2 className="w3-light-grey" id="numbers">Click Start</h2>
          <form id="numberForm" action="submit" onSubmit={this.checkAnswer}>
            <input
              className="w3-input w3-center"
              type="number"
              placeholder="###"
              id="numberAnswer" />
          </form>
          <button
            className="w3-btn w3-blue"
            onClick={this.startStop}
            id="startStopButton">Start</button>
          <div id="results"></div>
        </div>
      </div>
    )
  }
}

export default NumbersInARow
