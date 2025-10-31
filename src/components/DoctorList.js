import React, { useState } from "react";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]); // start empty

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#004aad", marginBottom: "1rem" }}>Doctor List</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead style={{ backgroundColor: "#f5f5f5" }}>
          <tr>
            <th style={thStyle}>Doctor ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Contact Number</th>
            <th style={thStyle}>License Number</th>
            <th style={thStyle}>Specialty</th>
          </tr>
        </thead>

        <tbody>
          {doctors.length === 0 ? (
            <tr>
              <td colSpan="6" style={{ textAlign: "center", padding: "1rem" }}>
                No doctors added yet.
              </td>
            </tr>
          ) : (
            doctors.map((doc) => (
              <tr key={doc.id}>
                <td style={tdStyle}>{doc.id}</td>
                <td style={tdStyle}>{doc.name}</td>
                <td style={tdStyle}>{doc.email}</td>
                <td style={tdStyle}>{doc.contact}</td>
                <td style={tdStyle}>{doc.license}</td>
                <td style={tdStyle}>{doc.specialty}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

const thStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  borderBottom: "1px solid #ddd",
};

export default DoctorList;
