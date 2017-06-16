import React, { Component } from 'react'
import 'w3-css/w3.css'
import StartStopButton from './startStopButton'

class GameComponent extends Component {
  constructor (props) {
    super(props)
  }

  startStop () {
    console.log('Start Stop')
  }

  checkAnswer (e) {
    e.preventDefault()
    console.log('check answer')
  }

  render () {
    return (
      <div className="w3-display-container game-container">
        <div className="w3-display-middle w3-card-2 w3-white w3-padding-16">
          <h1>{this.props.title}</h1>
          <hr />
          <h2
            className="w3-light-grey"
            id="questionDisplay"
            >Click Start</h2>
          <form
            id="inputForm"
            action="submit"
            onSubmit={this.checkAnswer}
            >
            <input
              className="w3-input w3-center"
              type="text"
              placeholder="answer"
              id="answerInput"
              />
          </form>
          <StartStopButton
            classes="w3-btn w3-blue"
            action={this.startStop}
            myId="startStopButton"
            />
        </div>
      </div>
    )
  }
}

export default GameComponent
