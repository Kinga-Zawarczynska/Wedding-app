import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'
import * as ROUTES from '../constants/routes'

function Navbar() {
        return (
            <nav className={styles.Navbar}>
                <Link to={ROUTES.LANDING} className={styles.NavbarLogo}>Natalka&Konrad</Link>
                <NavLink to={ROUTES.SIGN_IN}>Zaloguj</NavLink>
            </nav>
        )
}

export default Navbar