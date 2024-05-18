import React from 'react'
import { getImageUrl } from '../../utility';
import styles from './ProjectCard.module.css';

// Destructuring the 'project' object prop from the json file to extract properties such as title, imageSrc, description, skills, demo, and source
const ProjectCard = ({project: {title, imageSrc, description, skills, demo, source}}) => {
  return <div className={styles.container}>
     {/* Project Images */}
  <img src={getImageUrl(imageSrc)} alt={`Img of ${title}`} className={styles.image}/>

     {/* Project titles */}
  <h3 className={styles.title}>{title}</h3>
     {/* Project descriptions */}
  <p className={styles.description}>{description}</p>
   {/* Project Skills */}
  <ul className={styles.skills}>{
      skills.map((skill, id) => {
          return <li key={id} className={styles.skill}>{skill}</li>
      })
      } </ul>
      {/* Project Links */}
      <div className={styles.links}>
        {/* Demo Link */}
          <a href={demo} className={styles.link} target='_blank' rel='noopener noreferrer'>Demo</a>
          {/* Source Link */}
          <a href={source} className={styles.link} target='_blank' rel='noopener noreferrer'>Source</a>
      </div>
</div>  
}

export default ProjectCard
