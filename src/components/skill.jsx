import React from "react";
import { Card, Carousel, Col, Container, Row } from "react-bootstrap";

function Skill({skillName, proficiency,icon}) {

    return(

        <Col className="skill-card d-inline-flex rounded-2 p-3">
            <Col className="text-light pt-4 ps-1">{skillName}</Col>
            <Col size={6} className="pe-auto " >{icon}</Col>
        </Col>

    )
    
}

// const skillList = ["JavaScript"]
export function SkillDeck({ref}) {

    return(
        <section className="skill flex-md-row aligh-item-center" ref={ref} id="skill">
        <Container className="skill-deck " id="skill">
                <h1>Skill</h1>

            <Row lg={6} md={4} sm={2}>
                <Skill skillName={"JavaScript"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />} />
                <Skill skillName={"React"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />} />
                <Skill skillName={"Node.js"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />} />
                <Skill skillName={"TypeScript"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />} />
                <Skill skillName={"Bootstrap"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />} />

                <Skill skillName={"HTML"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />}  />
                <Skill skillName={"CSS"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />}  />
                <Skill skillName={"Python"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />} />
                <Skill skillName={"Git"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" />} />
                <Skill skillName={"SQL"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />} />
                <Skill skillName={"Linux"} proficiency="Good" icon={<img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />} />

            </Row>
        </Container>
        </section>
    )
}
