//@flow
import { INCREMENT_COUNTER,  } from './types'
import type { CounterActionType } from './types'
export const incrementCounter = (): CounterActionType => {
  return {
    type: INCREMENT_COUNTER
  }
}