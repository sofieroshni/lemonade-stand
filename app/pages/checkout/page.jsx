'use client'

import { useSelector } from 'react-redux'
import styles from '../../ui/Shop.module.css'


export default function Checkout() {
  const boughtItems = useSelector(state => state.cart.boughtItems)

  return (
    <div>
      <div className={styles.headershop}>
      <h1>Checkout</h1>
      </div>
      {boughtItems.length === 0 ? (
        <p className={styles.p}>Du har ikke købt noget endnu</p>
      ) : (
        <div>
          {boughtItems.map((purchase, index) => (
            <div key={index}>
              <h2>Køb #{index + 1}</h2>
              <p>Dato: {purchase.timestamp}</p>
              
              <h3>Varer:</h3>
              {purchase.items.map((item) => (
                <div key={item.idDrink}>
                  <p>{item.strDrink} x{item.quantity} = ${item.price * item.quantity}</p>
                </div>
              ))}
              
              <h3>Total: ${purchase.total}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}