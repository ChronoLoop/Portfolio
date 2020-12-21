import React from 'react';
import Particles from 'react-particles-js';
import ParticlesConfig from './particles.config';

const ParticlesComponent = () => {
    return (
        <Particles
            params={ParticlesConfig}
            style={{
                position: 'absolute',
                zIndex: 1,
                left: 0,
                right: 0,
                bottom: 0,
                top: 0
            }}
        />
    );
};

export default ParticlesComponent;
