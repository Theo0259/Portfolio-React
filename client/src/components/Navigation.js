//Ecrire rafce
import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

import './Navigation.css'

const Navigation = () => {
  //On gère nos paramètrages ici
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
      window.removeEventListener('resize', changeWidth)
  }

  }, [])

  return (
  //   <Navbar expand="lg" className="bg-success">
  //   <Container>
  //     <Navbar.Brand href="/">Portfolio</Navbar.Brand>
  //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="mx-auto">
  //         <Nav.Link href="/">Acceuil</Nav.Link>
  //         <Nav.Link href="/about">Qui suis-je ?</Nav.Link>
  //       </Nav>
  //     </Navbar.Collapse>
  //   </Container>
  // </Navbar>



  <nav>
    {(toggleMenu || screenWidth > 500) && (
  <ul className="list">
      <Link to='/' className="items">Accueil</Link>
      <Link to='/about' className="items">Qui suis-je ?</Link>
    </ul>
    )}
  <button onClick={toggleNav} className="btn">Menu</button>
</nav>





  
  )
}

export default Navigation