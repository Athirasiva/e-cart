import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import WishList from './WishList';
import Cart from './Cart';

function Header() {
  return (
    <div><Navbar bg="light" data-bs-theme="light">
    <Container>
      <Navbar.Brand href="#home">E Cart</Navbar.Brand>
      <Nav className="me-auto">
        <WishList />
        <Cart />
      </Nav>
    </Container>
  </Navbar></div>
  )
}

export default Header