import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import ContactInfo from './Components/Contact/ContactInfo';


function App() {
  return <div className={styles.App}>
    <Navbar/>
    <Hero/>
    <About/>
    <Experience/>
    <Projects/>
    <ContactInfo/>
  </div>;
}

export default App;
