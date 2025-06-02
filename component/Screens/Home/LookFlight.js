import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const LookFlight = () => {
  const services = [
    {
      img: '/images/carrental.png',
      title: 'Alquila un coche a un precio favorable y gana millas',
    },
    {
      img: '/images/travelbag.png',
      title: 'Reserva tu alojamiento y gana millas',
    },
    {
      img: '/images/car-driver.png',
      title: 'Reserva un conductor personal o aparcamiento en el aeropuerto',
    },
    {
      img: '/images/fg-travel.png',
      title: 'Planes de datos de acceso en todo el mundo',
    },
  ];

  return (
    <div>
      <Container className="text-center my-5">
        <h5 className="fw-bold mb-4">¿Buscas algo más que un vuelo?</h5>
        <Row className="mb-4">
          {services.map((item, index) => (
            <Col md={3} sm={6} xs={12} key={index} className="mb-3">
              <Card
                className="h-100 text-center p-3"
                style={{
                  backgroundColor: '#f5f5f5',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  border: 'none',
                  borderRadius: '12px',
                }}
              >
                <Card.Body>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <img
                      src={item.img}
                      alt={item.title}
                      style={{ maxHeight: '80px' }}
                    />
                  </div>
                  <Card.Text>{item.title}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Button variant="primary">Descubre más</Button>
      </Container>
    </div>
  );
};

export default LookFlight;
