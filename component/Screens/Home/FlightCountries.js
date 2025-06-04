import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

const FlightCountries = () => {
     const columns = [
    [
      'Vuelos a estados unidos',
      'Vuelos a España',
      'Vuelos a Arabia Saudita',
      'Vuelos a Japón',
      'Vuelos a Francia',
      'Vuelos a Francia',
      'Vuelos a Alemania',
    ],
    [
      'Vuelos a México',
      'Vuelos a Italia',
      'Vuelos a Filipinas',
      'Vuelos a Israel',
      'Vuelos a Colombia',
      'Vuelos a Egipto',
    ],
    [
      'Vuelos a Canadá',
      'Vuelos a Reino Unido',
      'Vuelos a la India',
      'Vuelos a Turquía',
      'Vuelos a Grecia',
      'Vuelos a Portugal',
    ],
  ];
  return (
    <div>
       <Container className="my-5">
      <h5 className="fw-bold mb-3">Vuelo a países</h5>
      <Row className="bg-light p-4">
        {columns.map((col, index) => (
          <Col md={4} key={index}>
            <ul className="list-unstyled">
              {col.map((country, i) => (
                <li key={i}>
                  <a href="#" className="text-primary text-decoration-none">
                    • {country}
                  </a>
                </li>
              ))}
            </ul>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  )
}

export default FlightCountries
