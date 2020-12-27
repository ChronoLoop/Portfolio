import React from 'react';
import { Image, Col } from 'react-bootstrap';
import { useInView } from 'react-intersection-observer';
import './about.scss';
import UndrawImage from '../../assets/img/undraw/undraw_programming_2svr.svg';

const about = () => {
    const { ref, inView } = useInView({
        threshold: 0.5,
        triggerOnce: true
    });

    return (
        <section id="about" className="about section-padding">
            <h1>About Me</h1>
            <div className="two-column-container flex-column-reverse flex-lg-row">
                <Col ref={ref} lg={6} className={`animated ${inView ? 'fade-in-right' : ''}`}>
                    <div className="section-text">
                        <p>
                            I am a software engineer who graduated from the University of Florida in
                            Computer Science. I have a passion for web development and am always
                            open to chat.
                        </p>
                        <p>
                            Currently, I am looking for my next adventure in software engineering to
                            contribute meaningfully to a product I love and build up my skills to
                            become the most effective and knowledgeable engineer I can be.
                        </p>
                        <p>
                            You may find my most up-to-date resume <a href="#resume">here</a>.
                        </p>
                    </div>
                </Col>
                <Col lg={6} className="flex-center-content mb-3 mb-lg-0">
                    <Image
                        fluid
                        src={UndrawImage}
                        alt="Undraw Programming"
                        className="responsive-image"
                    />
                </Col>
            </div>
        </section>
    );
};

export default about;
