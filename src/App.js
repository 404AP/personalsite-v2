
import logo from './logo.svg';
import './App.css';
import HeroSection from './Components/heroSection/heroSection';
import AboutMe from './Components/aboutMe/AboutMe';
import Portfolio from './Components/portfolio/Portfolio';
import Contact from './Components/contact/contact';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AboutMe/>
      <Portfolio/>
      <Contact/>
      <footer className="app-footer">
        
        
        </footer>

    </div>
  );
}

export default App;
