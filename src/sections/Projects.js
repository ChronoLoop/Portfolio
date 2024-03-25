import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Projects.scss';
import ProjectCard from '../components/ProjectCard';
// icons
import webIcons from '../assets/img/skills/html-css-js.svg';
import reactIcon from '../assets/img/skills/react.svg';
import nodejsIcon from '../assets/img/skills/nodejs.svg';
import express from '../assets/img/skills/express.svg';
import mongodbIcon from '../assets/img/skills/mongodb.svg';
import unityIcon from '../assets/img/skills/unity.svg';
import csharpIcon from '../assets/img/skills/c-sharp.svg';
import socketIoIcon from '../assets/img/skills/socket-io.svg';
import netlifyIcon from '../assets/img/skills/netlify.svg';
import railwayIcon from '../assets/img/skills/railway.svg';
import goIcon from '../assets/img/skills/go.svg';
import dockerIcon from '../assets/img/skills/docker.svg';
import postgresqlIcon from '../assets/img/skills/postgresql.svg';
import typescriptIcon from '../assets/img/skills/typescript.svg';

import solidIcon from '../assets/img/skills/solid.svg';
import tailwindIcon from '../assets/img/skills/tailwindcss.svg';
import graphqlIcon from '../assets/img/skills/graphql.svg';
import amazonS3Icon from '../assets/img/skills/amazon-s3.svg';

const Projects = [
    {
        name: 'OnePieceQL',
        description:
            'A GraphQL API that provides extensive data about the One Piece universe, a popular manga and anime series.',
        github: 'https://github.com/ChronoLoop/onepieceQL',
        visit: 'https://onepieceql.up.railway.app/',
        icons: [
            goIcon,
            typescriptIcon,
            solidIcon,
            tailwindIcon,
            postgresqlIcon,
            graphqlIcon,
            amazonS3Icon,
            webIcons,
            dockerIcon,
            railwayIcon
        ]
    },
    {
        name: 'Readit',
        description:
            'A full-stack web application replicating key features of Reddit, including user authentication, subreddits, post creation, and commenting functionality.',
        github: 'https://github.com/ChronoLoop/Readit',
        visit: 'https://readit.up.railway.app/',
        icons: [
            goIcon,
            typescriptIcon,
            reactIcon,
            postgresqlIcon,
            webIcons,
            dockerIcon,
            railwayIcon
        ]
    },
    {
        name: 'MyMovieList',
        description:
            'MyMovieList is a simple database web app where users can search for movies and review and rate movies, and admins can add, update, or delete movies.',
        github: 'https://www.github.com/ChronoLoop/MyMovieList',
        visit: 'https://mymovielist.up.railway.app/',
        icons: [reactIcon, nodejsIcon, express, mongodbIcon, dockerIcon, railwayIcon, webIcons]
    },
    {
        name: 'TypeWars',
        description:
            'Typewars is an online competitive typing game where players can race against each other in real-time.',
        github: 'https://github.com/ChronoLoop/TypeWars',
        visit: 'https://typewars.up.railway.app',
        icons: [
            reactIcon,
            nodejsIcon,
            express,
            mongodbIcon,
            socketIoIcon,
            dockerIcon,
            railwayIcon,
            webIcons
        ]
    },
    {
        name: 'Tower of Hanoi',
        description:
            'A full-stack (MERN) web app for the Tower of Hanoi game where players can create accounts, which will allow scores to be posted onto a leaderboard. The game was built in Unity3D and exported as a WebGL.',
        github: 'https://www.github.com/ChronoLoop/TowerOfHanoi_WebApp',
        visit: 'https://tower-of-hanoi.up.railway.app',
        icons: [
            unityIcon,
            csharpIcon,
            reactIcon,
            nodejsIcon,
            express,
            mongodbIcon,
            dockerIcon,
            railwayIcon,
            webIcons
        ]
    },
    {
        name: 'Portfolio',
        description: 'A portfolio web app built with React.',
        github: 'https://github.com/ChronoLoop/Portfolio',
        visit: 'https://ikevin.netlify.app',
        icons: [reactIcon, netlifyIcon, webIcons]
    }
];
const ProjectsComponent = () => {
    return (
        <section id="projects" className="project section-padding">
            <h1>Projects</h1>
            <Row>
                {Projects.map((project, index) => {
                    return <ProjectCard project={project} key={index} />;
                })}
            </Row>
        </section>
    );
};

export default ProjectsComponent;
