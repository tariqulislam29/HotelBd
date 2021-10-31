import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Picture.css'
const Picture = (props) => {
    const { picture } = props;
    const { img } = picture;
    return (
        <div>
            <Col >

                <Card className="card card-design-picture">
                    <Card.Img variant="top" src={img} className="image-size" />

                </Card>
            </Col>
        </div>
    );
};

export default Picture;