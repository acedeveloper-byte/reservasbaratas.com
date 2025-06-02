// pages/contacto.js

import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Seo from '@/component/common/Seo';
import Breadcrumb from '@/component/common/Breadcrumb';
import Screen from '@/component/common/Screen';

const Contacto = () => {
    return (
        <>
            <Seo title="Contacto" />
            <Screen>
                <Breadcrumb main="Home" page="Contacto" link="/" background="/images/home-poster.jpg" />
                <section className="py-5">
                    <Container>
                        <Row className="justify-content-center">
                            <Col md={8}>
                                <h2 className="mb-4">Contáctanos</h2>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formName">
                                        <Form.Label>Nombre</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su nombre" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" placeholder="Ingrese su email" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formSubject">
                                        <Form.Label>Asunto</Form.Label>
                                        <Form.Control type="text" placeholder="Asunto del mensaje" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formMessage">
                                        <Form.Label>Mensaje</Form.Label>
                                        <Form.Control as="textarea" rows={5} placeholder="Escriba su mensaje aquí" />
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Enviar Mensaje
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Screen>
        </>
    );
};

export default Contacto;
