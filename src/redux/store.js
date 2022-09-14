// import { initState } from './initState'
// import { rootReducer } from './reducers/rootReducer'
// import { applyMiddleware } from 'redux'
// import { composeWithDevTools } from 'redux-devtools-extension' 
import { configureStore } from '@reduxjs/toolkit'
import { currencyReducer } from './reducers/currencyReducer'

export const store = configureStore({
  reducer: {
    currency: currencyReducer}
  })
