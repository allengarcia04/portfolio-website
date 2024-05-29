
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import TechnicalSkills from "./components/TechnicalSkills";

function App() {
  return (
    <div>
      <NavBar /> 
      <Home />
      <About />
      <Portfolio />
      <TechnicalSkills />
      <Contact />
      
    
      <SocialLinks />
    </div>
  );
}

export default App;
