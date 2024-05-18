// Importing the CSS module for styling
import styles from './App.module.css';

// Importing the components used in the application
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import ContactInfo from './Components/Contact/ContactInfo';


// Main App component
function App() {
  return <div className={styles.App}> {/* Applying the App styles */}
    {/*All components used in the project are here*/}
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <ContactInfo/>
  </div>;
}

// Exporting the App component as the default export
export default App;
