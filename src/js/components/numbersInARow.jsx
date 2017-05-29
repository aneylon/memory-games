import React from 'react'

const NumbersInARow = () => (
  <div className="w3-display-container game-container">
    <div className="w3-display-middle w3-card-2">
      <h1>Numbers in a Row</h1>
      <hr />
      <h2 className="w3-blue" id="numbers">Click Start</h2>
      <form id="numberForm" action="submit" onsubmit="checkAnswer()">
        <input className="w3-input w3-center" type="number" placeholder="###" id="numberAnswer" />
      </form>
      <button onclick="startStop()" id="startStopButton">Start</button>
      <div id="results"></div>
    </div>
  </div>
)

export default NumbersInARow
