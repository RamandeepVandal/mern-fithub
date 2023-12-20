import React from 'react';
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

export const Header = () => {

  // navigation
  const navigate = useNavigate();
  const handleClick = () => navigate("/");
  const handleClickAdd = () => navigate("/add");
  const handleClickWeight = () => navigate("/weight");
  const handleClickBmr = () => navigate("/bmr");

  return (
    <Navbar collapseOnSelect expand="lg" variant="light">
      <Container>
        <Navbar.Brand
          className="nav-brand content-h-md nav-text"
          onClick={handleClick}
        >
          Weight++
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          
            <Nav className="ms-auto">
             <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClickAdd}
              >
                Add
              </Nav.Link>
              <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClick}
              >
                Weight
              </Nav.Link>
              <Nav.Link
                className="me-5 content-p nav-text"
                onClick={handleClickBmr}
              >
                BMR
              </Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};