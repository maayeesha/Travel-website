import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
const Login = () => {
  return (
    <Container className="w-50 py-5">
      <Row>
        <Col> 
        <Form.Group className="mb-3 d-flex" controlId="">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group> 
      </Col>
        <Col> 
        <Form.Group className="mb-3 d-flex" controlId="">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>  </Col>
      </Row>
      <Row>
        <Col>
        <Form.Group className="mb-3 d-flex" controlId="">
        <Form.Label>Destination</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>
      </Col>
        <Col>
        <Form.Group className="mb-3 d-flex" controlId="">
        <Form.Label>Tour</Form.Label>
        <Form.Control type="" placeholder="" />
      </Form.Group>
        </Col>
      </Row>
      <Row>Date</Row>
      <Row>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      </Row>
      <Row>
      <Form.Group className="mb-3 d-flex" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </Row>

    </Container>
  );
};

export default Login;