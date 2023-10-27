import React from "react";
import "./home.css";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";

export default function DoctorList() {
  const doctors = [
    { id: 1, name: "Dr. Perera", contact: "0746251218", special: "Cardiology" },
    {
      id: 2,
      name: "Dr. Kaanthi",
      contact: "0726445123",
      special: "Clinical Immunology/Allergy",
    },
    {
      id: 3,
      name: "Dr. Wanigasekara",
      contact: "0775251617",
      special: "Dermatology",
    },
    { id: 4, name: "Dr. Kamal", contact: "0726445123", special: "Nephrology" },
    { id: 5, name: "Dr. Perera", contact: "0746251218", special: "Psychiatry" },
    {
      id: 6,
      name: "Dr. Kaanthi",
      contact: "0726445123",
      special: "Cardiology",
    },
    {
      id: 7,
      name: "Dr. Wanigasekara",
      contact: "0775251617",
      special: "Nephrology",
    },
    { id: 8, name: "Dr. Kamal", contact: "0726445123", special: "Dermatology" },
    { id: 9, name: "Dr. Perera", contact: "0746251218", special: "Psychiatry" },
    {
      id: 10,
      name: "Dr. Kaanthi",
      contact: "0726445123",
      special: "Dermatology",
    },
    {
      id: 11,
      name: "Dr. Wanigasekara",
      contact: "0775251617",
      special: "Nephrology",
    },
    { id: 12, name: "Dr. Kamal", contact: "0726445123", special: "Psychiatry" },
  ];

  console.log("hi");
  return (
    <div className="content" style={{ alignContent: "center" }}>
      <div className="p-2 mt-3">
        <h3>Doctors</h3>
      </div>
      <Stack gap={3} style={{ paddingLeft: "30px" }}>
        <div>
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <Card style={{ width: "30rem", backgroundColor: "#c1c1a4" }}>
                <Card.Body>
                  <Card.Title>Doctor Name : {doctor.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Specialization : {doctor.special} Contact : {doctor.contact}
                  </Card.Subtitle>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Stack>
    </div>
  );
}
