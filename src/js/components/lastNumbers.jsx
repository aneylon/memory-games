import React from 'react'

const LastNumbers = () => {
  let lastNumbers = {
    status : 'waiting'
  }
  let myInterval

  function checkAnswer (e) {
    console.log('checking answer')
    e.preventDefault()
  }

  function startStop() {
    let startStopButton = document.getElementById('startStopButton')

    if(lastNumbers.status === 'waiting') {
      lastNumbers.status = 'starting'
      startStopButton.innerHTML = 'Stop'
      myInterval = setInterval(() => {
        console.log('test')

        switch (lastNumbers.status) {

          default:
            break
        }
      }, 500)
    } else {
      startStopButton.innerHTML = 'Start'
      lastNumbers.status = 'waiting'
      clearInterval(myInterval)
    }
  }

  return (
    <div className="w3-display-container game-container">
      <div className="w3-display-middle w3-card-2 w3-white w3-padding-16">
        <h1>Last Numbers</h1>
        <hr />
        <h2 className="w3-light-grey">Click Start</h2>
        <form onSubmit={checkAnswer}>
          <input
            className="w3-input w3-center"
            type="number"
            placeholder="###"
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
