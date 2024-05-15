import React from 'react'
import { getImageUrl } from '../../utility';

const ContactInfo = () => {
  return <footer>
    <h2>Contact Info</h2>
    <p>Any questions? Here are my contact info!
    </p>
    <ul>
      <li>
        <img src={getImageUrl("assets/contacts/gmailIcon.png")} alt="email contact info"/>
        <p></p>

      </li>
      <li>
        <img src={getImageUrl("assets/contacts/githubIcon.png")} alt="github contact info"/>
        <p></p>

      </li>
    </ul>
  </footer>;
}

export default ContactInfo
