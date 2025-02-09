import React from 'react'
import { Row, Container, Col} from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import navIcon4 from '../assets/img/nav-icon4.svg';
import navIcon5 from '../assets/img/nav-icon5.svg';
import logo from '../assets/img/logo.svg';

export const Footer = () => {
  return (
    <footer className='footer'>
        <Container>
            <Row className='align-item-center'>
                <Col sm={12} lg={6} md={6} className='text-sm-center text-md-start text-center'> 
                    <img src={logo} alt="Logo" />
                </Col>
                <Col sm={12} lg={6} md={6} className='text-center text-md-end text-sm-center footer-box'>
                    <div className='social-icon'>
                        <a href="https://www.linkedin.com/in/merve-önalan"><img src={navIcon1} alt="LinkedIn" /></a>
                        <a href="https://x.com/merveonlnn"><img src={navIcon2} alt="X" /></a>
                        <a href="https://www.instagram.com/merveonlnn"><img src={navIcon3} alt="Instagram" /></a>
                        <a href="https://github.com/merveonln"><img src={navIcon4} alt="GitHub" /></a>
                        <a href="https://medium.com/@merveonalan"><img src={navIcon5} alt="Medium" /></a>
                    </div>
                    <p>Coded with by <b>Merve Önalan.</b></p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}
