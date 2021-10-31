import React from 'react';
import './Pricing.css'
const Pricing = () => {
    return (
        <div>
            <h2 className="  fw-bold text-center"> Our Pricing</h2>
            <h5 className=" text-center" >-------------------------</h5>

            <div className="row row-cols-1 row-cols-md-4 g-4 container text-center ">
                <div className="col">
                    <div className="card h-100 pricing">

                        <div className="card-body px-4">
                            <h3 className="card-title">Economic</h3>
                            <hr />
                            <p>Flight Ticket(2)</p>
                            <p>Music Concert (30% Off)</p>
                            <p> Restaurant (Snacks)</p>
                            <p> Face Make(No)</p>
                            <hr />
                            <h4>5200Tk/</h4><span>NIGHT</span>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 pricing">

                        <div className="card-body px-4">
                            <h3 className="card-title">The Best</h3>
                            <hr />
                            <p> Flight Ticket(3)</p>
                            <p> Music Concert (40% Off)</p>
                            <p>  Restaurant (Lunch)</p>
                            <p> Face Make</p>
                            <hr />
                            <h4>5500Tk/</h4><span>NIGHT</span>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 pricing">

                        <div className="card-body px-4">
                            <h3 className="card-title">Pro</h3>
                            <hr />
                            <p>Flight Ticket</p>
                            <p>Music Concert (45% Off)</p>
                            <p> Restaurant (Snacks)</p>
                            <p> Face Make(No)</p>
                            <hr />
                            <h4>6000Tk/</h4><span>NIGHT</span>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 pricing">

                        <div className="card-body px-4">
                            <h3 className="card-title">Ultra</h3>
                            <hr />
                            <p>Flight Ticket</p>
                            <p>Music Concert (50% Off)</p>
                            <p> Restaurant (Snacks)</p>
                            <p> Face Make(No)</p>
                            <hr />
                            <h4>6500Tk/</h4><span>NIGHT</span>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Pricing;