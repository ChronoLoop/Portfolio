import React, { useState } from 'react';
import './contact.scss';
import { Col, Form, Container, Button, Alert } from 'react-bootstrap';
import { FaEnvelope, FaLinkedinIn } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const resetForm = () => {
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    const sendEmail = async (data) => {
        try {
            await emailjs.send(
                'service_r9u5wuc',
                'template_vkvcwvc',
                data,
                'user_y7mncT0M4K0nUfhB2xhoc'
            );
            setShowSuccess(true);
        } catch (err) {
            setShowError(!showError);
        }
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();

        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
            setShowError(false);
            setShowSuccess(false);
            sendEmail({ ...formData });
            setValidated(false);
            resetForm();
        }
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
            <Container fluid className="section-text-container p-4">
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

                <div className="contact-content">
                    <Col md={7} className="p-0 pr-3">
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <div>
                                <Form.Label className="m-0 mt-1">Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter Your Name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label className="m-0 mt-1">Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter Your Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div>
                                <Form.Label className="m-0 mt-1">Message:</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    placeholder="Write Your Message "
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Button type="submit" className="form-btn mt-2">
                                Send Message
                            </Button>
                        </Form>
                    </Col>
                    <Col
                        md={5}
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
            </Container>
        </section>
    );
};

export default Contact;
