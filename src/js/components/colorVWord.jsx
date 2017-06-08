import React, { Component } from 'react'
import StartStopButton from './startStopButton'
import 'w3-css/w3.css'

class ColorVWord extends Component {
  constructor (props) {
    super(props)
    // bind functions
    this.startStop = this.startStop.bind(this)
    this.checkAnswer = this.checkAnswer.bind(this)
    this.gameState = {
      speed: 1500,
      answer: '',
      answers: { right: 0, wrong: 0 },
      status: 'waiting',
      startlength: 3,
      curMaxLength: 3,
      totalMaxLength: 11,
      questionDisplay: '',
      answerEl: '',
      startStopButton: ''
    }
  }

  componentDidMount () {
    this.gameState.answerEl = document.getElementById('colorAnswer')
    this.gameState.startStopButton = document.getElementById('startStopButton')
    this.gameState.questionDisplay = document.getElementById('questionDisplay')
  }

  componentWillUnmount () {
    clearInterval(this.gameTimer)
  }

  checkAnswer (e) {
    e.preventDefault()
    console.log('check')
  }

  startStop () {
    console.log('start stop')
    if (this.gameState.status === 'waiting') {
      document.getElementById('colorAnswer').focus()
      this.gameState.startStopButton.innerHTML = 'Stop'
      this.gameState.status = 'starting'
      this.gameTimer = setInterval(() => {
        console.log('tick')
        switch (this.gameState.status) {
          case 'waiting':
            console.log('waiting')
            break
          case 'starting':
            console.log('starting')
            break
          case 'building':
            console.log('building')
            break
          case 'asking':
            console.log('asking')
            break
          default:
            break
        }
      }, this.gameState.speed / 2)
    } else {
      this.gameState.questionDisplay.innerHTML = 'Stopping...'
      this.gameState.status = 'waiting'
      this.gameState.startStopButton.innerHTML = 'Start'
      // reset gameState?
      setTimeout( () => {
        this.gameState.questionDisplay.innerHTML = 'Click Start'
      }, this.gameState.speed / 2)
      clearInterval(this.gameTimer)
    }
  }

  render () {
    return (
      <div className="w3-display-container game-container">
        <div className="w3-display-middle w3-card-2 w3-white w3-padding-16">
          <h1>Color vs. Word</h1>
          <hr />
          <h2 className="w3-light-grey" id="questionDisplay">Click Start</h2>
          <form id="numberForm" action="submit" onSubmit={this.checkAnswer}>
            <input
              className="w3-input w3-center"
              type="text"
              placeholder="colors?"
              id="colorAnswer" />
          </form>
          <StartStopButton
            classes="w3-btn w3-blue"
            action={this.startStop}
            myId="startStopButton" />
        </div>
      </div>
    )
  }
}

export default ColorVWord
