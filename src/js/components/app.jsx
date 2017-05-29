import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Home from './home'
import About from './about'
import NumbersInARow from './numbersInARow'
import LastNumbers from './lastNumbers'
import ColorVWord from './colorVWord'
import ColorAnimalPlace from './colorAnimalPlace'

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/numbersInARow">Numbers In A Row</Link></li>
        <li><Link to="/lastNumbers">Last Numbers</Link></li>
        <li><Link to="/colorVWord">Color vs Word</Link></li>
        <li><Link to="/colorAnimalPlace">ColorAnimalPlace</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/numbersInARow" component={NumbersInARow} />
      <Route path="/lastNumbers" component={LastNumbers} />
      <Route path="/colorVWord" component={ColorVWord} />
      <Route path="/colorAnimalPlace" component={ColorAnimalPlace} />
      <Route path="/about" component={About} />
    </div>
  </Router>
)

export default App
