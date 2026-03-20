import { configureStore } from '@reduxjs/toolkit'
import lemonadeReducer from '../redux/LemonadeSlice'
export const store = configureStore({
  reducer: {
    lemonade: lemonadeReducer,
  },
})