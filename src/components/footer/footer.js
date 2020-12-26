import React from 'react';
import './footer.scss';
import Socials from '../social/social';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <Socials footer />
                <div className="text-muted">© Copyright 2020 Kevin Wang</div>
            </div>
        </footer>
    );
};

export default Footer;
