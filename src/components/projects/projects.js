import React from 'react';
import { CardDeck } from 'react-bootstrap';
import './projects.scss';
import ProjectCard from '../projectCard/projectCard';
// icons
import webIcons from '../../assets/img/skills/html-css-js.svg';
import reactIcon from '../../assets/img/skills/react.svg';
import nodejsIcon from '../../assets/img/skills/nodejs.svg';
import express from '../../assets/img/skills/express.svg';
import mongodbIcon from '../../assets/img/skills/mongodb.svg';
import herokuIcon from '../../assets/img/skills/heroku.svg';
import unityIcon from '../../assets/img/skills/unity.svg';
import csharpIcon from '../../assets/img/skills/c-sharp.svg';

const Projects = [
    {
        name: 'Tower of Hanoi',
        information:
            'A full-stack (MERN) web app for the Tower of Hanoi game where players can create accounts, which will allow scores to be posted onto a leaderboard. The game was built in Unity3D and exported as a WebGL.',
        github: 'https://github.com/ikevinws/TowerOfHanoi_WebApp',
        visit: 'https://tower-of-hanoi-kevin.herokuapp.com',
        icons: [
            unityIcon,
            csharpIcon,
            reactIcon,
            nodejsIcon,
            express,
            mongodbIcon,
            herokuIcon,
            webIcons
        ]
    },
    {
        name: 'MyMovieList',
        information:
            'MyMovieList is a simple movie database web app with plot summaries, ratings, and reviews. (In Progress)',
        github: 'https://github.com/ikevinws/MyMovieList',
        icons: [reactIcon, nodejsIcon, express, mongodbIcon, webIcons]
    }
];
const ProjectsComponent = () => {
    return (
        <section id="projects" className="project section-padding">
            <h1 className="section-heading">Projects</h1>
            <CardDeck>
                {Projects.map((project, index) => {
                    // eslint-disable-next-line react/no-array-index-key
                    return <ProjectCard projectInfo={project} key={index} />;
                })}
            </CardDeck>
        </section>
    );
};

export default ProjectsComponent;
