import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

const TravelOffers = () => {

    const DEST = [
        {
            id: 1,
            place: "Madrid",
            image: "/images/popular-destinations/madrid.jpg",
            country: "Spain",
            description: "Madrid, la vibrante capital de España, combina una rica historia con un toque moderno, ofreciendo arte de primera clase, animadas plazas y gastronomía gourmet. ¡Reserva y descubre esta hermosa ciudad!"
        },
        {
            id: 2,
            place: "Palma de Mallorca",
            image: "/images/popular-destinations/palma-de-mallorca.jpg",
            country: "Spain",
            description: "Palma de Mallorca, la soleada capital de las Islas Baleares, presume de impresionantes playas, arquitectura gótica y un encantador casco antiguo. ¡Consigue grandes ofertas y reserva ya!"
        },
        {
            id: 3,
            place: "Granada",
            image: "/images/popular-destinations/granada.jpg",
            country: "Spain",
            description: "Granada es una cautivadora ciudad andaluza donde la herencia árabe se fusiona con el encanto español, realzada por la majestuosa Alhambra y las pintorescas vistas de Sierra Nevada. ¡Encuentra ofertas exclusivas!"
        },
        {
            id: 4,
            place: "Zaragoza",
            image: "/images/popular-destinations/zaragoza.jpg",
            country: "Spain",
            description: "Zaragoza combina raíces romanas y arquitectura mudéjar con un ambiente urbano moderno, con la emblemática Basílica del Pilar como punto de referencia. ¡Empieza a planificar tu viaje con nosotros!"
        }
    ]
    return (
        <>
            <Container>
                <h4 className="fw-bold">Las mejores ofertas y condiciones de viaje </h4>

                <Row className=''>
                    {DEST.map((item, index) =>
                        <Col md={3} className="mt-3 top-destination">
                            <Card>
                                <Card.Title className='m-2'>
                                    {item.place}</Card.Title>
                                <p className='m-2'>{item.country}</p>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Text>
                                        {item.description}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default TravelOffers
