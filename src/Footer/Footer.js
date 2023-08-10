import React from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

export default function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container fluid className="footer">
            <Row>
                <Col md={4} className="footer-copyright">
                    <h3>Designed and Developed by Taher Chaltout <span style={{ color:"red" }}>&#10084;	</span></h3>
                </Col>
                <Col md={4} className="footer-copyright">
                    <h3>Copyright © {year} SB</h3>
                </Col>
                <Col md={4} className="footer-body">
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://github.com/Taher726" rel="noreferrer" target="_blank" style={{ color:"white" }}>
                                <AiFillGithub/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/chaltout-taher-a2a144226/" rel="noreferrer" target="_blank" style={{ color:"white" }}>
                                <FaLinkedinIn/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.instagram.com/taherchaltout/" rel="noreferrer" target="_blank" style={{ color:"white" }}>
                                <AiFillInstagram/>
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.youtube.com/channel/UCPSXnOyn4SbHeBaCELaV1IA" rel="noreferrer" target="_blank" style={{ color:"white" }}>
                                <BsYoutube/>
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    );
}