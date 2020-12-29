import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import './social.scss';

const Social = ({ footer }) => {
    return (
        <div className="my-2">
            <ul className={`social-icons ${footer ? 'footer-icons' : ''}`}>
                <li>
                    <a href="mailto:kevinwang1036@gmail.com" className="icon-container email">
                        <FaEnvelope className="icon email-icon" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.github.com/ikevinws"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="icon-container github"
                    >
                        <FaGithub className="icon github-icon" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.linkedin.com/in/ikevinwang"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="icon-container linkedin"
                    >
                        <FaLinkedinIn className="icon linkedin-icon" />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Social;
