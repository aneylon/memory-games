import React, { Component } from 'react'
import 'w3-css/w3.css'

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
          this.setState({
            status: 'building'
          })
          break
        case 'building':
          if (this.state.answer.length < this.state.curMaxLength) {
            numbersEl.innerHTML = '&nbsp;'
            setTimeout( () => {
              let newNumber = this.getRandomNumber(9)
              numbersEl.innerHTML = newNumber
              this.setState({
                answer: this.state.answer += newNumber
              })
            }, this.state.speed / 2)
          } else {
            if (this.state.curMaxLength < this.state.totalMaxLength) {
              this.setState({
                curMaxLength: this.state.curMaxLength += this.getRandomNumber(1)
              })
            }
            numbersEl.innerHTML = 'Enter your answer.'
            this.setState({
              status: 'asking'
            })
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
      this.setState({ status: 'starting' })
      startStopButton.innerHTML = 'Stop'
    } else {
      this.setState({
        status: 'waiting',
        answer: '',
        answers: { right: 0, wrong: 0 },
        curMaxLength: this.state.startLength
      })
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
      let answers = this.state.answers
      answers.right ++
      this.setState({
        answers
      })
    } else {
      let answers = this.state.answers
      answers.wrong ++
      this.setState({
        answers
      })
    }
    this.setState({
      answer: '',
      status: 'starting'
    })
  }

  render () {
    return (
      <div className="w3-display-container game-container">
        <div className="w3-display-middle w3-card-2 w3-white w3-padding-16">
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
          {/*<div id="results"></div>*/}
        </div>
      </div>
    )
  }
}

export default NumbersInARow
