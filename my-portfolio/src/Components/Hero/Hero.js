import React, { useEffect, useRef } from 'react'
import { getImageUrl } from '../../utility'

import styles from './Hero.module.css';

const Hero = () => {
  const contentRef = useRef(null);

  useEffect(() => {
    const scrollHandler = () =>{
      const content = contentRef.current;
      if(!content) return;

      const viewportHeight = window.innerHeight;
      const contentPosition = content.getBoundingClientRect().top;

      /*Position of the content is hidden until scrolled to view the info */
      if (contentPosition < viewportHeight) {
        content.querySelectorAll(`.${styles.title}, .${styles.description}, .${styles.contactInfo}`)
          .forEach(element => {
            element.style.transform = 'translateX(0)';
            element.style.opacity = '1';
          });
      }
    };

      window.addEventListener('scroll', scrollHandler);
      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }, []);


  return (
    <section className={styles.container}>
        <div className={styles.content} ref={contentRef}>
            <h1 className={styles.title}>Hi, I'm Sam Vo!</h1>
            <p className={styles.description}>I'm a Computer Science student who is 
                interested to become a full-stack developer.

            </p>
            <a href="mailto:psamuelyl@gmail.com" className={styles.contactInfo} target='_blank' rel='noopener noreferrer'>Contact Me</a>
        </div>
        <img src={getImageUrl('assets/hero/myavatar.png')} alt="hero-img" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.botBlur}/>
    </section>
  )
}

export default Hero
