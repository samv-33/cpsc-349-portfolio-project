import React, { useState } from 'react'
import styles from './Navbar.module.css'

import { getImageUrl } from '../../utility';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href='/'>My Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuOptn}
             src={menuOpen ? getImageUrl('assets/navbar/closeIcon.png') 
             : getImageUrl('assets/navbar/menuIcon.png')} 
             onClick={()=>setMenuOpen(!menuOpen)}
             alt="menu-optn"/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={()=>setMenuOpen(false)}>
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
