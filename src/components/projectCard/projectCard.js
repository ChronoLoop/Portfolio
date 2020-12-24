import React from 'react';
import './projectCard.scss';
import { Col, Card, Button } from 'react-bootstrap';
import { FaCode, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ projectInfo }) => {
    return (
        <Col sm={6} className="p-0 my-2">
            <Card className="project-card" bg="light">
                <Card.Header as="h4">{projectInfo.name}</Card.Header>
                <Card.Body>
                    <Card.Text>{projectInfo.information}</Card.Text>
                    <div className="card-btns-container">
                        <Button
                            variant="light"
                            href={projectInfo.visit}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="card-btn"
                        >
                            <FaArrowRight className="mr-1" />
                            Visit
                        </Button>
                        <Button
                            variant="light"
                            href={projectInfo.github}
                            rel="noopener noreferrer"
                            target="_blank"
                            className="card-btn"
                        >
                            <FaCode className="mr-1" />
                            Code
                        </Button>
                    </div>
                </Card.Body>
                <Card.Footer className="text-center">hello</Card.Footer>
            </Card>
        </Col>
    );
};

export default ProjectCard;
