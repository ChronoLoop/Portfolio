import React from 'react';
import './App.scss';
// components
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;
