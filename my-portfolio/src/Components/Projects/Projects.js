import React from 'react';
import projects from "../../data/projects.json"; // Importing project data from JSON file

import ProjectCard from './ProjectCard'; // Importing ProjectCard component

import styles from './Projects.module.css'; // Importing CSS module for styling


// Functional component for displaying the projects section
const Projects = () => {
  return <section className={styles.container} id="projects">  {/* Section container with CSS class and ID */}
    <h2 className={styles.title}>Projects</h2>  {/* Title for the projects section */}
    <div className={styles.projects}> {/* Container for project cards */}
        {
            projects.map((project, id) => { // Mapping through projects data to display each project
             return <ProjectCard key={id} project={project} /> // Rendering ProjectCard component for each project
            })
        }
    </div>
  </section>;
};

export default Projects // Exporting the Projects component

