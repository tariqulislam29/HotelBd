import React from 'react';
import './Welcome.css'
const Welcome = () => {
    return (
        <div>
            <div className="about">


                <div className="about-details">
                    <div>

                        <h2>Welcome to Hotel BD <br />
                            the haven of your weekend</h2>
                        <p>To put our mission objectives into practice and contribute <br /> towards future growth and development; <br /> we believe –every brick has to add up and is equally important to build a building.</p>

                        <button className="bg-dark text-white">More About Us</button>
                    </div>

                </div>
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1558959357-685f9c7ace7b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>

            </div>
        </div>
    );
};

export default Welcome;