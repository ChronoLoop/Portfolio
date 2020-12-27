import React from 'react';
import './footer.scss';
import Socials from '../../components/social/social';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="flex-center-content flex-column">
                <Socials footer />
                <div className="text-muted">© Copyright 2020 Kevin Wang</div>
            </div>
        </footer>
    );
};

export default Footer;
