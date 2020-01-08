import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar() {
        return (
            <nav className={styles.Navbar}>
                <Link to="/" className={styles.NavbarLogo}>Natalka&Konrad</Link>
                <NavLink to="/signin">Zaloguj</NavLink>
            </nav>
        )
}


export default Navbar
