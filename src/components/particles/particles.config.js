const particleConfig = {
    fullScreen: { enable: false },
    detectRetina: true,
    particles: {
        reduceDuplicates: true,
        number: {
            value: 40,
            limit: 50,
            density: {
                enable: true,
                area: 800
            }
        },
        color: {
            value: '#FFFAFA'
        },
        shape: {
            type: 'circle',
            stroke: {
                width: 0,
                color: '#000000'
            },
            polygon: {
                sides: 5
            }
        },
        opacity: {
            value: { min: 0.1, max: 0.45 }
        },
        size: {
            value: { min: 1, max: 11 },
            animation: {
                enable: true,
                speed: 5,
                startValue: 'random',
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: true,
            straight: false,
            outModes: 'out',
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600
            }
        },
        life: {
            duration: 5,
            count: 1
        }
    }
};

export default particleConfig;
