'use client'
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function NavBar() {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Milos Kallai</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse>
            <Nav>
              <NavDropdown title="Projects">
                <NavDropdown.Item href="/projects/project-1">
                 Project 1
                </NavDropdown.Item>
                <NavDropdown.Item href="/projects/project-2">
                 Project 2
                </NavDropdown.Item>
                <NavDropdown.Item  href="/projects/project-3">
                Project 3
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
