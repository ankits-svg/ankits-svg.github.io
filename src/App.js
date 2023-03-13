import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
// import About from './Components/About1/About';
import AboutMe from './Components/AboutMe';
import TechStack from './Components/TechStack';

import {Projects} from './Components/Projects/Projects';

import ContactMe from './Components/Contact/ContactMe';
import Footer from './Components/Footer/Footer';

import {  Stack } from '@chakra-ui/react';


import { Techstacks } from './Components/Tech/Techstacks';
import { GithubCalender } from './Components/GitCalender/GithubCalender';
import About from './Components/About/About';
import {Nav} from './Components/Navbar/Nav.jsx';
// import { Introduction } from './Components/Intro/Introduction';




function App() {
  return (
    <div className='App'>
      <Nav/>
    {/* <Navbar/> */}
      
      
      <About/>
      <AboutMe/>
      
      <Stack/>
      
      
      <Techstacks/>
      <Projects/>
      <GithubCalender/>
    
      <ContactMe/>
     
      <Footer/>
      
      </div>
  );
}

export default App;
