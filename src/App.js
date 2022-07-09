
import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom';
import {HashLink as Link} from 'react-router-hash-link';
import HeroSection from './Components/heroSection/heroSection';
import AboutMe from './Components/aboutMe/AboutMe';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/contact';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <footer className="app-footer">

          
        
      </footer>

    </div>
    </BrowserRouter>
  );
  
}

export default App;
