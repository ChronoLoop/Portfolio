import React from 'react';
import { Image, Col } from 'react-bootstrap';
import './about.scss';
import UndrawImage from '../../assets/img/undraw/undraw_programming_2svr.svg';

const about = () => {
    return (
        <section id="about" className="about dark section-padding">
            <h1 className="text-center mb-3">About Me</h1>
            <div className="d-flex flex-column-reverse flex-md-row">
                <Col
                    md={6}
                    className="d-flex flex-column justify-content-center section-text-container"
                >
                    <p>
                        I am a software engineer who graduated from the University of Florida in
                        Computer Science. I have a passion for web development and am always open to
                        chat.
                    </p>
                    <p>
                        Currently, I am looking for my next adventure in software engineering to
                        contribute meaningfully to a product I love and build up my skills to become
                        the most effective and knowledgeable engineer I can be.
                    </p>
                    <p>
                        You may find my most up-to-date resume <a href="#resume">here</a>.
                    </p>
                </Col>
                <Col
                    md={6}
                    className="d-flex justify-content-center align-items-center mb-3 mb-md-0"
                >
                    <Image fluid src={UndrawImage} alt="Undraw Programming" />
                </Col>
            </div>
        </section>
    );
};

export default about;
