import React from "react";

const DoctorList = ({ doctors }) => {
  if (!doctors || doctors.length === 0) {
    return <p style={{ color: "#666" }}>No doctors found for this department.</p>;
  }

  return (
    <div>
      <h2 style={{ color: "#004aad" }}>Doctors</h2>

      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 8 }}>
        <thead style={{ background: "#f5f7fb" }}>
          <tr>
            <th style={th}>ID</th>
            <th style={th}>Name</th>
            <th style={th}>Specialization</th>
            <th style={th}>Email</th>
            <th style={th}>Phone</th>
            <th style={th}>Dept ID</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map(doc => (
            <tr key={doc.id}>
              <td style={td}>{doc.id}</td>
              <td style={td}>{doc.name}</td>
              <td style={td}>{doc.specialization}</td>
              <td style={td}>{doc.email}</td>
              <td style={td}>{doc.phone}</td>
              <td style={td}>{doc.dept_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const th = { textAlign: "left", padding: "10px", borderBottom: "1px solid #e6e6e6" };
const td = { padding: "8px 10px", borderBottom: "1px solid #f0f0f0" };

export default DoctorList;
