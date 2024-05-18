import React, { useState } from 'react'
import styles from './Navbar.module.css' // Importing CSS module for styling

import { getImageUrl } from '../../utility'; // Importing utility function for getting image URLs


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false); // useState hook to manage the state of menu (open/close)

    // Function to toggle the menu state
    //Only applies to smaller devices
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

  return (
    <nav className={styles.Navbar}>
        <a className={styles.title} href='/'>My Portfolio</a> {/*Link to the home page when*/}
        <div className={styles.menu}>
            <img className={styles.menuOptn}
             src={menuOpen ? getImageUrl('assets/navbar/closeIcon.png') //conditional for displaying menu when clicked on
             : getImageUrl('assets/navbar/menuIcon.png')} 
             onClick={toggleMenu} //Toggle menu state on click
             alt="menu-optn"/>                          {/*conditional class for opening menu*/}
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOpen(false)}> {/*close the menu when the icon is clicked*/}
                <li>    
                    <a href='#about'>About</a> {/* Link to About section */}
                </li>
                <li>    
                    <a href='#experience'>Experience</a> {/* Link to Experience section */}
                </li>
                <li>    
                    <a href='#projects'>Projects</a> {/* Link to Projects section */}
                </li>
                <li>    
                    <a href='#contact'>Contact</a> {/* Link to Contact section */}
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
