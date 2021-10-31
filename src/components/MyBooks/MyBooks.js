import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import MyBook from '../MyBook/MyBook';


const MyBooks = () => {
    const { user } = useAuth();
    const email = user.email;
    const [orders, setOrders] = useState([])
    const [details, setDetails] = useState([])
    useEffect(() => {
        const url = `https://ghoulish-vampire-97561.herokuapp.com/orders`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, []);

    useEffect(() => {
        const findData = orders.filter(order => order.email === email)
        setDetails(findData);

    }, [orders, email]);


    return (
        <div>
            <div className="pt-5">
                <h2 className="  fw-bold text-center">My Books Order</h2>
                <Row xs={1} md={1} className="g-4 m-4 ">
                    {
                        details.map(order => <MyBook
                            key={order._id}
                            order={order}
                        ></MyBook>)

                    }


                </Row>
            </div>
        </div>
    );
};

export default MyBooks;