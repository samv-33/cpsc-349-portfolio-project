import React, { useState } from 'react'
import styles from './Navbar.module.css'

import { getImageUrl } from '../../utility';


const Navbar = () => {
  return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuOptn}
             src={getImageUrl('navbar/menuIcon.png')} 
             alt="menu-optn"/>
            <ul className={styles.menuItems}>
                <li>    
                    <a href='#about'>About</a>
                </li>
                <li>    
                    <a href='#experience'>Experience</a>
                </li>
                <li>    
                    <a href='#projects'>Projects</a>
                </li>
                <li>    
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
