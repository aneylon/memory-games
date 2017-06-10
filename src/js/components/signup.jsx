import React from 'react'

const SignUp = () => (
  <div className='w3-display-container game-container'>
    <div className='w3-display-middle w3-card-2 w3-white w3-padding-16'>
      <h1>
        SignUp
      </h1>
      <form className='w3-container'>
        <label>
          email
        </label>
        <input type='text' placeholder='email' className='w3-input' />
        <label>
          password
        </label>
        <input type='password' placeholder='password' className='w3-input' />
        <label>
          verify password
        </label>
        <input type='password' placeholder='password' className='w3-input' />
        <button>Sign Up</button>
      </form>
    </div>
  </div>
)

export default SignUp
