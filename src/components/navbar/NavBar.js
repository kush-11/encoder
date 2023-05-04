import React from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assests/images/logo-no-background.svg";

const NavBar = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">
        <img
          alt="logo"
          src={logo}
          width="100"
          height="40"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Nav className="ms-auto">
        <Nav.Link href="https://encoder-login-form-okm61fvej-kush-11.vercel.app/login">Login</Nav.Link>
        <Nav.Link href="https://encoder-login-form-okm61fvej-kush-11.vercel.app/signup">Signup</Nav.Link>
        
      </Nav>
    </Navbar>
  );
};

export default NavBar;
