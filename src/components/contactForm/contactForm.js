import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import emailjs from 'emailjs-com';

const ContactForm = ({ emailErrorHandler, emailSuccessHandler, resetAlerts }) => {
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
            emailSuccessHandler();
        } catch (err) {
            emailErrorHandler();
        }
    };

    const handleSubmit = (e) => {
        const form = e.currentTarget;
        e.preventDefault();
        resetAlerts();
        if (form.checkValidity() === false) {
            e.stopPropagation();
            setValidated(true);
        } else {
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId="formName">
                <Form.Label className="m-0 mt-1">Name:</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label className="m-0 mt-1">Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Enter Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </Form.Group>
            <Form.Group controlId="formMessage">
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
            </Form.Group>
            <Button type="submit" className="form-btn mt-2">
                Send Message
            </Button>
        </Form>
    );
};

export default ContactForm;
