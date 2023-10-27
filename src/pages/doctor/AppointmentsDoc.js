import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Header from "../../components/Header";
import SideNav from "../../components/SideNav";
import Footer from "../../components/Footer";
import "./home.css";

export default function AppointmentsDoc() {
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
