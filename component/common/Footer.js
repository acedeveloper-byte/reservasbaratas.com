import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaGem,
  FaHome,
  FaEnvelope,
  FaPhone,
  FaPrint
} from 'react-icons/fa';

import 'bootstrap/dist/css/bootstrap.min.css';
const Footer = () => {
  return (
    <footer className='bg-light p-2'>
  

      {/* Main Footer */}
      <section className="">
        <Container className="text-center text-md-start mt-5">
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
       <img src="/assets/logo/tending-tickets.png"  className="logo-img" />
              </h6>
              <p>
               

              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Acerca de reservasbaratas</h6>
              <p><a href="#" className="text-reset">Sobre nosotras</a></p>
              <p><a href="/contacto" className="text-reset">Contacta</a></p>
              {/* <p><a href="#!" className="text-reset">Vue</a></p>
              <p><a href="#!" className="text-reset">Laravel</a></p> */}
            </Col>

            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
              <p><a href="/politica-de-privacidad" className="text-reset">politica de privacidad</a></p>
              <p><a href="/politica-de-cancelacion" className="text-reset">politica de cancelacion</a></p>
              <p><a href="/terminos-y-condiciones" className="text-reset">terminos-y-condiciones</a></p>
             
              {/* <p><a href="#!" className="text-reset">Orders</a></p>
              <p><a href="#!" className="text-reset">Help</a></p> */}
            </Col>

            <Col md={4} lg={4} xl={4} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p><FaHome className="me-2" /> New York, NY 10012, US</p>
              <p><FaEnvelope className="me-3" /> support@reservasbaratas.com</p>
              <p> <a href="tel:+1(855) 754-6011" className='text-decoration-none text-black'><FaPhone className="me-3" /> +1(855) 754-6011</a></p>
              {/* <p><FaPrint className="me-3" /> + 01 234 567 89</p> */}
            </Col>
          </Row>
        </Container>
      </section>

      {/* Copyright */}
      <div className="text-center p-4 bg-light" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2025 Copyright:
        <a className="text-reset fw-bold" href="/"> reservasbaratas.com</a>
      </div>
    </footer>
  )
}

export default Footer
