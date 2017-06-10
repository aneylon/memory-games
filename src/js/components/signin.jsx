import React from 'react'
import {
  Link
} from 'react-router-dom'

const SignIn = () => (
  <div className='w3-display-container game-container'>
    <div className='w3-display-middle w3-card-2 w3-white w3-padding-16'>
      <h1>
        SignIn
      </h1>
      <form>
        <input type='text' placeholder='email'/>
        <input type='password' placeholder='password'/>
        <button>Sign In</button>
      </form>
      <Link to="/signUp">SignUp</Link>
    </div>
  </div>
)

export default SignIn
