import React from 'react';
import { Image } from 'react-bootstrap';
import './home.scss';
import Particles from '../particles/particles';
import Title from '../title/title';
import ProfileImage from '../../assets/img/profile/profile.jpg';
import Social from '../social/social';

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
