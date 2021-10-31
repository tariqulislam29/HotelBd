import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Banner.css'

const Banner = () => {
    return (
        <div className="mb-5">
            <Carousel  >
                <Carousel.Item >
                    <img
                        className="d-block res-image "
                        src="https://images.unsplash.com/photo-1564501049412-61c2a3083791?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1032&q=80"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Welcome to Hotel BD</h3>
                        <p>"Amazing hospitality with great, caring staff" </p>
                        <button>Know More &#8594;</button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block  res-image"
                        src="https://images.unsplash.com/photo-1496417263034-38ec4f0b665a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aG90ZWx8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Welcome to Hotel BD</h3>
                        <p>"Best hotel in BD"</p>
                        <button>Know More &#8594;</button>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Banner;