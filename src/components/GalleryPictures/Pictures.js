import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Picture from '../GalleryPicture/Picture';

const Pictures = () => {
    const [pictures, setPictures] = useState([])
    useEffect(() => {
        fetch('https://ghoulish-vampire-97561.herokuapp.com/pictures')
            .then(res => res.json())
            .then(data => setPictures(data));
    }, []);
    return (
        <div className=" my-5 py-5">
            <h2 className="  fw-bold text-center">Our Gallery Pictures</h2>
            <h5 className=" text-center" >------------x------------</h5>
            <Row xs={1} md={3} className="g-4 m-5 ">
                {
                    pictures.map(picture => <Picture
                        key={picture._id}
                        picture={picture}
                    ></Picture>)

                }


            </Row>
        </div>
    );
};

export default Pictures;