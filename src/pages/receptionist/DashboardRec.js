import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import "./home.css";
import DoctorDetails from "./DoctorDetails";

export default function DashboardRec() {
  return (
    <div className="homepage">
      <Container fluid className="ps-0 pe-0">
        <Row>
          <Col xl={12} lg={12} md={12}>
            {<Header />}
          </Col>
        </Row>
      </Container>
      <Container fluid className="ps-0 pe-0">
        <Row>
          <Col xl={3} lg={4} md={4} sm={12}>
            {<SideNav />}
          </Col>
          <Col xl={8} lg={8} md={8} sm={12}>
            {/**************************Start Content *************************************/}
            {/**Tv update */}
            <div className="content">
              <Row className="mb-4">
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Add Appointment
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    View Appointment
                  </Button>
                </Col>
                <Col xl={4} lg={8} md={8} sm={12}>
                  <DoctorDetails />
                </Col>
              </Row>
              <Row className="mb-4">
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Update Appointment
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Delete Appointment
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Create Invoice
                  </Button>
                </Col>
                <Col xl={4} lg={4} md={4} sm={4}>
                  <Button variant="primary" className="square-button">
                    Print Invoice
                  </Button>
                </Col>
              </Row>
            </div>
            {/**************************End Content *************************************/}
          </Col>
        </Row>
      </Container>
      <Container fluid className="ps-0 pe-0">
        <Row>
          <Col xl={12} lg={12} md={12}>
            {<Footer />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
