import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { GeoAlt, Linkedin } from "react-bootstrap-icons";

const linkedinLink = "https://www.linkedin.com/in/yubo-sun-822117214/";
const style = {
    BioTab:`aligh-item-center  my-4 vw-100`,
}
export function Bio({avatar,ref}) {
    
    return(
        <section className="bio" ref={ref} id="bio" >
            <Container className={style.BioTab}>
                <Row className="self-intro">
                    <Col lg={7}>
                        <span> 
                        <span className=" wave me-3">👋 </span> Hi
                        </span>
                        <h2> Yubo </h2>
                        <span className="web-role">{`<> Web Developer </>`}</span>
                        <Col className="pt-5">
                            <Button href={linkedinLink} size="lg"> <Linkedin className="social-icon me-2" /> Let's Connect </Button>
                            <p><GeoAlt />Toronto, Ontario</p>
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