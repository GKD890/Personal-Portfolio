import React from "react";
import { Container, Col, Row, Card } from "react-bootstrap";
import { Window } from "react-bootstrap-icons";
import img_dfb from "../assets/P-DFB.jpg"

function Project({img,title,intro,link}) {
    return(
        <Card>
                <Card.Header>{title}</Card.Header>
            <Card.Img className="screenshot" src={img} />

                <Card.Footer>
                    <Window className="social-icon me-3 "/>
                    See Repo
                </Card.Footer>

        </Card>
    )
}

export function ProjectDeck({ref}) {
    
    return(
        <section className="project" id="project" ref={ref}>
            <Container className="project-tab">
            <h1 className="section-header">Projects</h1>
            {/* <p className="bg-primary " ></p> */}
                <Row lg={4}>
                    {/* <Col> */}
                        <Project img={img_dfb} title={"Budget Helper"} intro={"This is an intro"}  />
                    {/* </Col> */}

                </Row>
            </Container>
        </section>
    )
}