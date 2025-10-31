import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={{ background: "#004aad", padding: "1rem", color: "white" }}>
    <h2>Diagnostic Center</h2>
    <div>
      <Link
        to="/"
        style={{ color: "white", marginRight: "1rem", textDecoration: "none" }}
      >
        Doctors
      </Link>
      <Link to="/departments" style={{ color: "white", textDecoration: "none" }}>
        Departments
      </Link>
    </div>
  </nav>
);

export default Navbar;
