"use client";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Milos Kallai</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav.Link href="/projects">Projects</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Container>
      </Navbar>
    </header>
  );
}
