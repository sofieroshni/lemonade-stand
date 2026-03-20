'use client'

import { useDispatch, useSelector } from 'react-redux'
import {buyLemon} from './lemonadeSlice'

export default function Shop() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.lemonade.cash)

  return (
    <div>
      <p>Cash: {cash}</p>
      <button onClick={() => dispatch(buyLemon())}>
        Buy Lemon
      </button>
    </div>
  )
}