import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { ArrowUp, Envelope, Github, Linkedin } from "react-bootstrap-icons";

const mailLinke = "mailto:yubos1835@outlook.com";
const gitHubLink = "https://github.com/GKD890";
const linkedInLink = "";
export function Footer() {
    
    return(
        <footer className="footer">
            <Container >
                <Row className="">

                <Col sm={6} className="pt-4">
                    <span> Blog will be coming soon!  </span>
                </Col>
                
                <Col  sm={6} className="text-center text-sm-end">
                    <div> <ArrowUp className="up-arrow" /> </div>
                    <div className="social-link-bar ">
                        <a href="#" className="m-2"><Linkedin className="social-icon" /></a>
                        <a href="#" className="m-2"><Github className="social-icon" /></a>
                        <a href="" className="m-2"><Envelope className="social-icon" /></a>
                    </div>
                    <p className="pt-1">Copyright 2023 All Rights Reserverd</p>
                </Col>
                
                </Row>
            </Container>
        </footer>
    )
}