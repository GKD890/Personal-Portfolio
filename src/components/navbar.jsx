import React, { useState } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";

const style = {
    Navbar:` scrolled bg-dark text-light`,
    NavBrand:`ms-2`,
    Nav:`me-auto  `,
    NavLink:`ms-2 `,
    NavLinkActive:`ms-2 active navbar-link`,
    NavSocialLink:`me-2`,
}

export function INav() {
    const [activeLink, setActiveLink] = useState('skill');
    return(
        <Navbar collapseOnSelect="false" expand="md" className={style.Navbar} variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="/">
                        {/* <img src={logo} alt="Logo" /> */}
                        Logo
                    </Navbar.Brand>
                    <Nav >
                        <Navbar.Toggle aria-controls="navbarScroll">
                        </Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">

                            <Nav.Link className={activeLink === "skill"? style.NavLinkActive:style.NavLink} >Skills</Nav.Link>
                            <Nav.Link className={activeLink === "project"? style.NavLinkActive:style.NavLink}>Projects</Nav.Link>
                            <Nav.Link className={activeLink === "blog"? style.NavLinkActive:style.NavLink} >Blog</Nav.Link>
                            <Nav.Link className={activeLink === "github"? style.NavLinkActive:style.NavLink}>GitHub</Nav.Link>
                            <Nav.Link className={activeLink === "linkedin"? style.NavLinkActive:style.NavLink}>Linkedin</Nav.Link>

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