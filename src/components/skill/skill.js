import React from 'react';
import { useInView } from 'react-intersection-observer';
import './skill.scss';

const Skill = ({ skill }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    });

    const Icon = skill.icon;
    return (
        <div ref={ref} className={`skill-item animated ${inView ? 'fade-in-left' : ''}`}>
            <h2>
                <Icon className="icon" />
                {skill.heading}
            </h2>
            <ul>
                {skill.items.map((item, i) => (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Skill;
