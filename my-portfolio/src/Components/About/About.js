import React from 'react'
import styles from './About.module.css'
import { getImageUrl } from '../../utility'


const About = () => {
  return <section>
    <div className={styles.container}>
        <h2 className={styles.title}>About</h2>
    <img className={styles.About} src={getImageUrl("assets/about/myavatar_desk.png")} alt="me-with-laptop"/>
    <ul>
        <li>
            <img src={getImageUrl("")} alt=""/>
            <div>
                <h3>Frontend Developer</h3>
                <p>I'm currently studying frontend development in college, and I would like to become a full-stack developer with 
                 great frontend development skills. 
                </p>
            </div>

        </li>
    </ul>

    </div>
  </section>
}

export default About
