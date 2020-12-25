import React from 'react';
import './projectCard.scss';
import { Col, Card, Button, Image } from 'react-bootstrap';
import { FaCode, FaArrowRight } from 'react-icons/fa';

const ProjectCard = ({ projectInfo }) => {
    return (
        <Col md={12} xl={6} className="p-0 my-2">
            <Card className="project-card h-100 justify-content-between" bg="light">
                <Card.Header as="h4">{projectInfo.name}</Card.Header>
                <div className="card-content">
                    <p>{projectInfo.information}</p>
                    <div className="card-btns-container">
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
                        {projectInfo.visit ? (
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
                        ) : null}
                    </div>
                </div>
                <Card.Footer>
                    <div className="d-flex flex-wrap justify-content-center">
                        {projectInfo.icons.map((icon) => {
                            return <Image src={icon} alt="icon" className="card-icon mr-3" />;
                        })}
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default ProjectCard;
