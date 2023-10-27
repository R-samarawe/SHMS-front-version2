import React, { useState } from "react";
import "./sidenav.css";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";

export default function SideNav() {
  //const user = "doctor";
  const user = "patient";
  //const user = "receptionist";
  //const user = "admin";

  //for generate different navigation pannels for Doctor/ Patient / Recept
  var lists = [];
  if (user === "doctor") {
    const list1 = [
      { id: 10, title: "Dashboard", path: "/doctor" },
      { id: 11, title: "Profile", path: "/doctor/profile" },
      { id: 12, title: "Appointments", path: "/doctor/appointments" },
      { id: 13, title: "Medical Records", path: "/doctor/medicalrecords" },
    ];
    lists = list1;
  } else if (user === "patient") {
    const list1 = [
      { id: 1, title: "Dashboard", path: "/patient" },
      { id: 2, title: "Profile", path: "/patient/profile" },
      { id: 3, title: "Doctors", path: "/patient/doctors" },
      { id: 4, title: "Appointments", path: "/patient/appointments" },
      { id: 5, title: "Medical Records", path: "/patient/medicalrecords" },
      { id: 6, title: "Payments", path: "/patient/payments" },
    ];
    lists = list1;
  } else if (user === "receptionist") {
    const list1 = [
      { id: 7, title: "Dashboard", path: "/receptionist" },
      { id: 8, title: "Appointments", path: "/receptionist/appointments" },
      { id: 9, title: "Invoice", path: "/receptionist/invoice" },
    ];
    lists = list1;
  }

  //dashbord seleced
  const [selected, setSelected] = useState(1);

  const handleColor = (row) => {
    setSelected(row.id);
  };

  const Navigate = useNavigate();
  const viewHeight = window.outerHeight;

  return (
    <div className="sideNavBar">
      {/** navigation buttons */}
      <Stack gap={3}>
        {lists.map((list) => (
          <div key={list.id}>
            <button
              onClick={() => {
                handleColor(list);
                Navigate(list.path);
              }}
              style={{
                backgroundColor: list.id === selected ? "blue" : "",
                border: "0px",
                padding: "10px",
                width: "95%",
              }}
            >
              {list.title}
            </button>
          </div>
        ))}

        {/** for get the full height of side navigation */}
        <div style={{ height: viewHeight, margin: "0px" }}>{""}</div>
      </Stack>
    </div>
  );
}
