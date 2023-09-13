import React from 'react';
import CartWidget from './CartWidget';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MenuNav = ({isInHeader}) => {
  return (
    <Navbar expand='lg' className={isInHeader ? 'bg-body-tertiary' : 'footer'}>
    <Container>
      <Navbar.Brand href='/'>Menu de la store</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav'/>
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='me-auto'>
          <Nav.Link href='/pokeapi'>PokeApi</Nav.Link>
          <Nav.Link href='/itemdetail'>ItemDetail</Nav.Link>
          <NavDropdown title='Clases' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/clasetres'>Clase 3</NavDropdown.Item>
            <NavDropdown.Item href='/clasecuatro'>Clase 4</NavDropdown.Item>
            <NavDropdown.Item href='/clasecinco'>Clase 5</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href='/claseseis/productos'>Clase 6</NavDropdown.Item>
            <NavDropdown.Item href='/clasesiete'>Clase 7</NavDropdown.Item>
            <NavDropdown.Item href='/claseocho'>Clase 8</NavDropdown.Item>
            <NavDropdown.Item href='/clasenueve'>Clase 9</NavDropdown.Item>
          </NavDropdown>

          {isInHeader 
          &&<Nav.Link href='/cart'>
              <CartWidget></CartWidget>
              </Nav.Link>
           }

          

        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default MenuNav