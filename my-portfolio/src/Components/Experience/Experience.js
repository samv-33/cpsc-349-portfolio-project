import React from 'react'
import styles from './Experience.module.css'; // Importing CSS module for styling
import skills from '../../data/skills.json'; // Importing skills data from JSON file
import history from '../../data/history.json'; // Importing history data from JSON file
import { getImageUrl } from '../../utility'; // Importing utility function for getting image URLs

// Functional component for displaying experience section
const Experience = () => {
  return <section className={styles.container} id="experience"> {/* Section container with CSS class and id to navigate*/}
    <h2 className={styles.title}>Experience</h2> {/* Title for the experience section */}
    <div className={styles.content}> {/* content container */}
    {/* Mapping through skills data to display */}
        <div className={styles.skills}>{skills.map((skill, id) => { 
            return ( <div className={styles.skill} key={id}> {/* Container for each skill */}
                <div className={styles.skillImgContainer}>
                <img src={getImageUrl(skill.imgSrc)} alt={skill.title}/>  {/* Image for the skill */}
                </div>
                <p>{skill.title}</p> {/* Title of the skill */}
                </div> 
            );  
        })}
        </div>
        <ul className={styles.history}> {/* Unordered list for experience history */}
           {/* Mapping through work history data */} 
           {
                history.map((historyItem, id) => {
                    return <li className={styles.historyItem} key={id}>
                        <img src={getImageUrl(historyItem.imageSrc)} alt={`${historyItem.institution} Logo`}/> {/* Logo for the institution */}
                        <div className={styles.historyItemInfo}>
                        <h3>{`${historyItem.role}, ${historyItem.institution}`}</h3> {/* Role and institution name */}
                        <p>{`${historyItem.startDate} - ${historyItem.endDate}`} </p> {/* Date range of working on the projects */}
                         {/* Mapping through experiences within each project history */}
                        <ul> { 
                                historyItem.experiences.map((experience, id) => { 
                                    return <li key={id}>{experience}</li>
                                })
                            }
                            {/* Displaying each experience */}
                        </ul>
                        </div>
                    </li>
                })
            }

        </ul>

    </div>
  </section>
}

export default Experience // Exporting the Experience component
