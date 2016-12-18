//@flow
import { createStore,  combineReducers } from 'redux'

import counter from './reducers/counter'

let rootReducer  = combineReducers({
  counter: counter
})
export const store = createStore(rootReducer)


export type rootStore = {
    counter: number
}