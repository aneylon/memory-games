import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import UserInfo from '../containers/userInfo'
import User from './user'
import SignIn from './signIn'
import SignUp from './signUp'
import Home from './home'
import About from './about'
import NumbersInARow from './numbersInARow'
import LastNumbers from './lastNumbers'
import ColorVWord from './colorVWord'
import ColorAnimalPlace from './colorAnimalPlace'
import 'w3-css/w3.css'


class App extends React.Component {

  openSideBar() {
    document.getElementById("mySidebar").style.display = "block";
  }

  closeSideBar() {
    document.getElementById("mySidebar").style.display = "none";
  }

  render () {
    return (
      <Router>
        <div>
          <nav>
            <button className="w3-button w3-xlarge w3-hide-large" onClick={this.openSideBar}>&#9776;</button>
            <div className="w3-large w3-card-2 w3-sidebar w3-bar-block w3-collapse w3-animate-left w3-blue" id="mySidebar">
              <span className="w3-bottombar w3-border-black w3-bar-item w3-padding-24 w3-dark-grey">Memory Games</span>
              <button className="w3-bar-item w3-button w3-hide-large" onClick={this.closeSideBar}>Close &times;</button>
              <Link to="/" className="w3-bar-item w3-button">Home</Link>
              <Link to="/numbersInARow" className="w3-bar-item w3-button">Numbers In A Row</Link>
              <Link to="/lastNumbers" className="w3-bar-item w3-button">Last Numbers</Link>
              <Link to="/colorVWord" className="w3-bar-item w3-button">Color vs Word</Link>
              <Link to="/colorAnimalPlace" className="w3-bar-item w3-button">ColorAnimalPlace</Link>
              <Link to="/about" className="w3-bar-item w3-button">About</Link>
            </div>
          </nav>

          <section id="content">
            <Route exact path="/" component={Home} />
            <Route path="/numbersInARow" component={NumbersInARow} />
            <Route path="/lastNumbers" component={LastNumbers} />
            <Route path="/colorVWord" component={ColorVWord} />
            <Route path="/colorAnimalPlace" component={ColorAnimalPlace} />
            <Route path="/about" component={About} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/user" component={User} />
            <Route path="/userInfo" component={UserInfo} />
          </section>

        </div>
      </Router>
    )
  }

}


export default App
