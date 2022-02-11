import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import './login.css'

class Login extends Component {
    state = {  } 
    render() { 
        return (<Container className="m-5">
        <Row>
          <Col className='col-md-5'>
            <h2>Login</h2>
            <h6>Get access to your Orders, Wishlists and Recommendations</h6>
          </Col>
          <Col className='col-md-5'>
            <Form>
              <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control className='input-view' type="email"  />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control className='input-view' type="password"/>
              </Form.Group>
              <Button variant="danger" className="w-100" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>);
    }
}
 
export default Login;