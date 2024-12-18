import {useEffect, useState} from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import CV from '../assets/docs/CV.pdf';
import logo from '../assets/img/logo.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll=()=>{
        if(window.scrollY>58){
            seScrolled(true);
        } else{
            seScrolled(false);
        }
    }
  
    window.addEventListener("scroll", onScroll);
    return()=>window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
  }
  
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CV; 
    link.download = 'Merve-Önalan-CV.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
};

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" :""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <span className='navbar-toggler-icon'></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink==='home' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#services" className={activeLink==='services' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('services')}>Services</Nav.Link>
          <Nav.Link href="#projects" className={activeLink==='projects' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          <Nav.Link href="#contact" className={activeLink==='contact' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('contact')}>Contact</Nav.Link>
        </Nav>
        <span className='navbar-text'>
            <div className='social-icon'>
              <a href="https://www.linkedin.com/in/merve-önalan"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://x.com/merveonlnn"><img src={navIcon2} alt="X" /></a>
              <a href="https://www.instagram.com/merveonlnn"><img src={navIcon3} alt="Instagram" /></a>
              <a href="https://github.com/merveonln"><img src={navIcon4} alt="GitHub" /></a>
              <a href="https://medium.com/@merveonalan"><img src={navIcon5} alt="Medium" /></a>
            </div>
            <button className='vvc' onClick={handleDownloadCV}><span>Download CV</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
