import React, { useState } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

const style = {
    Navbar:` scrolled bg-dark text-light`,
    NavBrand:`ms-auto`,
    Nav:`me-auto  `,
    NavLink:`ms-2 `,
    NavLinkActive:`ms-2 active navbar-link`,
    NavSocialLink:`me-2`,
}

const gitHubLink = "https://github.com/GKD890";

export function INav({refs}) {
    const [activeLink, setActiveLink] = useState('');
    
    const swtichActive =(link)=>{
        setActiveLink("blog");
    }

    const scrollToSec = (elementRef) => {
        window.scrollTo({
            top:elementRef.current.offsetTop,
            behavior:"smooth"
        })
    }
    return(
        <Navbar collapseOnSelect="false" expand="md" className={style.Navbar} variant="dark" sticky="top">
                <Container className="i-container i-nav">
                    <Navbar.Brand className="i-navBrand" href="bio">
                        {/* <img src={logo} alt="Logo" /> */}
                        Lo  
                        <strong className="str">go</strong>
                    </Navbar.Brand>
                    <Nav >
                        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav.Link href="#skill"> <Button className={activeLink === "skill"? "active": ""} variant="outline-primary">Skills</Button></Nav.Link>
                            <Nav.Link href="#project"> <Button className={activeLink === "projects"? "active": ""} variant="outline-primary">Projects</Button> </Nav.Link>
                            <Nav.Link href="#"> <Button className={activeLink === "blog"? "active": ""} variant="outline-primary" onClick={swtichActive}>Blog</Button> </Nav.Link>
                            <Nav.Link> 
                                <Button  variant="outline-primary">
                                    <Github className="social-icon" />
                                </Button> 
                            </Nav.Link>
                            <Nav.Link> 
                                <Button  variant="outline-primary">
                                    <Linkedin className="social-icon" />
                                </Button> 
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
                
                </Container>
            </Navbar>
    )

    // return (
    //     <Navbar bg="light" expand="lg">
    //       <Container>
    //         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //         <Navbar.Collapse id="basic-navbar-nav">
    //           <Nav className="me-auto">
    //             <Nav.Link href="#home">Home</Nav.Link>
    //             <Nav.Link href="#link">Link</Nav.Link>

    //           </Nav>
    //         </Navbar.Collapse>
    //       </Container>
    //     </Navbar>
    //   );
}