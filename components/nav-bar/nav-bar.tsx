"use client";
import { Container, Nav, Navbar } from "react-bootstrap";
import styles from "./nav-bar.module.scss";

export default function NavBar() {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="/">Milos Kallai</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav.Link className={styles.navItem} href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="/about">
              About
            </Nav.Link>
            <Nav.Link className={styles.navItem} href="/contact">
              Contact
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
