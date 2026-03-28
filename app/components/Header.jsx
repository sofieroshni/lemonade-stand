'use client'

import Link from 'next/link'
import styles from '../ui/Header.module.css' 
import { useSelector } from 'react-redux'

export default function Header() {
  const cartItems = useSelector(state => state.cart.cartItems)
  
  return (
    <header className={styles.header}> 
    <img className={styles.headerimage} src="/images/logos/blackgrouplemon.png" alt="" />
      <h3 className={styles.title}>CitrusDrop</h3>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/pages/shop" className={styles.link}>Shop</Link>
        <Link href="/pages/cart" className={styles.link}>Kurv ({cartItems.length})</Link>
        <Link href="/pages/checkout" className={styles.link}>Checkout</Link>
        {/* <Link href="/pages/dinStand" className={styles.link}>Egen Shop</Link> */}

      </nav>
    </header>
  )
}