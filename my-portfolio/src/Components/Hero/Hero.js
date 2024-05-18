import React, { useEffect, useRef } from 'react'
import { getImageUrl } from '../../utility'

import styles from './Hero.module.css';

//Function for the Intro or Hero section of the portfolio
const Hero = () => {
   // Create a ref to reference the content div
  const contentRef = useRef(null);

   // useEffect to add a scroll event listener
  useEffect(() => {
     // Handler to manage the scroll effect
    const scrollHandler = () =>{
        // Get the content element
      const content = contentRef.current;
      if(!content) return;

      // Get the viewport height and the content position from the top of the viewport
      const viewportHeight = window.innerHeight;
      const contentPosition = content.getBoundingClientRect().top;

      //Position of the content is hidden until it is scrolled away from the viewportHeight
      if (contentPosition < viewportHeight) {
        content.querySelectorAll(`.${styles.title}, .${styles.description}, .${styles.contactInfo}`)
          .forEach(element => {
            element.style.transform = 'translateX(0)'; //transition starting from the initial position
            element.style.opacity = '1'; //content will be visible after transition
          });
      }
    };
    //Add scroll event listener
      window.addEventListener('scroll', scrollHandler);
      return () => {
        //Cleanup function to remove the event listener
        window.removeEventListener('scroll', scrollHandler);
      };
    }, []);

    //Content from the Hero section is displayed such as the title, description and a contact button
  return (
    <section className={styles.container}>
        <div className={styles.content} ref={contentRef}> {/*Content div is referenced here*/}
            <h1 className={styles.title}>Hi, I'm Sam</h1>
            <p className={styles.description}>I'm a Computer Science student who is 
                interested to become a full-stack developer.

            </p>{/*The user can email me when pressing the contact button. The value in rel is to make it secure when opening the link in a new tab*/}
            <a href="mailto:psamuelyl@gmail.com" className={styles.contactInfo} target='_blank' rel='noopener noreferrer'>Contact Me</a>
        </div> {/*Avatar Image is displayed here. Using the getImageUrl function imported from the utility.js file*/}
        <img src={getImageUrl('assets/hero/myavatar.png')} alt="hero-img" className={styles.heroImg}/>
        <div className={styles.topBlur}/>
        <div className={styles.botBlur}/>
    </section>
  )
}

export default Hero
