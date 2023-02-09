import React from "react"
import { Toast, ToastContainer } from "react-bootstrap"

export function Blog ({closeFunction,ifShow}){
    return (
        <section className="blog">
            <ToastContainer position="bottom-end" >
            <Toast className="bg-light" onClose={closeFunction} show={ifShow} delay={2500} autohide>
                <Toast.Header>
                    <strong className="me-auto">Blog</strong>
                </Toast.Header>
                <Toast.Body>
                    Blog will be comming soon! 
                </Toast.Body>
            </Toast>
            </ToastContainer>
        </section>
    )
}