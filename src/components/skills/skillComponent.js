import React from 'react';
import { useInView } from 'react-intersection-observer';

const SkillComponent = ({ skill }) => {
    const { ref, inView } = useInView({
        threshold: 1,
        triggerOnce: true
    });

    const Icon = skill.icon;
    // eslint-disable-next-line react/no-array-index-key
    const Items = skill.items.map((item, i) => <li key={i}>{item}</li>);
    return (
        <div ref={ref} className={`skill-item animated ${inView ? 'fade-in-left' : ''}`}>
            <h2>
                <Icon className="icon" />
                {skill.heading}
            </h2>
            <ul>{Items}</ul>
        </div>
    );
};

export default SkillComponent;
