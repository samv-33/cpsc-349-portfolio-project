import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utility'


// Functional component 'About' to render the "About Me" section
const About = () => {
  return <section className={styles.container} id="about">
    <h2 className={styles.title}>About Me</h2>
    <div className={styles.content}>  
        <img className={styles.aboutImg} src={getImageUrl("assets/about/myavatar_desk.png")} alt="me-with-laptop"/>
    <ul className={styles.aboutItems}>
        <li className={styles.aboutItem}>
            <img className={styles.laptopImg} src={getImageUrl("assets/about/laptop.png")} alt="laptop-img"/>
            <div className={styles.aboutItemText}>
                <h3>Frontend Developer</h3>
                <p>I'm currently studying frontend development in college, and I would like to become a full-stack developer with 
                 great frontend development skills. 
                </p>
            </div>

        </li>
        
        <li className={styles.aboutItem}>
            <img className={styles.backendImg} src={getImageUrl("assets/about/backendIcon.png")} alt="backend-img"/>
            <div className={styles.aboutItemText}>
                <h3>Backend Developer</h3>
                <p>I haven't taken backend development yet, but I am currently taking Software Engineering Principles and I have learn 
                    about some backend services. However, I look forward in taking backend development in the Fall semester.
                </p>
            </div>

        </li>
        
        <li className={styles.aboutItem}>
            <img className={styles.mobileImg} src={getImageUrl("assets/about/mobileIcon.png")} alt=""/>
            <div className={styles.aboutItemText}>
                <h3>Mobile App Developer</h3>
                <p>I'm also interested in studying about Mobile Apps development. I plan to learn Native React to build fully optimized and responsive
                    Mobile Applications in the future as part of my career. 
                </p>
            </div>

        </li>
    </ul>

    </div>
  </section>
}

export default About
