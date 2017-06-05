import React from 'react'

const StartStopButton = (props) => {
  return (
    <div>
      <button
        className={props.classes}
        onClick={props.action}
        id={props.myId}
        >
        Start
      </button>
    </div>
  )
}

export default StartStopButton
