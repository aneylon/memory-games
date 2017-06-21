import React from 'react'
import {Link} from 'react-router-dom'
import 'w3-css/w3.css'

const Home = () => (
  <div className="w3-display-container game-container">
    <div className="w3-card-2 w3-white">
      <h1>Memory Games</h1>
      <hr />
      <p>
        A series of simple games to test and exercise your memory and other skills.
      </p>
      <p>
        Sign up or Sign in to track your progress.
      </p>
    </div>
    <div className="w3-display-container">
      <div className="w3-card-2 w3-white">
        <div className="w3-cell-row">
          <div className="w3-cell w3-cell-middle">
            <Link to="/NumbersInARow">
              <h2>Numbers In A Row</h2>
            </Link>
          </div>
          <div className="w3-cell w3-cell-middle">
            Remember all numbers shown to you.
          </div>
        </div>
      </div>
    </div>
    <div className="w3-display-container">
      <div className="w3-card-2 w3-white">
        <div className="w3-cell-row">
          <div className="w3-cell w3-cell-middle">
            Remember the last n numbers shown to you.
          </div>
          <div className="w3-cell w3-cell-middle">
            <Link to="/LastNumbers">
              <h2>Last Numbers</h2>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Home
