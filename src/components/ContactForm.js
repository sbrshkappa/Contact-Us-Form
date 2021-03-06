import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const ContactForm = () => {

    const [state, setState] = useState(
        {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    )

    const sendEmail = (event) => {
        event.prevenDefault();
        console.log("Email API will be called from here");
    }

    const onInputChange = event => {
        const {name, value} = event.target;

        setState({
            ...state,
            [name]: value
        });
    }

    return (
        <div>
            <form onSubmit={sendEmail}>
                <Form.Group controlId="name">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="name" value={state.name} placeHolder="Enter your full name" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" name="email" value={state.email} placeHolder="Enter your email" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group controlId="subject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" name="subject" value={state.subject} placeHolder="Enter subject" onChange={onInputChange}/>
                </Form.Group>
                <Form.Group controlId="message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" name="message" value={state.message} rows="3" placeHolder="Enter message" onChange={onInputChange}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default ContactForm;