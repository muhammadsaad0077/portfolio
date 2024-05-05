import './App.css';
import About from './Components/About Me/About';
import Body from './Components/Body';
import Hero from './Components/HeroSection/Hero';
import Navbar from './Components/Navbar/Navbar';
import Project from './Components/Projects/Project';

function App() {
  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Body/>
    </div>
  );
}

export default App;

/*
Namaste React Ep#20 Notes



*/
