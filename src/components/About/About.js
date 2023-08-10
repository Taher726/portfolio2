import React from "react";
import "./about.css";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle/Particle";
import AboutCard from "./AboutCard";
import Laptop from "../../Assets/about.png";
import TechStack from "./TechStack";
import ToolStack from "./ToolStack";
import Github from "./Github";

export default function About(){
    return(
        <Container fluid className="about-section">
            <Particle/>
            <Container>
                <Row style={{ justifyContent:"center", padding:"10px" }}>
                    <Col md={7} style={{ justifyContent: "center",paddingTop: "30px",paddingBottom: "50px",}}>
                        <h1 style={{ fontSize:"2.1em", paddingBottom:'20px' }}>
                            Know Who <strong className="purple">I'M</strong>
                        </h1>
                        <AboutCard/>
                    </Col>
                    <Col md={5} style={{ paddingTop:"120px", paddingBottom:"50px" }} className="about-img">
                        <img src={Laptop} alt="about" className="img-fluid"/>
                    </Col>
                </Row>
                <h1 className="project-heading">
                    Professional <strong className="purple">Skillset</strong>
                </h1>
                <TechStack/>
                <h1 className="project-heading">
                    <strong className="purple">Tools</strong> I use
                </h1>
                <ToolStack/>
                <Github/>
            </Container>
        </Container>
    );
}