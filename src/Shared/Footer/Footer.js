import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div>

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>HISTORY</h4>
                            <ul>
                                <li>about us</li>
                                <li>privacy policy</li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>get help</h4>
                            <ul>
                                <li>FAQ</li>
                                <li>Booking Policy</li>
                                <li>Refund Policy</li>
                                <li>Book Now, Pay Later</li>
                            </ul>
                        </div>

                        <div className="footer-col">
                            <h4>Subscribe Newsletter</h4>
                            <div className="input-group mb-3">
                                <input type="text" className="form-control" placeholder="Email" />
                                <button className="btn footer-btn" type="button" id="button-addon2">Button</button>
                            </div>

                            <h4>follow us</h4>
                            <div className="social-links">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-instagram"></i>
                                <i className="fab fa-linkedin-in"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;