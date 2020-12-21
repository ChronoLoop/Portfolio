import React from 'react';
import { Image } from 'react-bootstrap';
import './hero.scss';
import Particles from '../particles/particles';
import Title from '../title/title';
import ProfileImage from '../../assets/img/profile/profile.jpg';
import Social from '../social/social';

const Hero = () => {
    return (
        <div id="home" className="position-relative">
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
        </div>
    );
};

export default Hero;
