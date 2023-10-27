import React from "react";
import "./header.css";
import { IconContext } from "react-icons";
import {
  TbCircleLetterS,
  TbCircleLetterH,
  TbCircleLetterM,
} from "react-icons/tb";
import { FaPowerOff } from "react-icons/fa6";
import { BiSolidUser } from "react-icons/bi";
import Stack from "react-bootstrap/Stack";
import { Button } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <div className="headerBar">
        <Stack direction="horizontal">
          {/** LOGO */}
          <div className="ms-4">
            <IconContext.Provider value={{ color: "blue", size: "40px" }}>
              <div>
                <TbCircleLetterS />
                <TbCircleLetterH />
                <TbCircleLetterM />
                <TbCircleLetterS />
              </div>
            </IconContext.Provider>
          </div>
          {/** user icon */}
          <div className="ms-auto">
            <IconContext.Provider value={{ color: "blue", size: "30px" }}>
              <div>
                <BiSolidUser />
              </div>
            </IconContext.Provider>
          </div>
          {/** User name / Role */}
          <div className="ms-4">
            <div>User Name</div>
            <div>
              <b>User Role</b>
            </div>
          </div>
          {/** Sign out */}
          <div className="ms-5 me-5">
            <Button variant="outline-warning">
              <IconContext.Provider value={{ color: "orange", size: "30px" }}>
                <div>
                  <FaPowerOff />
                </div>
              </IconContext.Provider>
            </Button>
          </div>
        </Stack>
      </div>
    </div>
  );
}
