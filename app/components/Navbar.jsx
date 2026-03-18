"use client" 
import styles from "./Navbar.module.css";
export default function Navbar(){
    return(
<nav className={styles.nav}>
<div>
    <a href="/">Home</a>
    <a href="/shop">Shop</a>
    <a href="/cart">Cart</a>
    <a href="/checkout">Checkout</a>


</div>

</nav>

    );
}