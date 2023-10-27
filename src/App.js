import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import DashboardDoc from "./pages/doctor/DashboardDoc";
import ProfileDoc from "./pages/doctor/ProfileDoc";
import AppointmentsDoc from "./pages/doctor/AppointmentsDoc";
import MedicalRecordsDoc from "./pages/doctor/MedicalRecordsDoc";
import DashboardPat from "./pages/patient/DashboardPat";
import ProfilePat from "./pages/patient/ProfilePat";
import DoctorsPat from "./pages/patient/DoctorsPat";
import AppointmentsPat from "./pages/patient/AppointmentsPat";
import MedicalRecordsPat from "./pages/patient/MedicalRecordsPat";
import PaymentsPat from "./pages/patient/PaymentsPat";
import DashboardRec from "./pages/receptionist/DashboardRec";
import AppointmentsRec from "./pages/receptionist/AppointmentsRec";
import InvoiceRec from "./pages/receptionist/InvoiceRec";
//import Home from "./pages/Home";

function App() {
  //const user = "doctor";
  const user = "patient";
  //const user = "receptionist";
  //const user = "admin";

  if (user === "doctor") {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/doctor" element={<DashboardDoc />}></Route>
            <Route path="/doctor/profile" element={<ProfileDoc />}></Route>
            <Route
              path="/doctor/appointments"
              element={<AppointmentsDoc />}
            ></Route>
            <Route
              path="/doctor/medicalrecords"
              element={<MedicalRecordsDoc />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else if (user === "patient") {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/patient" element={<DashboardPat />}></Route>
            <Route path="/patient/profile" element={<ProfilePat />}></Route>
            <Route path="/patient/doctors" element={<DoctorsPat />}></Route>
            <Route
              path="/patient/appointments"
              element={<AppointmentsPat />}
            ></Route>
            <Route
              path="/patient/medicalrecords"
              element={<MedicalRecordsPat />}
            ></Route>
            <Route path="/patient/payments" element={<PaymentsPat />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  } else if (user === "receptionist") {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/receptionist" element={<DashboardRec />}></Route>
            <Route
              path="/receptionist/appointments"
              element={<AppointmentsRec />}
            ></Route>
            <Route
              path="/receptionist/invoice"
              element={<InvoiceRec />}
            ></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  /*
  else {
    return (
      <div className="app">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
  */
}

export default App;
