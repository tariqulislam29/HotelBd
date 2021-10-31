import React from 'react';
import './Check.css'
const Check = () => {
    return (
        <div>
            <div className="check">
                <div className="check-details">
                    <div className="box-select">

                        <div className="col me-2">
                            <input type="text" className="form-control p-2 " placeholder="SELECT DATE" />
                        </div>
                        <div className="col me-2">
                            <input type="text" className="form-control  p-2" placeholder="SELECT DATE" />
                        </div>


                        <div className="me-2  ">
                            <select className="form-select select-item " aria-label="Default select example">
                                <option defaultValue>ADULT</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className=" me-2  ">
                            <select className="form-select select-item  " aria-label="Default select example">
                                <option defaultValue>CHILDREN</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <button type="submit" className="search-btn p-2 me-2" >Check Availability</button>
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Check;