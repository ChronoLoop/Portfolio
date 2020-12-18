import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.scss';

const MyNavbar = () => {
    return (
        <>
            <Navbar fixed="top" variant="dark" expand="sm" className="animate-navbar nav-theme">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                    <Nav className="nav-items-container">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
};

export default MyNavbar;
