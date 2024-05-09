import React from 'react'
import { getImageUrl } from '../../utility'

import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Sam</h1>
            <p className={styles.description}>I'm a Computer Science student who is 
                interested to become a full-stack developer.

            </p>
            <a href="mailto:psamuelyl@gmail.com" className={styles.contactInfo}>Contact Info</a>
        </div>
        <img src={getImageUrl('assets/hero/myavatar.png')} alt="hero-img" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.botBlur}/>
    </section>
  )
}

export default Hero
