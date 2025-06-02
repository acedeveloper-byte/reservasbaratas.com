import React, { useState } from 'react';
import { Container, Row, Col, Form, Tab, Nav, Button } from 'react-bootstrap';

const SearchEngine = () => {
  const [tripType, setTripType] = useState('round');

  return (
     <div
      style={{
        backgroundImage: 'url(/images/home-poster.jpg)', 
      
      }}
      className='home-poster-bg'
    >
      <div className="overlay" style={{ backgroundColor: 'rgba(0,0,0,0.4)', height: '100%' }}>
        <Container className="h-100 d-flex flex-column justify-content-center">
          <h1 className="display-4 fw-bold mb-4">¡Explora el mundo!</h1>

          <Tab.Container defaultActiveKey="vuelos">
          

            <Tab.Content>
              <Tab.Pane eventKey="vuelos">
                <Form className=" p-3 rounded">
                  <div className="mb-3 d-flex gap-3">
                    <Form.Check
                      type="radio"
                      label="Viaje redondo"
                      name="tripType"
                      id="round"
                      checked={tripType === 'round'}
                      onChange={() => setTripType('round')}
                      className='text-white'
                    />
                    <Form.Check
                      type="radio"
                      label="Viaje sencillo"
                      name="tripType"
                      id="oneway"
                      checked={tripType === 'oneway'}
                      onChange={() => setTripType('oneway')}
                      className='text-white'
                    />
                  </div>

                  <Row className="g-2">
                    <Col md>
                      <Form.Group>
                        <Form.Label className='text-white'>Origen</Form.Label>
                        <Form.Control type="text" placeholder="Ciudad / Aeropuerto" />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label className='text-white'>Destino</Form.Label>
                        <Form.Control type="text" placeholder="Ciudad / Aeropuerto" />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label className='text-white'>Salida</Form.Label>
                        <Form.Control type="date" defaultValue="2025-05-28" />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label className='text-white'>Retorno</Form.Label>
                        <Form.Control type="date" defaultValue="2025-06-04" />
                      </Form.Group>
                    </Col>
                    <Col md>
                      <Form.Group>
                        <Form.Label className='text-white'>Personas, clase</Form.Label>
                        <Form.Control type="text" placeholder="1, Economía" />
                      </Form.Group>
                    </Col>
                    <Col xs="auto" className="d-flex align-items-end">
                      <Button variant="primary" >Buscar</Button>
                    </Col>
                  </Row>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Container>
      </div>
    </div>
  );
};

export default SearchEngine;
