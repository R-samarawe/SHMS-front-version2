import React from "react";
import "./home.css";
import Stack from "react-bootstrap/Stack";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const users = [
    { id: 1, title: "Doctor", path: "/doctor" },
    { id: 2, title: "Patient", path: "/patient" },
    { id: 3, title: "Receptionist", path: "/receptionist" },
  ];

  const Navigate = useNavigate();

  return (
    <div className="homepage">
      <Stack gap={3}>
        {users.map((user) => (
          <div key={user.id}>
            <button
              onClick={() => {
                Navigate(user.path);
              }}
              style={{
                backgroundColor: "blue",
                border: "0px",
                padding: "10px",
                width: "95%",
              }}
            >
              {user.title}
            </button>
          </div>
        ))}
      </Stack>
    </div>
  );
}
