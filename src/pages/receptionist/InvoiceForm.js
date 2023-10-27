import React, { useState } from "react";
import "./home.css";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";

export default function InvoiceForm() {
  const doctors = [
    { name: "Dr. Kamal" },
    { name: "Dr. Perera" },
    { name: "Dr. Ranasinghe" },
    { name: "Dr. Premadasa" },
    { name: "Dr. Anuradi" },
  ];

  //storing data
  const [formData, setFormData] = useState({
    patientName: "",
    patientContact: "",
    appointNo: "",
    doctor: "",
    paymentAmount: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Typeahead selection changes
  const handleSelectInputChange = (e, fieldName) => {
    //console.log(fieldName);
    if (e.length > 0) {
      const selectedOption = e[0];
      //console.log(selectedOption.name);//get only string value
      //console.log(selectedOption);//get whole object value
      setFormData({
        ...formData,
        [fieldName]: selectedOption.name,
      });
    }
  };

  // Handle form submission for text fields
  const handleSubmit = (e) => {
    //console.log(e);
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="content">
      <Stack gap={3} style={{ paddingLeft: "30px" }}>
        <div className="p-2 mt-3">
          <h3>Create New Invoice</h3>
        </div>
        <div className="p-2 mt-3">
          <Form onSubmit={handleSubmit}>
            {/**Patient Label */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label
                column
                sm="11"
                style={{
                  backgroundColor: "#e0e0d1",
                  marginLeft: "10px",
                  borderRadius: "5px",
                }}
              >
                Patient
              </Form.Label>
            </Form.Group>

            {/**Patient name/ contact number */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  type="text"
                  size="sm"
                  id="patientName"
                  name="patientName"
                  onChange={handleInputChange}
                  placeholder="Patient Name"
                />
              </Col>

              <Form.Label column sm="2">
                Contact No
              </Form.Label>

              <Col sm="3">
                <Form.Control
                  type="text"
                  size="sm"
                  id="patientContact"
                  name="patientContact"
                  onChange={handleInputChange}
                  placeholder="Contact No"
                />
              </Col>
            </Form.Group>

            {/**Service Label */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label
                column
                sm="11"
                style={{
                  backgroundColor: "#e0e0d1",
                  marginLeft: "10px",
                  borderRadius: "5px",
                }}
              >
                Service
              </Form.Label>
            </Form.Group>

            {/**Appointment number */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Appointment No
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  size="sm"
                  id="appointNo"
                  name="appointNo"
                  onChange={handleInputChange}
                  placeholder="Appointment No"
                />
              </Col>
            </Form.Group>

            {/**Doctor */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Doctor
              </Form.Label>
              <Col sm="4">
                <Typeahead
                  id="doctor"
                  size="sm"
                  name="doctor"
                  options={doctors}
                  labelKey="name" //name key of locations object
                  onChange={(e) => handleSelectInputChange(e, "doctor")}
                  placeholder="Doctor"
                />
              </Col>
            </Form.Group>

            {/**Payment amount*/}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Payment amount (Rs.)
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  size="sm"
                  id="paymentAmount"
                  name="paymentAmount"
                  onChange={handleInputChange}
                  placeholder="Payment amount"
                />
              </Col>
              <Form.Label column sm="3">
                .00
              </Form.Label>
            </Form.Group>

            {/**Submit button  */}
            <Form.Group as={Row} className="mb-3">
              <Col sm="2">
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Col>
            </Form.Group>
          </Form>
        </div>
      </Stack>
    </div>
  );
}
