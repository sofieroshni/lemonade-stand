'use client'
import styles from '../../ui/Shop.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading, setCocktails, setError } from '../../redux/LemonadeSlice'
import { useState, useEffect } from 'react'
import { addTooCart, removeItem } from '../../redux/cartSlice'
// import {Buttons} from '/../components/Buttons'
// import styles from '../../globals.css'
export default function Shop() {
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
        dispatch(setCocktails(data.drinks || [])) //OBS MEGA VIGTIGT TIL EKSAMEN ///her at cocktails ender i arrayet fra min lemonadeSlice s
        // setCoctails er den actionpsayload jeg laver i L
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
   < div className={styles.wrapper}>
    <div className={styles.headershop}>
      <h1>Shop</h1>
     

</div>
      
      
      
      {loading && <p>Loading cocktails...</p>} 
      {error && <p>Error: {error}</p>}
              
{/* video: hvis cocktail-array ik er tomt så afspil følgende grid */} 
      {cocktails.length > 0 && (
        <div className="grid" id='grid'>
          {cocktails.map((drink) => ( //Gå igennem en liste(loope og lave nyt array)
            <div key={drink.idDrink}> 
            {/* husk til video, hvert coctaik/lemonadedrik får unik key baseret på id */}
              <img 
                src={drink.strDrinkThumb} 
                alt={drink.strDrink}
              />
              {/* til video-> drink objetekts "felt" */}
              <h3 className={styles.h3} >{drink.strDrink}</h3> 
              <p className={styles.p}>{drink.strCategory}</p>
              <button onClick={() => dispatch(addTooCart(drink))}> 
                {/* video- data sender med argu,emt ,ed drink (objekt/værdi) */}
Tilføj til cart              </button>
            </div>
          ))}
        </div>
      )}

      {cartItems.length > 0 && (
        <div className={styles.div}>
          <h2>Din Kurv ({cartItems.length})</h2>
          {cartItems.map((item) => (
            <div key={item.idDrink}>
              <h4 className={styles.className}>{item.strDrink}</h4>
              <p>Antal: {item.quantity}</p>
              <button className={styles.button} onClick={() => dispatch(removeItem(item.idDrink))}>
                Fjen
              </button>       
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
