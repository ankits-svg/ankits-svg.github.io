import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import AboutMe from './Components/AboutMe';
import TechStack from './Components/TechStack';
import Tech2 from './Components/Tech2';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import GitStats from './Components/GitStats';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <About/>
      <br />
      <AboutMe/>
      <br />
      <TechStack/>
      <br />
      <br />
      {/* <Tech2/> */}
      {/* <Projects/> */}
      {/* <Skills/> */}
      <Projects/>
      <br />
      <br />
      <GitStats/>
      <br />
      <ContactMe/>
      {/* <br /> */}
      <Footer/>
    </div>
  );
}

export default App;
