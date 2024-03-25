import React from 'react';
import { Image } from 'react-bootstrap';
import './Home.scss';
import Particles from '../components/particles/Particles';
import Title from '../components/Title';
import ProfileImage from '../assets/img/profile/profile.jpg';
import Social from '../components/Social';

const Home = () => {
    return (
        <section id="home">
            <Particles />
            <div className="hero">
                <div className="hero-body">
                    <Image
                        fluid
                        roundedCircle
                        src={ProfileImage}
                        alt="Kevin Wang"
                        className="profile-image"
                    />
                    <Title />
                    <Social />
                </div>
            </div>
        </section>
    );
};

export default Home;
