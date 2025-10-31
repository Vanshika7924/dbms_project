import React, { useState } from "react";

const DepartmentList = () => {
  const [departments, setDepartments] = useState([]); // start empty

  return (
    <div style={{ padding: "2rem" }}>
      <h2 style={{ color: "#004aad", marginBottom: "1rem" }}>Department List</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          border: "1px solid #ddd",
        }}
      >
        <thead style={{ backgroundColor: "#f5f5f5" }}>
          <tr>
            <th style={thStyle}>Department ID</th>
            <th style={thStyle}>Department Name</th>
            <th style={thStyle}>Head of Department</th>
            <th style={thStyle}>Doctor ID</th>
            <th style={thStyle}>Doctor Name</th>
            <th style={thStyle}>Contact Number</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Room Number</th>
            <th style={thStyle}>Number of Staff</th>
          </tr>
        </thead>

        <tbody>
          {departments.length === 0 ? (
            <tr>
              <td colSpan="9" style={{ textAlign: "center", padding: "1rem" }}>
                No departments added yet.
              </td>
            </tr>
          ) : (
            departments.map((dept) => (
              <tr key={dept.id}>
                <td style={tdStyle}>{dept.id}</td>
                <td style={tdStyle}>{dept.name}</td>
                <td style={tdStyle}>{dept.hod}</td>
                <td style={tdStyle}>{dept.doctorId}</td>
                <td style={tdStyle}>{dept.doctorName}</td>
                <td style={tdStyle}>{dept.contact}</td>
                <td style={tdStyle}>{dept.email}</td>
                <td style={tdStyle}>{dept.room}</td>
                <td style={tdStyle}>{dept.staffCount}</td>
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

export default DepartmentList;
