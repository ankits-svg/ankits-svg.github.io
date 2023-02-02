import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import About from './Components/About';
import AboutMe from './Components/AboutMe';
import TechStack from './Components/TechStack';

import Projects from './Components/Projects';

import ContactMe from './Components/ContactMe';
import Footer from './Components/Footer';
import GitStats from './Components/GitStats';
import Tech4 from './Components/tech4';
import Tech5 from './Components/Tech5';
import Tech6 from './Components/Tech6';
import Tech7 from './Components/Tech7';
import Tech8 from './Components/Tech8';
import Tech9 from './Components/Tech9';
import { Heading, Stack } from '@chakra-ui/react';



function App() {
  return (
    <div className="App">
      <Navbar/>
      
      <About/>
      <br />
      <AboutMe/>
      <br />
      <TechStack/>
      {/* <Tech5/> */}
      <Stack/>
      <br />
      <br />
      <Heading size='lg' fontSize='50px' color={"blue.500"}>
      Portfolio
      </Heading>
      <Tech4/>
      <Tech5/>
      <Tech6/>
      <Tech7/>
      <Tech8/>
      <Tech9/>
      <br />
      {/* <Tech2/> */}
      {/* <Projects/> */}
      {/* <Skills/> */}
      {/* <Projects/> */}
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
