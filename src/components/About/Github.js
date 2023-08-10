import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

export default function Github(){
    return(
        <Row style={{ justifyContent:"center", paddingBottom:"10px" }}>
            <h1 style={{ paddingBottom:"20px" }} className="project-heading">
                Days I <strong className="purple">Code</strong>
            </h1>
            <GitHubCalendar
                username="Taher726"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
                color="#c084f5"
            />
        </Row>
    );
}