import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Contact.css'
const Contact = () => {

    return (
        <div className="contact">

            <div className="form">
                <h2>Interested? Contact Us Now!</h2>
                <Form className="mt-5">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="name" placeholder="name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Massage</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button className="bg-dark text-light px-5" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>

        </div>
    );
};

export default Contact;