import React from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

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
