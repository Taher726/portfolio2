import React from "react";
import "./project.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle/Particle";
import project1 from "../../Assets/movie-me.png";
import project2 from "../../Assets/portfolio1.jpg";
import project3 from "../../Assets/portfolio2.jpg";
import project4 from "../../Assets/portfolio3.jpg";
import project5 from "../../Assets/portfolio4.jpg";
import project6 from "../../Assets/portfolio5.png";
import ProjectCard from "./ProjectCard";

export default function Project(props){
    return(
        <Container fluid className="project-section">
            <Particle/>
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works</strong>
                </h1>
                <p style={{ color:"white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent:"center", paddingBottom:"10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={project1}
                            isBlog={false}
                            title="Movie App"
                            description="Discover and explore a world of movies with MovieMe, the ultimate movie app built using HTML, CSS, and JavaScript, enhanced by the power of the IMDb API. Quickly browse through a curated collection of films, each accompanied by their IMDb rating and a concise overview"
                            gtLink="https://github.com/Taher726/Html-Css-Javascript/tree/main/movie%20app"
                            demoLink="https://taher-movie-me.netlify.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={project2}
                            isBlog={false}
                            title="Crypto Currency Dashboard"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            gtLink="https://github.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={project3}
                            isBlog={false}
                            title="Crypto Currency Dashboard"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            gtLink="https://github.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={project4}
                            isBlog={false}
                            title="Crypto Currency Dashboard"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            gtLink="https://github.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={project5}
                            isBlog={false}
                            title="Crypto Currency Dashboard"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            gtLink="https://github.com/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={project6}
                            isBlog={false}
                            title="Crypto Currency Dashboard"
                            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            gtLink="https://github.com/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}