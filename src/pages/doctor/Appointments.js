import React from "react";
import { Card } from 'react-bootstrap';

export default function DoctorDetails() {
  // You can add the doctor's details here or fetch them from an API
  const doctor = {
    name: "Patient John Doe",
    condition: "Heart Disease",
    contact: "Email: john@example.com\nPhone: (123) 456-7890",
  };

  return (
    <Card className="doctor-details">
      <Card.Header>Patient Details</Card.Header>
      <Card.Body>
        <h5>{doctor.name}</h5>
        <p>{doctor.condition}</p>
        <p>{doctor.contact}</p>
      </Card.Body>
    </Card>
  );
}
