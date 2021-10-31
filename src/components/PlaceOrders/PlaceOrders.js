import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css'
const PlaceOrders = () => {
    const { id } = useParams();
    const { user } = useAuth();
    const status = "panding"
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://ghoulish-vampire-97561.herokuapp.com/placeOrders', { ...data, id, status })
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();


                }
            })


    }




    const [room, setRoom] = useState([])
    useEffect(() => {
        const url = `https://ghoulish-vampire-97561.herokuapp.com/rooms/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setRoom(data));
    }, []);


    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-sm-12">
                        <div>
                            <img src={room.img} alt="" className="w-100 image-size" />
                        </div>
                        <br />
                        <h2>Description Of Room</h2>
                        <hr />
                        <br />
                        <h4>{room.name}</h4>
                        <p>{room.full_description}</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div>



                            <div className="check py-5">
                                <div className="check-detail">

                                    <div className="box-selects">
                                        <h2>Your Reservation</h2>

                                        <form onSubmit={handleSubmit(onSubmit)}>
                                            <div className="col  my-3">
                                                <input className="input-field ps-2" type="text" value={room.name} disabled {...register("bookName")} />
                                            </div>
                                            <div className="col  my-3">
                                                <input className="input-field ps-2" type="text" defaultValue={user.displayName} {...register("name")} />
                                            </div>
                                            <div className="col my-3">
                                                <input className="input-field ps-2" type="text" defaultValue={user.email} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
                                            </div>
                                            <div className="col my-3">
                                                <input className="input-field ps-2" type="tel" placeholder="Mobile Number" {...register("mobilenumber", { required: true, minLength: 6, maxLength: 12 })} />
                                            </div>
                                            <div className="col  my-3">
                                                <input className="input-field ps-2" type="text" placeholder="Start Date" {...register("start_date", { required: true, maxLength: 100 })} />
                                            </div>
                                            <div className="col my-3">
                                                <input className="input-field  ps-2 " type="text" placeholder="End Date" {...register("end_date", { required: true, maxLength: 100 })} />
                                            </div>
                                            <div className=" col my-3 ">
                                                <select className="input-field  ps-2" {...register("adult")}>
                                                    <option defaultValue="Children">Children</option>
                                                    <option value="one">one</option>
                                                    <option value="two">two</option>
                                                    <option value="three">three</option>

                                                </select>
                                            </div>
                                            <div className=" col  my-3 ">
                                                <select className="input-field  ps-2 "  {...register("children")}>
                                                    <option defaultValue="Adult">Adult</option>
                                                    <option value="one">one</option>
                                                    <option value="two">two</option>
                                                    <option value="three">three</option>
                                                </select>
                                            </div >
                                            <input type="submit" value="Check Availability" className="search-button p-2  my-3" />
                                        </form>




                                    </div>

                                </div>


                            </div>
                        </div>
                        <div className="box-selects">
                            <h3 className="mb-4">Room Facility</h3>
                            <p><i className="fas fa-bed me-2 mt-2"></i>Bed : 1 King Bed</p>
                            <p><i className="fas fa-binoculars me-2 mt-2"></i>View : Lake View </p>
                            <p><i className="fas fa-binoculars me-2 mt-2 "></i>View : Lake View </p>
                            <p><i className="fas fa-wifi me-2 mt-2"></i>Free Wifi : Yes</p>
                            <p><i className="fas fa-coffee me-2 mt-2"></i>Breakfast : Yes</p>
                            <p><i className="fas fa-users me-2 mt-2"></i>Max Occupancy : 2 Adult, 1 Child</p>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PlaceOrders;