import React from 'react' // Importing React library
import { getImageUrl } from '../../utility'; // Importing utility function to get image URLs
import styles from './Contact.module.css'; // Importing CSS module for styling

// Functional component for displaying contact information
const ContactInfo = () => {
  return <footer className={styles.container} id="contact"> {/* Footer container with CSS class and ID */}
    <div className={styles.text}>
    <h2>Contact Info</h2> {/* Heading for contact information */}
    <p>Any questions? Here are my contact info!  {/* Description text */}
    </p>
    </div>
    <ul className={styles.links}> {/* Unordered list for contact links */}
      <li className={styles.link}>  {/* List link for email contact */}
        <img src={getImageUrl("assets/contacts/gmailIcon.png")} alt="email contact info"/> {/* Email icon */}
        <a href="mailto:psamuelyl@gmail.com" target="_blank" rel="noopenr noreferrer">psamuelyl@gmail.com</a> {/* Email link that opens to a new tab when clicked*/}

      </li>
      <li className={styles.link}> {/* List link for GitHub contact */}
        <img src={getImageUrl("assets/contacts/githubIcon.png")} alt="github contact info"/> {/* GitHub icon */}
        <a href="https://www.github.com/samv-33" target="_blank" rel="noopener noreferrer">github.com/samv-33</a> {/* GitHub link that opens to a new tab when clicked*/}

      </li>
    </ul>
  </footer>;
}

export default ContactInfo // Exporting the ContactInfo component
