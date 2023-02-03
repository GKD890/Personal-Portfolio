import React from "react";
import { Card, Container } from "react-bootstrap";

export function Skill({skillName, proficiency}) {

    return(
        <Card>
            <Card.Header>{skillName}</Card.Header>
        </Card>
    )
    
}

export function SkillDeck() {

    return(
        <Container className="skill-deck center-container">
            
        </Container>
    )
}