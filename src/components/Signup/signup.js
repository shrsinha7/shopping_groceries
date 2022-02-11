import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './signup.css'

class Signup extends Component {
    state = {  } 
    render() { 
        return ( <Container className="m-5">
        <Row>
          <Col className='col-md-5'>
            <h2>Signup</h2>
            <h6>We do not share your personal details with anyone.</h6>
          </Col>
          <Col className='col-md-5'>
            <Form>
              <Form.Group className="mb-2" controlId="Firstname">
                <Form.Label>First Name</Form.Label>
                <Form.Control className='input-view' type="text"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="Lastname">
                <Form.Label>Last Name</Form.Label>
                <Form.Control className='input-view' type="text"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="Email">
                <Form.Label>Email</Form.Label>
                <Form.Control className='input-view' type="email"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="Password">
                <Form.Label>Password</Form.Label>
                <Form.Control className='input-view' type="password"/>
              </Form.Group>
              <Form.Group className="mb-2" controlId="ConfirmPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control className='input-view' type="password"/>
              </Form.Group>
              <Button variant="danger" className="w-100" type="submit">
                Signup
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>);
    }
}
 
export default Signup;