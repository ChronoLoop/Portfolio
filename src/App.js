import React from 'react';
import './App.scss';
// components
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from './components/about/about';

const App = () => {
    return (
        <div className="App">
            <Navbar />
            <Home />
            <About />
        </div>
    );
};

export default App;
