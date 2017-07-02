import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'

const createStroeWithMiddleWare = applyMiddleware(ReduxPromise)(createStore)

ReactDOM.render(
  <Provider store={createStroeWithMiddleWare(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#app'))
