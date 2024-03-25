import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesConfig from './particles.config';
import './Particles.scss';

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    return (
        <Particles
            init={particlesInit}
            options={ParticlesConfig}
            canvasClassName="particles-canvas"
        />
    );
};

export default ParticlesComponent;
