// src/SignUp.js
import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="sign-up-page">
      <Container>
        <Row className="justify-content-center align-items-center vh-100">
          <Col md={6}>
          </Col>
          <Col md={6} className="sign-up-form">
            <h1 className="text-center">WELCOME TO SHMS</h1>
            <Form>
              <Form.Group>
                <Form.Control type="text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit" className="btn-register">
                Register
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignUp;
