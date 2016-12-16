//@flow
import {INCREMENT_COUNTER} from '../actions/types'
const initialState: number = 0

const counter = (state:number = initialState, action: Object): number => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    default:
      return state
  }
}

export default counter