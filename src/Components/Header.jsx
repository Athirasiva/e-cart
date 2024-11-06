import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';

function Header() {
  return (
    <div><Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand ><Link to={'/'} style={{textDecoration:'none', color:'black'}} >E Cart </Link></Navbar.Brand>
      <Nav className="me-auto">
       <Button className='me-3'><Link to={'/wishlist'} style={{textDecoration:'none', color:'white'}} >
        WishList
         </Link><Badge bg="secondary">9</Badge></Button> 
        <Button><Link to={'/cart'} style={{textDecoration:'none', color:'white'}} >Cart
        </Link><Badge bg="secondary">9</Badge></Button>
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Header