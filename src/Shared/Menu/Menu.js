import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Menu.css'
const Menu = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="border" >
                <Container>
                    <Navbar.Brand className="fw-bold"> <p className="fw-bold fs-3"> Hotel BD</p> </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto fs-5 ">
                            <Nav.Link as={Link} to='/home' className="p-3 text-dark">Home</Nav.Link>
                            <Nav.Link as={Link} to='/rooms' className="p-3 text-dark" >Rooms</Nav.Link>
                            <Nav.Link as={Link} to='/contact' className="p-3 text-dark">Contact</Nav.Link>

                            {
                                user.email ?
                                    <div className="admin">
                                        <Nav.Link as={Link} to='/myBooks' className="p-3 text-dark">My Books</Nav.Link>
                                        <Nav.Link as={Link} to='/manageOrders' className="p-3 text-dark">Manage All Books</Nav.Link>
                                        <Nav.Link as={Link} to='/addBook' className="p-3 text-dark">Add A New Books</Nav.Link>
                                        <span className="p-3 text-dark">{user.displayName}  </span>
                                        <button onClick={logOut} className="ps-2 rounded-pill">Logout</button>
                                    </div>

                                    :
                                    <Nav.Link as={Link} to='/login' className="ps-3 pt-3 text-dark  " ><i classname="fas fa-user"></i> Login</Nav.Link>
                            }

                        </Nav>



                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Menu;