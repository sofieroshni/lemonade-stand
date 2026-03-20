// store/store.js
import { configureStore } from '@reduxjs/toolkit'
import lemonadeSlice from '../redux/Lemonadeslice'
export const store = configureStore({
  reducer: {
    // cart: cartReducer,
        // lemonadeApi: lemonadeApiReducer
                lemonade: lemonadeSlice,

  },
})