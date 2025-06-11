import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'



const FEATURES = [
    {
        "id": 1,
        "title": "Mejores precios garantizados",
        "description": "Comparamos diferentes aerolíneas para encontrar la tarifa más económica y que puedas volar dentro de tu presupuesto.",
        "icon": "/images/specifications/1.png"
    },
    {
        "id": 2,
        "title": "Destinos en todo el mundo",
        "description": "Desde destinos nacionales hasta destinos internacionales, te ayudamos a reservar el vuelo de tus sueños.",
        "icon": "/images/specifications/2.png"

    },
    {
        "id": 3,
        "title": "Ofertas de viaje ilimitadas",
        "description": "Con nosotros, puedes conseguir ofertas exclusivas en vuelos a diferentes destinos alrededor del mundo.",
        "icon": "/images/specifications/3.png"

    },
    {
        "id": 4,
        "title": "Satisfacción del cliente",
        "description": "Nuestras plataformas priorizan la satisfacción del cliente ofreciendo servicios premium desde la reserva hasta el aterrizaje.",
        "icon": "/images/specifications/4.png"

    }
]





const Features = () => {

    return (
        <>

            <Container>
                <Row>
                    {FEATURES.map((item) =>
                        <Col md={3} className="features">
                            <Card>
                                <a>
                                    <Card.Body >
                                        <Card.Title className="text-center" style={{ justifyContent: "center", alignItems: "center", display: "flex", flexDirection: "column" }}>
                                            <img src={item.icon} style={{ width: 100, marginBottom: 20 }} />
                                            {item.title}</Card.Title>
                                        <Card.Text className="text-center">
                                            {item.description}
                                        </Card.Text>
                                    </Card.Body>
                                </a>

                            </Card>

                        </Col>
                    )}

                </Row>
            </Container>

        </>)
}

export default Features
