import {INCREMENT_COUNTER} from '../actions/types'
const initialState = 0

const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    default:
      return state
  }
}

export default counter