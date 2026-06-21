import { configureStore } from '@reduxjs/toolkit'
 import CounterReducer from './slice/Counterslice'
 import TheamReducer from './slice/Theamslice'

export const store = configureStore({
  reducer: {
Counter:CounterReducer,
Theam:TheamReducer
  },
})

 