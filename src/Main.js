//@flow
import React from 'react'

import { Provider } from 'react-redux'
import App from './components/App'

import { store } from './createStore'

const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default Main