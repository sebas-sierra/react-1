import React from 'react';
import { Link } from 'react-router-dom';

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbar = () => {
  return (
    // <Navbar expand='lg' className='bg-body-tertiary'>
    //   <Container>
    //     <Navbar.Brand href='/'>Menu de la store</Navbar.Brand>
    //     <Navbar.Toggle aria-controls='basic-navbar-nav'/>
    //     <Navbar.Collapse id='basic-navbar-nav'>
    //       <Nav className='me-auto'>
    //         <Nav.Link></Nav.Link>
    //         <Nav.Link></Nav.Link>
    //         <NavDropdown title='Clases'>
    //           <NavDropdown.Item href='/clasetres'>Clase 3</NavDropdown.Item>
    //           <NavDropdown.Item href='/clasecuatro'>Clase 4</NavDropdown.Item>
    //           <NavDropdown.Item href='/clasecinco'>Clase 5</NavDropdown.Item>
    //           <NavDropdown.Divider/>
    //           <NavDropdown.Item href='/claseseis'>Clase 6</NavDropdown.Item>
    //           <NavDropdown.Item href='/clasesiete'>Clase 7</NavDropdown.Item>
    //           <NavDropdown.Item href='/claseocho'>Clase 8</NavDropdown.Item>
    //         </NavDropdown>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>




    <nav className='navbar'>
        <h1>Menu de la store</h1>
        <ul>
            <Link to='/clasetres'>Clase 3</Link>
            <Link to='/clasecuatro'>Clase 4</Link>
            <Link to='/clasecinco'>Clase 5</Link>
            <Link to='/claseseis'>Clase 6</Link>
            <Link to='/clasesiete'>Clase 7</Link>
            <Link to='/claseocho'>Clase 8</Link>
            <Link to='/pokeapi'>PokeApi</Link>
            <Link to='/itemdetail'>ItemDetail</Link>
            <Link to='/form'>Form</Link>
            
        </ul><Link to='/cart'>
              {// insertar componente cartwidget
             }Cart            
             </Link>
      </nav>
  )
}

export default Navbar