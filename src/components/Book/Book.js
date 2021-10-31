import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Book.css'

const Book = (props) => {
    const { book } = props;
    const { _id, price, name, img, description } = book;
    return (
        <div>
            <Col >

                <Card className="card card-design ">
                    <Card.Img variant="top" src={img} className="image-size" />
                    <Card.Body >
                        <Card.Title className="card-title text-center">{name}</Card.Title>
                        <p>{description}</p>
                        <h5>Price: {price}Tk</h5>
                    </Card.Body>
                    <Link to={`/placeOrders/${_id}`}>
                        <button className="  py-2 w-100 ">Book Now</button>
                    </Link>

                </Card>
            </Col>
        </div>
    );
};

export default Book;