import { configureStore, createSlice } from '@reduxjs/toolkit'
import lemonadeReducer from '../redux/LemonadeSlice'
import cartReducer from '../redux/cartSlice'
export const store = configureStore({
  reducer: {
    lemonade: lemonadeReducer,
    cart: cartReducer
  },
}) 