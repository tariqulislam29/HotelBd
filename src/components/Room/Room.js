import React from 'react';
import { Link } from 'react-router-dom';
import './Room.css'
const Room = (props) => {
    const { room } = props;
    const { _id, price, name, img, description } = room;
    return (
        <div>

            <div className="container room-container ">
                <div className="row room-details">
                    <div className="col-lg-6 image-div">
                        <img className="w-100 room-image-size" src={img} alt="" />
                    </div>
                    <div className="col-lg-6 pt-4 ps-5 image-div">
                        <h2>{name}</h2>
                        <p>{description}</p>
                        <h3 className="mb-4">Room Facility</h3>
                        <p><i className="fas fa-bed me-2 mt-2"></i>Bed : 1 King Bed</p>
                        <p><i className="fas fa-binoculars me-2 mt-2"></i>View : Lake View </p>
                        <p><i className="fas fa-binoculars me-2 mt-2 "></i>View : Lake View </p>
                        <p><i className="fas fa-wifi me-2 mt-2"></i>Free Wifi : Yes</p>
                        <p><i className="fas fa-coffee me-2 mt-2"></i>Breakfast : Yes</p>
                        <p><i className="fas fa-users me-2 mt-2"></i>Max Occupancy : 2 Adult, 1 Child</p>
                        <hr />
                        <div className="book-details">
                            <h5>{price}Tk/Night</h5>
                            <div>
                                <Link to={`/placeOrders/${_id}`}>
                                    <button className="   btn1 ">Book Now</button>
                                </Link>
                            </div>

                        </div>

                    </div>
                </div>

            </div>



        </div>
    );
};

export default Room;