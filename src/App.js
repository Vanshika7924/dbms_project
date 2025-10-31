import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import DoctorList from "./components/DoctorList";
import DepartmentList from "./components/DepartmentList";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<DoctorList />} />
        <Route path="/departments" element={<DepartmentList />} />
      </Routes>
    </Router>
  );
}

export default App;
