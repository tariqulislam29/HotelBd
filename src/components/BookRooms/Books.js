import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Book from '../Book/Book';

const Books = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('https://ghoulish-vampire-97561.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, []);
    if (rooms.length === 0) {
        return (<div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>);
    }

    return (
        <div className="my-5 py-5">
            <h2 className="  fw-bold text-center">Our Favorite Rooms</h2>
            <h5 className=" text-center" >------------x------------</h5>
            <Row xs={1} md={3} className="g-4 m-4 ">
                {
                    rooms.map(book => <Book
                        key={book._id}
                        book={book}
                    ></Book>)

                }


            </Row>

        </div>
    );
};

export default Books;