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
      <section>
        <div className="text-center text-md-start mt-5" style={{    padding: '20px 47px !important'}}>
          <Row className="mt-3">
            <Col md={3} lg={4} xl={3} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <img src="/images/logo/logo.png" className="logo-img" />
              </h6>
              <p>
                En Reservas Baratas, nos comprometemos a hacer de su viaje una experiencia inolvidable. Consiga las mejores ofertas y vuele con las tarifas más bajas. Llámenos hoy mismo para reservar sus vuelos.
              </p>
            </Col>

            <Col md={2} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Acerca de reservasbaratas</h6>
              <p><a href="/sobre-nosotras" className="text-reset">Sobre nosotras</a></p>
              <p><a href="/contacto" className="text-reset">Contacta</a></p>
              {/* <p><a href="#!" className="text-reset">Vue</a></p>
              <p><a href="#!" className="text-reset">Laravel</a></p> */}
            </Col>

            <Col md={3} lg={2} xl={2} className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
              <p><a href="/politica-de-privacidad" className="text-reset">Politica de privacidad</a></p>
              <p><a href="/politica-de-cancelacion" className="text-reset">Politica de cancelacion</a></p>
              <p><a href="/terminos-y-condiciones" className="text-reset">Terminos y condiciones</a></p>
              <p><a href="/descargo-de-responsabilidad" className="text-reset">Descargo de responsabilidad</a></p>

              {/* <p><a href="#!" className="text-reset">Orders</a></p>
              <p><a href="#!" className="text-reset">Help</a></p> */}
            </Col>

            <Col md={4} lg={4} xl={4} className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>
              <p><FaHome className="me-2" /> 3216 Raymond St, Klamath Falls, OR 97603</p>
              <p><FaEnvelope className="me-3" /> support@reservasbaratas.com</p>
              <p> <a href="tel:+52 80 0733 4112" className='text-decoration-none text-black'><FaPhone className="me-3" /> +52 80 0733 4112</a></p>
              {/* <p><FaPrint className="me-3" /> + 01 234 567 89</p> */}
            </Col>
          </Row>
        </div>
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
