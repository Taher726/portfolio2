import React, { useEffect, useState } from "react";
import "./resume.css";
import { Row, Container, Button } from "react-bootstrap";
import Particle from "../../Particle/Particle";
import pdf from "../../Assets/CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume(){
    const [width, setWidth] = useState(1200);
    useEffect(()=>{
        setWidth(window.innerWidth);
    });
    return(
        <div>
            <Container fluid className="resume-section">
                <Particle/>
                <Row style={{ justifyContent:"center", position:"relative" }}>
                    <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth:"250px" }} className="fork-btn">
                        <AiOutlineDownload/> Download CV
                    </Button>
                </Row>
                <Row className="resume">
                    <Document file={pdf} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>
                    </Document>
                </Row>
                <Row style={{ justifyContent:"center", position:"relative" }}>
                    <Button variant="primary" href={pdf} target="_blank" style={{ maxWidth:"250px" }} className="fork-btn">
                        <AiOutlineDownload/> Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}