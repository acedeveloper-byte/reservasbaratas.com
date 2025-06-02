import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Destinations = () => {
   const destinations = [
  {
    image: '/images/spain.jpg',
    title: 'España',
    location: 'Madrid, España',
  },
  {
    image: '/images/mexico.jpg',
    title: 'México',
    location: 'Ciudad de México, México',
  },
  {
    image: '/images/argentina.jpg',
    title: 'Argentina',
    location: 'Buenos Aires, Argentina',
  },
  {
    image: '/images/colombia.jpg',
    title: 'Colombia',
    location: 'Bogotá, Colombia',
  },
  {
    image: '/images/chile.jpg',
    title: 'Chile',
    location: 'Santiago, Chile',
  },
];


  return (
    <div>
       <Container className="my-5">
      <h4 className="fw-bold">Destinos populares desde Estados Unidos</h4>
      <p className="text-muted">Estos atractivos destinos de Estados Unidos han sido elegidos especialmente para ti.</p>

      <Row className="gy-4">
        {destinations.slice(0, 4).map((dest, i) => (
          <Col md={3} key={i}>
            <Card>
              <Card.Img variant="top" src={dest.image} />
              <Card.Body>
                <Card.Title className="mb-1">{dest.title}</Card.Title>
                <Card.Text className="text-muted small mb-1">{dest.location}</Card.Text>
                <span className="badge bg-primary">Llama ahora</span>
              </Card.Body>
            </Card>
          </Col>
        ))}

        <Col md={4}>
          <Card className="h-100">
            <Card.Img variant="top" src={destinations[4].image} />
            <Card.Body>
              <Card.Title className="mb-1">{destinations[4].title}</Card.Title>
              <Card.Text className="text-muted small mb-1">{destinations[4].location}</Card.Text>
              <span className="badge bg-primary">Llama ahora</span>
            </Card.Body>
          </Card>
        </Col>

        <Col md={8}>
         <Container className="my-5">
      <Row className="bg-light align-items-center g-0">
        <Col md={4}>
          <img
            src="/images/travel.jpg" // Replace with your image path
            alt="Traveler at airport"
            className="img-fluid w-100 h-100 object-fit-cover"
          />
        </Col>
        <Col md={8} className="p-4">
          <h6 className="fw-bold">¿Quieres volar por aún menos?</h6>
          <p className="text-muted">
            Busque nuestras mejores ofertas, rebajas de precios y trucos de viaje.
          </p>
          <Button variant="primary">Explorar ofertas</Button>
        </Col>
      </Row>
    </Container>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Destinations
