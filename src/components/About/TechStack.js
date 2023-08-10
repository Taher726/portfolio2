import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiJavascript1, DiReact, DiHtml5, DiCss3, DiNodejs, DiPython, DiJava, DiPhp } from "react-icons/di";
import { SiFlutter, SiCsharp, SiMysql, SiDjango, SiFlask, SiBootstrap } from "react-icons/si";

export default function TechStack(){
    return(
        <Row style={{ justifyContent:"center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiHtml5/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlutter/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiPhp/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMysql/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDjango/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFlask/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap/>
            </Col>
        </Row>
    );
}