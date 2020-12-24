import React from 'react';
import { CardDeck } from 'react-bootstrap';
import './projects.scss';
import ProjectCard from '../projectCard/projectCard';

const Projects = [
    {
        name: 'Tower of Hanoi',
        information:
            'A full-stack (MERN) web app for the Tower of Hanoi game where players can create accounts, which will allow scores to be posted onto a leaderboard. The game was built in Unity3D and exported as a WebGL.',
        github: 'https://github.com/ikevinws/TowerOfHanoi_WebApp',
        visit: 'https://tower-of-hanoi-kevin.herokuapp.com',
        icons: []
    }
];
const ProjectsComponent = () => {
    return (
        <section id="projects" className="project section-padding">
            <h1 className="section-heading">Projects</h1>
            <CardDeck>
                {Projects.map((project) => {
                    return <ProjectCard projectInfo={project} />;
                })}
            </CardDeck>
        </section>
    );
};

export default ProjectsComponent;
