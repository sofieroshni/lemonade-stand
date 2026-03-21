'use client'

import Link from 'next/link'
import styles from '../ui/Header.module.css' 
import { useSelector } from 'react-redux'

export default function Header() {
  const cartItems = useSelector(state => state.cart.cartItems)
  
  return (
    <header className={styles.header}> 
      <h1 className={styles.title}>Min Webshop</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/pages/shop" className={styles.link}>Shop</Link>
        <Link href="/pages/cart" className={styles.link}>Kurv ({cartItems.length})</Link>
        <Link href="/pages/checkout" className={styles.link}>Checkout</Link>
      </nav>
    </header>
  )
}