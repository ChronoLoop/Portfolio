import React from 'react';
import Typewriter from 'typewriter-effect';
import './title.scss';

const Title = () => {
    return (
        <div className="title-container my-1">
            <div className="mb-1">
                <strong>Kevin Wang</strong>
            </div>
            <div className="sub">
                <Typewriter
                    onInit={(typewriter) => {
                        typewriter.pauseFor(300).typeString('Full-Stack Web Developer').start();
                    }}
                    options={{
                        loop: false,
                        delay: 70
                    }}
                />
            </div>
        </div>
    );
};

export default Title;
