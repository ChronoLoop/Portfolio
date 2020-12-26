import React, { useState } from 'react';
import './contact.scss';
import { Col, Form, Container, Button } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
    // const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    return (
        <section id="contact" className="contact section-padding">
            <h1 className="section-heading mb-1">Contact</h1>
            <div className="section-text-container text-center mb-4">
                Please feel free to drop a message below, and I will get in touch!
            </div>
            <Container fluid className="section-text-container">
                <Form onSubmit={handleSubmit}>
                    <div className="d-flex flex-row flex-wrap mb-2">
                        <Col md={8} className="p-0 pr-md-3">
                            <div>
                                <Form.Label className="m-0 mt-1">Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Form.Label className="m-0 mt-1">Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <Form.Label className="m-0 mt-1">Message:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Write Your Message "
                                    name="message"
                                    onChange={handleChange}
                                />
                            </div>
                            <Button type="submit" className="form-btn mt-2">
                                Send Message
                            </Button>
                        </Col>
                        <Col
                            md={4}
                            className="d-flex flex-column justify-content-md-center align-items-md-center p-0 ml-auto mt-3 mt-md-0"
                        >
                            <div className="d-block">
                                <div className="mb-3">
                                    <div className="contact-container">
                                        <FaEnvelope className="mr-1" />
                                        Email
                                    </div>
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
                                <div>
                                    <div className="contact-container">
                                        <FaLinkedinIn className="mr-1" />
                                        Linkedin
                                    </div>
                                    <div>
                                        <a
                                            href="https://linkedin.com/in/ikevinwang"
                                            rel="noopener noreferrer"
                                            target="_blank"
                                            className="contact-link"
                                        >
                                            linkedin.com/in/ikevinwang
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </div>
                </Form>
            </Container>
        </section>
    );
};

export default Contact;
