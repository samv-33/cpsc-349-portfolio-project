import React from 'react'
import { getImageUrl } from '../../utility';
import styles from './Contact.module.css';

const ContactInfo = () => {
  return <footer className={styles.container} id="contact">
    <div className={styles.text}>
    <h2>Contact Info</h2>
    <p>Any questions? Here are my contact info!
    </p>
    </div>
    <ul className={styles.links}>
      <li className={styles.link}>
        <img src={getImageUrl("assets/contacts/gmailIcon.png")} alt="email contact info"/>
        <a href="mailto:psamuelyl@gmail.com" target="_blank" rel="noopenr noreferrer">psamuelyl@gmail.com</a>

      </li>
      <li className={styles.link}>
        <img src={getImageUrl("assets/contacts/githubIcon.png")} alt="github contact info"/>
        <a href="https://www.github.com/samv-33" target="_blank" rel="noopener noreferrer">github.com/samv-33</a>

      </li>
    </ul>
  </footer>;
}

export default ContactInfo
