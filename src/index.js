import React from 'react'

import { Provider } from 'react-redux'
import App from './components/App.jsx'

import createStore from './createStore'

const store = createStore()

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Main