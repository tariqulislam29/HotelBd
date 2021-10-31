import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Room from '../Room/Room';

const Rooms = () => {
    const [rooms, setRooms] = useState([])
    useEffect(() => {
        fetch('https://ghoulish-vampire-97561.herokuapp.com/rooms')
            .then(res => res.json())
            .then(data => setRooms(data));
    }, []);
    return (
        <div className="py-5">
            <h2 className="  fw-bold text-center">Our Favorite Rooms</h2>
            <Row xs={1} md={1} className="g-4 m-4 ">
                {
                    rooms.map(room => <Room
                        key={room._id}
                        room={room}
                    ></Room>)

                }


            </Row>
        </div>
    );
};

export default Rooms;