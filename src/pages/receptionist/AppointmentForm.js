import React, { useState } from "react";
import "./home.css";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { Typeahead } from "react-bootstrap-typeahead";

export default function AppointmentForm() {
  const doctors = [
    { name: "Dr. Kamal" },
    { name: "Dr. Perera" },
    { name: "Dr. Ranasinghe" },
    { name: "Dr. Premadasa" },
    { name: "Dr. Anuradi" },
  ];

  const specializations = [
    { name: "Cardiology" },
    { name: "Clinical Immunology/Allergy" },
    { name: "Dermatology" },
    { name: "Nephrology" },
    { name: "Psychiatry" },
  ];

  const locations = [
    { name: "Room No 1, 1st Floor" },
    { name: "Room No 2, 1st Floor" },
    { name: "Room No 3, 1st Floor" },
    { name: "Room No 4, 1st Floor" },
    { name: "Room No 6, 1st Floor" },
    { name: "Room No 7, 2nd Floor" },
    { name: "Room No 8, 2nd Floor" },
    { name: "Room No 9, 2nd Floor" },
    { name: "Room No 10, 2nd Floor" },
    { name: "Room No 11, 2nd Floor" },
    { name: "Room No 12, 2nd Floor" },
    { name: "Room No 13, 2nd Floor" },
    { name: "Room No 14, 2nd Floor" },
    { name: "Room No 15, 2nd Floor" },
  ];

  // Define state to store form data

  const [formData, setFormData] = useState({
    drSpec: "",
    drName: "",
    appointDateTime: "",
    location: "",
    patientName: "",
    patientContact: "",
    age: "",
    gender: "",
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
          <h3>Create New Appointment</h3>
        </div>
        <div className="p-2 mt-3">
          {/**Doctor Specialization and Name */}
          <Form onSubmit={handleSubmit}>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Doctor
              </Form.Label>
              <Col sm="4">
                <Typeahead
                  id="drSpec"
                  size="sm"
                  name="drSpec"
                  options={specializations}
                  labelKey="name"
                  onChange={(e) => handleSelectInputChange(e, "drSpec")}
                  placeholder="Doctor specialization"
                />
              </Col>
              <Col sm="4">
                <Typeahead
                  id="drName"
                  size="sm"
                  name="drName"
                  options={doctors}
                  labelKey="name"
                  onChange={(e) => handleSelectInputChange(e, "drName")}
                  placeholder="Doctor name"
                />
              </Col>
            </Form.Group>

            {/**Appointment date/time  */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Appointmnt Date/Time
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  id="appointDate"
                  size="sm"
                  name="appointDateTime"
                  type="datetime-local"
                  onChange={handleInputChange}
                  placeholder="Small text"
                />
              </Col>
            </Form.Group>

            {/**Appointment location */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Location
              </Form.Label>
              <Col sm="4">
                <Typeahead
                  id="appointLocation"
                  size="sm"
                  name="location"
                  options={locations}
                  labelKey="name" //name key of locations object
                  onChange={(e) => handleSelectInputChange(e, "location")}
                  placeholder="Location"
                />
              </Col>
            </Form.Group>

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

            {/**Patient Name */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Patient Name
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  size="sm"
                  id="patientName"
                  name="patientName"
                  //value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter Patient Name"
                  required
                />
              </Col>
            </Form.Group>

            {/**Patient Contact No */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Contact No
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  size="sm"
                  id="patientContact"
                  name="patientContact"
                  //value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter Patient Contact number"
                  required
                />
              </Col>
            </Form.Group>

            {/**Patient Age */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Age
              </Form.Label>
              <Col sm="4">
                <Form.Control
                  type="text"
                  size="sm"
                  id="patientAge"
                  name="age"
                  //value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Enter Patient Age"
                  required
                />
              </Col>
            </Form.Group>

            {/**Patient Gender */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                Gender
              </Form.Label>
              <Col sm="4">
                <div className="mb-3">
                  <Form.Check
                    inline
                    label="Male"
                    value="Male"
                    name="gender"
                    type="radio"
                    onChange={handleInputChange}
                    id="maleRadio"
                    required
                  />
                  <Form.Check
                    inline
                    label="Female"
                    value="Female"
                    name="gender"
                    type="radio"
                    id="femaleRadio"
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </Col>
            </Form.Group>

            {/**Submit button */}
            <Form.Group as={Row} className="mb-3" controlId="patientGender">
              <Col sm="4">
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
