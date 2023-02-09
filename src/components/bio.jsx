import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GeoAlt, Linkedin } from "react-bootstrap-icons";

const style = {
    BioTab:`aligh-item-center  my-4 vw-100`,
}
export function Bio({avatar,ref}) {
    
    return(
        <section className="bio" ref={ref}>
            <Container className={style.BioTab}>
                <Row className="">
                    <Col lg={7}>
                        <span> Hi, My name is Yubo </span>
                        <h2>New grad ECE Student and a <span>Web Developer</span></h2>
                        <Col>
                            <Button size="lg"> <Linkedin /> Profile </Button>
                            <GeoAlt /><span>Toronto, Ontario</span>
                        </Col>
                    </Col>
                    <Col lg={5} >
                        <img  className="bio-image" src={avatar} alt="logo" />
                        <a href="https://www.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_4102879.htm#query=frontend&position=15&from_view=keyword"></a>
                    </Col>
                </Row> 
            </Container>
        </section>
    )
}