import { RiHandHeartFill } from "react-icons/ri/";
import React , {useEffect}  from 'react';

import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import HeroSection from './Components/heroSection/heroSection';
import AboutMe from './Components/aboutMe/AboutMe';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/contact';
import Navbar from './Components/Navbar/Navbar';

function App() {


  useEffect(() => {
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
    return () => {
      window.removeEventListener('resize');
    };
  }, [])
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <footer className="app-footer">
        <div className="menu-container">
          <ul className="menu-options">
                    <li className="menu-item">
                        <Link to="#" className='link' smooth>
                            Home
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#aboutMe" className='link' smooth>
                            About Me
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#portfolio" className='link' smooth>
                            Portfolio
                        </Link>
                    </li>
                    <li className="menu-item">
                        <Link to="#contact" className='link' smooth>
                            Contact
                        </Link>
                    </li>
          </ul>
        </div>
        <p className="thankyou"> Thanks for visiting my Website! <RiHandHeartFill/> </p>
      </footer>

    </div>
    </BrowserRouter>
  );
  
}

export default App;
