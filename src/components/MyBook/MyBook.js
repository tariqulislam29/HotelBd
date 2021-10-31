import React, { useEffect, useState } from 'react';
import { Card, Col } from 'react-bootstrap';
import './MyBook.css'
const MyBook = (props) => {
    const { order } = props;
    const { name, email, mobilenumber, start_date, end_date, adult, children, id, status, _id } = order;



    const [room, setRoom] = useState([])
    useEffect(() => {
        const url = `https://ghoulish-vampire-97561.herokuapp.com/rooms/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRoom(data));
    }, []);


    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://ghoulish-vampire-97561.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        window.location.reload();

                    }
                });
        }
    }


    return (
        <div>

            <Col className="full-cards">
                <Card className="full-card">
                    <div className="mybook-section">
                        <div className="room-details-section">
                            <div className=" image-div">
                                <img src={room.img} className="w-100" alt="" />
                            </div>
                            <div className="details-div d-flex align-items-center ps-2">
                                <div> <h5>{room.name}</h5>
                                    <p>Price: {room.price}</p></div>

                            </div>
                        </div>

                        <div className="order-details-section d-flex align-items-center">
                            <div className="  order-details">
                                <p>Name:{name}</p>
                                <p> Email:{email}</p>
                                <p>  Mobile Number:{mobilenumber}</p>
                                <p>Start/End Date:{start_date}/{end_date} </p>
                                <p>Adult: {adult} and Children: {children}</p>
                                <p> </p>
                                <p className="text-danger">Status: {status}</p>
                            </div>


                        </div>

                        <div className="button-section d-flex align-items-center">
                            <button className="px-4 bg-dark text-white" onClick={() => { handleDelete(_id) }}>Delete</button>
                        </div>
                    </div>
                </Card>
            </Col>

        </div>


    );
};

export default MyBook;