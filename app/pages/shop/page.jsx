'use client'

import { useDispatch, useSelector } from 'react-redux'
import { buyLemon, sellLemonade, setLoading, setCocktails, setError } from '../../redux/LemonadeSlice'
import { useState, useEffect } from 'react'
import { addTooCart, removeItem } from '../../redux/cartSlice'

export default function Shop() {
  // HENT DATA FRA REDUX (som at se i LEGO-kassen)
  const dispatch = useDispatch()
  const cash = useSelector(state => state.lemonade.cash)
  const cocktails = useSelector(state => state.lemonade.cocktails)
  const loading = useSelector(state => state.lemonade.loading)
  const error = useSelector(state => state.lemonade.error)
  const cartItems = useSelector(state => state.cart.cartItems)
  
  const [name, setName] = useState('')

  // Når siden loader første gang, hent cocktails fra API
  useEffect(() => {
    // Sig til Redux: "Vi er ved at hente data!"
    dispatch(setLoading(true))

    // Hent data fra API
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=lemon')
      .then(response => response.json())
      .then(data => {
        // Sig til Redux: "Her er data'en!"
        dispatch(setCocktails(data.drinks || []))
      })
      .catch(err => {
        // Sig til Redux: "Der var en fejl!"
        dispatch(setError(err.message))
      })
      .finally(() => {
        // Sig til Redux: "Vi er færdige med at hente data!"
        dispatch(setLoading(false))
      })
  }, [dispatch])

  return (
    <div>
      <h1>Lemonade Shop</h1>
      
      <div>
        <label>Your Name</label>
        <input 
          type="text"
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      {/* Dine LEGO-spil */}
      <p>Cash: ${cash}</p>
      
      <button onClick={() => dispatch(buyLemon())}>
        Buy Lemon (-$10)
      </button>
      <button onClick={() => dispatch(sellLemonade())}>
        Sell Lemonade (+$15)
      </button>

      {/* Cocktails fra mit api */}
      <h2>Available Cocktails</h2>
      
      {loading && <p>Loading cocktails...</p>} 
      {error && <p>Error: {error}</p>}
              

      {cocktails.length > 0 && (
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '20px', marginTop: '20px'}}>
          {cocktails.map((drink) => (
            <div key={drink.idDrink}>
              <img 
                src={drink.strDrinkThumb} 
                alt={drink.strDrink}
              />
              <h3>{drink.strDrink}</h3>
              <p>{drink.strCategory}</p>
              <button onClick={() => dispatch(addTooCart(drink))}>
Tilføj til cart              </button>
            </div>
          ))}
        </div>
      )}

      {/* Vis cartItems */}
      {cartItems.length > 0 && (
        <div>
          <h2>Cart Items ({cartItems.length})</h2>
          {cartItems.map((item) => (
            <div key={item.idDrink}>
              <h4>{item.strDrink}</h4>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(removeItem(item.idDrink))}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}