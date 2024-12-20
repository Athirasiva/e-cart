import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import { useSelector } from "react-redux";

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)
  return (
    <div>
      <Navbar style={{backgroundColor:"#870a30", height:"80px"}}>
        <Container>
          <Navbar.Brand>
            <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
              E Cart{" "}
            </Link>
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Button className="me-3" variant="warning">
              <Link
                to={"/wishlist"}
                style={{ textDecoration: "none", color: "white" }}
                className="me-3"
              >
                WishList
              </Link>
              <Badge bg="light" text="dark">{wishlist.length}</Badge>
            </Button>
            <Button variant="warning">
              <Link
                to={"/cart"}
                style={{ textDecoration: "none", color: "white" }}
                className="me-3"
              >
                Cart
              </Link>
              <Badge bg="light" text="dark">{cart.length}</Badge>
            </Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
