import React, { useState } from 'react';
import './Contact.scss';
import { Container, Alert } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const emailErrorHandler = () => {
        setShowError(true);
    };
    const emailSuccessHandler = () => {
        setShowSuccess(true);
    };
    const resetAlerts = () => {
        setShowError(false);
        setShowSuccess(false);
    };

    return (
        <section id="contact" className="contact section-padding">
            <h1>Contact</h1>
            <div className="section-text text-center mb-4">
                Please feel free to drop a message below, and I will get in touch!
            </div>
            <Container className="contact-content section-text mt-1">
                <div className="w-100">
                    {showError ? (
                        <Alert variant="danger" onClose={() => setShowError(false)} dismissible>
                            An error has occured. Please try contacting me through email.
                        </Alert>
                    ) : null}
                    {showSuccess ? (
                        <Alert variant="success" onClose={() => setShowSuccess(false)} dismissible>
                            Your message has been successfully sent. I will contact you very soon!
                        </Alert>
                    ) : null}
                    <ContactForm
                        emailErrorHandler={emailErrorHandler}
                        emailSuccessHandler={emailSuccessHandler}
                        resetAlerts={resetAlerts}
                    />
                </div>
                <div className="d-flex flex-column mt-4 w-100">
                    <div className="contact-container mb-3">
                        <h5>
                            <FaEnvelope className="mr-1" />
                            Email:
                        </h5>
                        <div>
                            <a
                                href="mailto:kevinwang1036@gmail.com"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="contact-link"
                            >
                                kevinwang1036@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="contact-container">
                        <h5>
                            <FaLinkedinIn className="mr-1" />
                            Linkedin
                        </h5>
                        <div>
                            <a
                                href="https://www.linkedin.com/in/ikevinwang"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="contact-link"
                            >
                                https://www.linkedin.com/in/ikevinwang
                            </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Contact;
