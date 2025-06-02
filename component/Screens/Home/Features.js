import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'



const FEATURES = [
    {
        "id": 1,
        "title": "Easy & Seamless Bookings",
        "description": "Book your next train ride with us online or offline within a few minutes.",
        "icon": "/assets/clipart/train.png"
    },
    {
        "id": 2,
        "title": "Lowest Fares Guaranteed",
        "description": "We help you find affordable train fares so you can travel at low fares.",
        "icon": "/assets/clipart/tickets.png"

    },
    {
        "id": 3,
        "title": "No Surprises",
        "description": "We promise clear pricing, secure checkout, and instant ticket delivery",
        "icon": "/assets/clipart/dollarsign.png"

    },
    {
        "id": 4,
        "title": "Nationwide Coverage",
        "description": "From major cities to scenic small towns, book Amtrak and regional rail in one click.",
        "icon": "/assets/clipart/call-image.png"

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
                                        <Card.Title>
                                            <img src={item.icon} style={{ width: 50, marginBottom: 20 }} />
                                            {item.title}</Card.Title>
                                        <Card.Text >

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
