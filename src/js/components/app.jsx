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
import AddNumbers from './addNumbers'
import RandomMath from './randomMath'
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
              <Link to="/NumbersInARow" className="w3-bar-item w3-button">Numbers In A Row</Link>
              <Link to="/LastNumbers" className="w3-bar-item w3-button">Last Numbers</Link>
              <Link to="/ColorVWord" className="w3-bar-item w3-button">Color vs Word</Link>
              <Link to="/ColorAnimalPlace" className="w3-bar-item w3-button">ColorAnimalPlace</Link>
              <Link to="/About" className="w3-bar-item w3-button">About</Link>
            </div>
          </nav>

          <section id="content">
            <Route exact path="/" component={Home} />
            <Route path="/NumbersInARow" component={NumbersInARow} />
            <Route path="/LastNumbers" component={LastNumbers} />
            <Route path="/ColorVWord" component={ColorVWord} />
            <Route path="/ColorAnimalPlace" component={ColorAnimalPlace} />
            <Route path="/About" component={About} />
            <Route path="/SignIn" component={SignIn} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/User" component={User} />
            <Route path="/UserInfo" component={UserInfo} />
            <Route path="/AddNumbers" component={AddNumbers} />
            <Route path="/RandomMath" component={RandomMath} />
          </section>

        </div>
      </Router>
    )
  }

}


export default App
