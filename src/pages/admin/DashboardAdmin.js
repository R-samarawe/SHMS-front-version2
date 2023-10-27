import React from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import "./home.css";

export default function DashboardRec() {
  return (
    <div className="homepage">
      <Container fluid>
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Header />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row className="mt-1">
          <Col xl={4} lg={4} md={4} sm={12}>
            <SideNav />
          </Col>
          <Col xl={8} lg={8} md={8} sm={12}>
            <div className="content">
              <Row className="mb-4">
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Create Roles
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    View Roles
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Update Roles
                  </Button>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Monitoring System
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Add Users
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    View Users
                  </Button>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Update Users
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Delete Users
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Add Security Rules
                  </Button>
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    View Security Rules
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Update Security Rules
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Delete Security Rules
                  </Button>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row>
          <Col xl={12} lg={12} md={12}>
            <Footer />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
