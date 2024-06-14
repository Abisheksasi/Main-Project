import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../image/logo.svg';
import { IoMdHeartEmpty } from 'react-icons/io';
import Download from './Download';
import Support from './Support';
import Login from './Login';
import User from './User';
import Mobile from './Mobile';
import Hero from '../Component/Hero';

function Navigation() {
  const [expanded, setExpanded] = useState(false); 
  const [showPopup, setShowPopup] = useState(false); 
  const [navbarBackground, setNavbarBackground] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hero'>
      <Navbar 
        expand="lg" 
        expanded={expanded} 
        className={`sticky-top ${navbarBackground ? 'navbar-scrolled' : ''}`} 
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand href="#home" className='ms-4'>
            <img src={Logo} alt='Logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handlePopupToggle} />
          <Navbar.Collapse id="basic-navbar-nav" onClick={handleToggle}>
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="nav-link">
                <Download/>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link">
                <Support/>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link mt-1">
                <div className='short'> 
                  <IoMdHeartEmpty className='ms-1 me-1 mt-2 mb-2 short-icon' />
                  <span className='ms-1 mt-2 mb-1 me-2'>Shortlist</span>
                </div>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link mt-1">
                <Login/>
              </Nav.Link>
              <Nav.Link href="#link" className="nav-link mt-1">
                <User/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {showPopup && <Mobile onClose={handlePopupToggle} />}
      <div style={{ height: '100px' }}></div>
      <Hero/>
    </div>
  );
}

export default Navigation;
