import React, { useEffect, useState } from "react";
import "./NavBar.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import logo from "../../assests/images/logo-no-background.svg";

const NavBar = () => {
  const [check,setCheck]=useState(false);
  const [name,setname]=useState("");
   useEffect(()=>{
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const prop1 = urlParams.get("prop1");
    setname(prop1)
    setCheck(true)
  },[])
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
      {check==false?
      <Nav className="ms-auto">
        <Nav.Link href="https://encoder-login-form-kyqelxte1-kush-11.vercel.app/login">Login</Nav.Link>
        <Nav.Link href="https://encoder-login-form-kyqelxte1-kush-11.vercel.app/signup">Signup</Nav.Link>
        
      </Nav>:<Nav className="ms-auto"><h4>{name}</h4></Nav>}
    </Navbar>
  );
};

export default NavBar;
