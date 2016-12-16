//@flow
import { createStore,  combineReducers } from 'redux'

import counter from './reducers/counter'

let rootReducer  = combineReducers({
  counter: counter
})
let store = createStore(rootReducer)

export default store
