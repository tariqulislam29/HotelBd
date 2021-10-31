import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Staf.css'
const Staf = (props) => {
    const { staf } = props;
    const { name, img, title } = staf;
    return (
        <div>
            <Col >

                <Card className="card card-designs text-center ">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body >
                        <Card.Title className="card-title fw-bold  text-center">{name}</Card.Title>
                        <h5 className="title">{title}</h5>
                    </Card.Body>


                </Card>
            </Col>
        </div>
    );
};

export default Staf;