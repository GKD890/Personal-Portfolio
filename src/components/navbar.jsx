import React, { useEffect, useState, useRef } from "react";
import { Button, Container, Nav, Navbar} from "react-bootstrap";
import { ArrowUp, Github, Linkedin } from "react-bootstrap-icons";
import { Blog } from "./blog";

const style = {
    Navbar:` scrolled bg-dark text-light`,
    NavBrand:`ms-auto`,
    Nav:`me-auto  `,
    NavLink:`ms-2 `,
    NavLinkActive:`ms-2 active navbar-link`,
    NavSocialLink:`me-2`,
}

const gitHubLink = "https://github.com/GKD890";
const linkedinLink = "https://www.linkedin.com/in/yubo-sun-822117214/";

export function INav ({refs}) {
    const [activeLink, setActiveLink] = useState('home');
    const [goTopVisible, setGoTopVisible] = useState(false);
    const [blogToast, setBlogToast] =useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const sections = ['bio', 'skill', 'project'];
          let sectionOffsets = sections.map(section => {
            return document.querySelector(`#${section}`).offsetTop;
          });
          sectionOffsets = [...sectionOffsets,1900,2400]; // next array element will be NaN when final element
          const offset = 200;
          const scrollPosition = window.pageYOffset;  
          
          for (let i = 0; i < sectionOffsets.length; i++) {
            const lowerBound = sectionOffsets[i] - offset ;
            const upperBound = sectionOffsets[i+1]- offset ;
            
            if (scrollPosition >= lowerBound && scrollPosition < upperBound) {
              // console.info(`set ${sections[i]}`)
              setActiveLink(sections[i]);
              if(i !== 0){setGoTopVisible(true);}
              else {setGoTopVisible(false);}
              break;
            } 
            
          }
        };
    
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

      const goTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }


      const constNav = (
        <Container className="i-container i-nav">
                    <Navbar.Brand className="i-navBrand" href="#bio">
                        {/* <img src={logo} alt="Logo" /> */}
                        Yubo  
                        <strong className="str">Sun</strong>
                    </Navbar.Brand>
                    <Nav >
                        <Navbar.Toggle aria-controls="navbarScroll"></Navbar.Toggle>
                        <Navbar.Collapse id="navbarScroll">
                            <Nav.Link href="#skill"> <Button className={activeLink === "skill"? "active": ""} variant="outline-primary" >Skills</Button></Nav.Link>
                            <Nav.Link href="#project"> <Button className={activeLink === "project"? "active": ""} variant="outline-primary">Projects</Button> </Nav.Link>
                            <Nav.Link href="#"> <Button className={activeLink === "blog"? "active": ""} variant="outline-primary" onClick={()=> setBlogToast(true)} >Blog</Button> </Nav.Link>
                            <Blog closeFunction={()=>setBlogToast(false)} ifShow={blogToast}  />

                            <Nav.Link href={gitHubLink}> 
                                <Button  variant="outline-primary">
                                    <Github className="social-icon" />
                                </Button> 
                            </Nav.Link>
                            <Nav.Link href={linkedinLink}> 
                                <Button  variant="outline-primary">
                                    <Linkedin className="social-icon" />
                                </Button> 
                            </Nav.Link>
                        </Navbar.Collapse>
                    </Nav>
                    
                </Container>
      )
    
    if (goTopVisible){
      return (
        <Navbar collapseOnSelect="false" expand="md" className={style.Navbar} variant="dark" fixed="top">
          {constNav}
          <Button className="up-arrow-box p-2 me-4 rounded-4" variant="secondary" onClick={()=>goTop()}> <ArrowUp className="up-arrow" /> </Button>              
        </Navbar>
      )
    } else{
      return (
        <Navbar collapseOnSelect="false" expand="md" className={style.Navbar} variant="dark" fixed="top">
          {constNav}
        </Navbar>
      )
    }

}