import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import ParticlesConfig from './particles.config';
import './particles.scss';

const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        container.play();
    }, []);
    return (
        <Particles
            init={particlesInit}
            loaded={particlesLoaded}
            options={ParticlesConfig}
            canvasClassName="particles-canvas"
        />
    );
};

export default ParticlesComponent;
