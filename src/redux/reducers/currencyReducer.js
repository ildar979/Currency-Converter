import {
  CURRENCY_DATA_TYPING,
  DEFAULT_CURRENCY_TYPING,
  TYPING_CURRENCY_NAME,
  TYPING_INPUT_VALUE,
} from '../actionTypes'
import { initState } from '../initState'

export const currencyReducer = (state = initState, action) => {
  const { type, payload } = action
  switch (type) {
    case TYPING_INPUT_VALUE:
      return { ...state, amount: payload }
    case DEFAULT_CURRENCY_TYPING:
      return { ...state, activeCurrency: payload }
    case TYPING_CURRENCY_NAME:
      return { ...state, activeCurrency: payload }
    case CURRENCY_DATA_TYPING:
      return { ...state, currencyData: payload }
    default:
      return state
  }
}
