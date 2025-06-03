import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RiCustomerServiceFill } from "react-icons/ri";
import CallNowBanner from './Callbtn';
import Link from 'next/link';
const Header = () => {
  return (
    <header>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img src="/images/logo/logo.png" className='logo-img' /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto w-100 justify-content-center">
              <Link href="/" className="menu-link nav-link">Hogar</Link>
              <Link href="/sobre-nosotras" className="menu-link nav-link">Sobre nosotras </Link>
              <Link href="/contacto" className="menu-link nav-link"> Contacto </Link>
            </Nav>
          </Navbar.Collapse>

          <CallNowBanner />

        </Container>
      </Navbar>

    </header>
  )
}

export default Header
