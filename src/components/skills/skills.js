import React from 'react';
import './skills.scss';
import { Col, Image } from 'react-bootstrap';
import { FaCode, FaDatabase, FaToolbox } from 'react-icons/fa';
import { GoBrowser } from 'react-icons/go';
import UndrawImage from '../../assets/img/undraw/undraw_code_review_l1q9.svg';

const skills = [
    {
        heading: 'Languages',
        icon: FaCode,
        items: ['JavaScript', 'C++', 'C#', 'Java']
    },
    {
        heading: 'Front-end Development',
        icon: GoBrowser,
        items: ['HTML', 'CSS', 'React', 'Sass', 'Bootstrap']
    },
    {
        heading: 'Back-end Development',
        icon: FaDatabase,
        items: ['Node.JS', 'Express', 'MongoDB', 'SQL']
    },
    {
        heading: 'Tools',
        icon: FaToolbox,
        items: ['Git', 'Bash', 'Unity', 'Heroku']
    }
];

const SkillsComponent = () => {
    return (
        <section id="skills" className="dark section-padding">
            <h1 className="section-heading">Skills</h1>
            <div className="d-flex flex-column flex-md-row">
                <Col
                    md={6}
                    className="d-flex justify-content-center align-items-center mb-4 mb-md-0 p-3"
                >
                    <Image
                        src={UndrawImage}
                        alt="Undraw Programming"
                        className="responsive-image"
                    />
                </Col>
                <Col md={6} className="d-flex flex-column justify-content-center p-3">
                    {skills.map((skill, index) => {
                        const Icon = skill.icon;
                        const Items = skill.items.map((item) => <li>{item}</li>);
                        return (
                            // eslint-disable-next-line react/no-array-index-key
                            <div className="skill-item" key={index}>
                                <h2>
                                    <Icon className="icon" />
                                    {skill.heading}
                                </h2>
                                <ul>{Items}</ul>
                            </div>
                        );
                    })}
                </Col>
            </div>
        </section>
    );
};

export default SkillsComponent;
