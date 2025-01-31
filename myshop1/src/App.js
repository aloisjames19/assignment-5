// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import MyTeam from './components/MyTeam';
import MyProjects from './components/MyProjects';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Projects />
      <MyProjects/>
      <MyTeam/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;