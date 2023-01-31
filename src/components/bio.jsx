import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const style = {
    BioTab:`aligh-items-center ms-3 my-auto`,
}
export function Bio({avatar}) {
    
    return(
        <div className={style.BioTab}>
                <Row className="aligh-items-center">
                    <Col>
                    <span> Hi, My name is TODO </span>
                        <h2>New grad ECE Student with profesioonal experience</h2>
                    </Col>
                    <Col>
                        <img src={avatar} alt="logo" />
                    </Col>
                </Row>
                
        </div>
    )
}