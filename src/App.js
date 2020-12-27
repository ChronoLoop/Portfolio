import React from 'react';
import './App.scss';
// components
import Navbar from './components/navbar/navbar';
import Home from './sections/home/home';
import About from './sections/about/about';
import Skills from './sections/skills/skills';
import Projects from './sections/projects/projects';
import Contact from './sections/contact/contact';
import Footer from './sections/footer/footer';

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
