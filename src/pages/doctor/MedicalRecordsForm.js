import React, { useState } from "react";
import "./home.css";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

export default function MedicalRecordsForm() {
  // Define state to store form data

  const [formData, setFormData] = useState({
    docName: "",
    docContact: "",
    docDetails: "",
    patientName: "",
    patientContact: "",
    gender: "",
    patientAge: "",
    illness: "",
    preferMedicines: "",
    preferTests: "",
    reportResults: "",
    prevent: "",
    status: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle Typeahead selection status changes
  const handleSelectInputChange = (e, fieldName) => {
    //console.log(e.target.value);
    setFormData({
      ...formData,
      [fieldName]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="content">
      <Stack gap={3} style={{ paddingLeft: "30px" }}>
        <div className="p-2 mt-3">
          <h3>Create New Medical Record</h3>
        </div>
        <div className="p-2 mt-3">
          <Form onSubmit={handleSubmit}>
            {/**Doctor Label */}
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
                Doctor
              </Form.Label>
            </Form.Group>
            {/**Doctor name/ contact number */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  type="text"
                  size="sm"
                  id="docName"
                  name="docName"
                  onChange={handleInputChange}
                  placeholder="Doctor Name"
                />
              </Col>

              <Form.Label column sm="2">
                Contact No
              </Form.Label>

              <Col sm="3">
                <Form.Control
                  type="text"
                  size="sm"
                  id="docContact"
                  name="docContact"
                  onChange={handleInputChange}
                  placeholder="Contact No"
                />
              </Col>
            </Form.Group>

            {/**details */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Details
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="docDetails"
                  name="docDetails"
                  rows={3}
                  onChange={handleInputChange}
                  placeholder=" Doctor Details"
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
                  placeholder="Patient Contact"
                />
              </Col>
            </Form.Group>

            {/**Patient gender/ age */}

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Gender
              </Form.Label>
              <Col sm="3">
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
              <Form.Label column sm="2">
                Age
              </Form.Label>

              <Col sm="3">
                <Form.Control
                  type="text"
                  size="sm"
                  id="patientAge"
                  name="patientAge"
                  onChange={handleInputChange}
                  placeholder="Patient Age"
                />
              </Col>
            </Form.Group>

            {/**Medical Records Label*/}
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
                Medical Records
              </Form.Label>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="3">
                illness
              </Form.Label>
              <Form.Label column sm="3">
                Prefer Medicines
              </Form.Label>
              <Form.Label column sm="3">
                Prefer Tests
              </Form.Label>
              <Form.Label column sm="3">
                Report Results
              </Form.Label>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              {/** Illness Textarea  */}
              <Col sm="3">
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="illness"
                  name="illness"
                  rows={5}
                  onChange={handleInputChange}
                  placeholder=" Illness"
                />
              </Col>

              {/**Prefer Medicines Textarea  */}
              <Col sm="3">
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="preferMedicines"
                  name="preferMedicines"
                  rows={5}
                  onChange={handleInputChange}
                  placeholder="Prefer Medicines"
                />
              </Col>
              {/**Prefer Tests Textarea  */}
              <Col sm="3">
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="preferTests"
                  name="preferTests"
                  rows={5}
                  onChange={handleInputChange}
                  placeholder="Prefer Tests"
                />
              </Col>
              {/**Report Results Textarea  */}
              <Col sm="3">
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="reportResults"
                  name="reportResults"
                  rows={5}
                  onChange={handleInputChange}
                  placeholder="Report Results"
                />
              </Col>
            </Form.Group>

            {/**Prevent */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Prevent
              </Form.Label>
              <Col sm="3">
                <Form.Control
                  as="textarea"
                  size="sm"
                  id="prevent"
                  name="prevent"
                  rows={3}
                  onChange={handleInputChange}
                  placeholder=" Prevent from"
                />
              </Col>
            </Form.Group>

            {/**Status */}
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">
                Status
              </Form.Label>
              <Col sm="3">
                <Form.Select
                  aria-label="Select status"
                  size="sm"
                  id="status"
                  name="status"
                  onChange={(e) => handleSelectInputChange(e, "status")}
                >
                  <option disabled>Select Status</option>
                  <option value="pending">Pending</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="completed">Completed</option>
                </Form.Select>
              </Col>
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
