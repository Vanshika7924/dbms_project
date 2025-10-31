import React from "react";

const DepartmentList = ({ departments, onSelect }) => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Segoe UI, Arial, sans-serif" }}>
      {/* 🔹 Header Section */}
      <header
        style={{
          backgroundColor: "#004aad",
          color: "white",
          padding: "1rem 2rem",
          borderRadius: "8px",
          marginBottom: "1.5rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.15)",
        }}
      >
        <h1 style={{ margin: 0 }}>🏥 Department Dashboard</h1>
        <p style={{ margin: "6px 0 0", fontSize: "0.95rem", color: "#e0e0e0" }}>
          View and select departments to see available doctors.
        </p>
      </header>

      {/* 🔹 Department List Section */}
      <h2 className="text-xl font-semibold mb-3">Departments</h2>
      <ul className="space-y-2">
        {departments.length === 0 ? (
          <p style={{ color: "#777" }}>No departments found.</p>
        ) : (
          departments.map((dept) => (
            <li
              key={dept.id}
              onClick={() => onSelect(dept.id)}
              style={{
                padding: "12px 16px",
                border: "1px solid #ddd",
                borderRadius: "6px",
                cursor: "pointer",
                backgroundColor: "#fafafa",
                transition: "background 0.3s",
                marginBottom: "8px",
              }}
              onMouseOver={(e) => (e.currentTarget.style.background = "#f0f8ff")}
              onMouseOut={(e) => (e.currentTarget.style.background = "#fafafa")}
            >
              {dept.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DepartmentList;
