import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiVisualstudiocode, SiPostman, SiVisualstudio, SiAndroidstudio, SiGithub, SiNetlify, SiMicrosoftsqlserver } from "react-icons/si"

export default function ToolStack(){
    return(
        <Row style={{ justifyContent: "center", paddingBottom:"50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudio/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAndroidstudio/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGithub/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNetlify/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftsqlserver/>
            </Col>
        </Row>
    );
}