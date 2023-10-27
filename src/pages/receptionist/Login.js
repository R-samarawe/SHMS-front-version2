import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';


const LoginPage = () => {
    return (
        <div className="login-page">
          <Container>
            <Row className="justify-content-center align-items-center vh-100">
              <Col md={6}>
              </Col>
              <Col md={6} className="login-form">
                <h1 className="text-center">WELCOME TO SHMS</h1>
                <Form>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Username" />
                  </Form.Group>
                  <Form.Group>
                    <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="btn-login">
                    Login
                  </Button>
                  <Button variant="secondary" className="btn-signup">
                    Signup
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </div>
      );
    };

export default LoginPage;
