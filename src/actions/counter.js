//@flow
import { INCREMENT_COUNTER,  } from './types'
import type { CounterType } from './types'
export const incrementCounter = (): CounterType => {
  return {
    type: INCREMENT_COUNTER
  }
}