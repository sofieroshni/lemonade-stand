'use client';

import Link from 'next/link';
import styles from '@/ui/Header.module.css';  // ← Korrekt sti!

export default function Header() {
  return (
    <header className={styles.header}>  {/* ← className, ikke style */}
      <h1 className={styles.title}>Min Webshop</h1>
      <nav className={styles.nav}>
        <Link href="/" className={styles.link}>Home</Link>
        <Link href="/pages/shop" className={styles.link}>Shop</Link>
        <Link href="/pages/cart" className={styles.link}>Kurv</Link>
        <Link href="/pages/checkout" className={styles.link}>Checkout</Link>
      </nav>
    </header>
  );
}