import { createStore,  combineReducers } from 'redux'

import counter from './reducers/counter'

let rootReducer  = combineReducers({
  counter: counter
})
let ctreateStore = createStore(rootReducer)

export default ctreateStore
