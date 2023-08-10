import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

export default function AboutCard(){
    return(
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign:"justify" }}>
                        Hi Everyone, I am <span className="purple">Taher Chaltout </span>
                        from <span className="purple">Sfax, Tunisia</span>
                        <br/> I am a final year computer science student in Faculty of Sciences of Sfax.
                        <br/>While my roots are in computer science, my branches have extended into the captivating domains of web development, mobile app creation, and game design.
                        <br/>
                        <br/>
                        Beyond the lines of code, I find joy in
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Playing Football
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Watching Football
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Playing Video Games
                        </li>
                    </ul>
                </blockquote>
            </Card.Body>
        </Card>
    );
}