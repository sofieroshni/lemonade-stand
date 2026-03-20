'use client'

import { useDispatch, useSelector } from 'react-redux'
// import { buyLemon } from '../../redux/Lemonadeslice'
import { buyLemon, sellLemonade } from '../../redux/LemonadeSlice'

export default function Shop() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.lemonade.cash)

  return (
    <div>
      <h1>Shop</h1>
      <p>Cash: {cash}</p>
      <button onClick={() => dispatch(buyLemon())}>
        Buy Lemon
      </button>
       <button onClick={() => dispatch(sellLemonade())}>
        Buy Lemon
      </button>
    </div>
  )
}