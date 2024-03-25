import React from 'react';
import './Footer.scss';
import Socials from '../components/Social';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex-center-content flex-column">
                <Socials footer />
                <div className="text-muted">Made by Kevin Wang</div>
            </div>
        </footer>
    );
};

export default Footer;
