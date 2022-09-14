import { combineReducers } from 'redux'
import { currencyReducer } from './currencyReducer'

export const rootReducer = combineReducers({
  currency: currencyReducer,
})
