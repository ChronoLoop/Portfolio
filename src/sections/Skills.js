import React from 'react';
import './Skills.scss';
import { Col, Image } from 'react-bootstrap';
import { FaCode, FaDatabase, FaToolbox } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import UndrawImage from '../assets/img/undraw/undraw_code_review_l1q91.svg';
import Skill from '../components/Skill';

const skills = [
    {
        heading: 'Languages',
        icon: FaCode,
        items: ['TypeScript/JavaScript', 'Go', 'C++', 'C#', 'Java']
    },
    {
        heading: 'Front-end Development',
        icon: GoBrowser,
        items: ['HTML', 'CSS/SCSS', 'React', 'Solid.js', 'Tailwind CSS', 'Bootstrap', 'Redux']
    },
    {
        heading: 'Back-end Development',
        icon: FaDatabase,
        items: ['Node.JS', 'Express', 'Passport.JS', 'MongoDB', 'SQL (PostgreSQL)']
    },
    {
        heading: 'Tools',
        icon: FaToolbox,
        items: ['Git', 'Bash', 'Docker', 'AWS (S3)', 'Unity', 'Netlify', 'Railway']
    }
];

const SkillsComponent = () => {
    return (
        <section id="skills" className="skills section-padding">
            <h1>Skills</h1>
            <div className="two-column-container flex-column flex-lg-row">
                <Col lg={6} className="flex-center-content">
                    <Image
                        src={UndrawImage}
                        alt="Undraw Programming"
                        className="responsive-image"
                    />
                </Col>
                <Col lg={6} className="p-3">
                    <div>
                        {skills.map((skill, index) => {
                            // eslint-disable-next-line react/no-array-index-key
                            return <Skill skill={skill} key={index} />;
                        })}
                    </div>
                </Col>
            </div>
        </section>
    );
};

export default SkillsComponent;
