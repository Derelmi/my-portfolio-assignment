import React from "react";
import {
  Button,
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import logo from "./Header";
const Header = () => {
  return (
    <header>
      <Container fluid>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">
            <img
              src="https://www.pinclipart.com/picdir/middle/537-5374089_react-js-logo-clipart.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
            DERELMI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Education</Nav.Link>
              {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
              <Nav.Link href="#action3">Skills</Nav.Link>
              <Nav.Link href="#action4">Images</Nav.Link>
              <Nav.Link href="#action5">Contact</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </header>

  );
};
export default Header;
