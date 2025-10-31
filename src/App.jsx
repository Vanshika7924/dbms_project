import React, { useState, useEffect } from "react";
import DepartmentList from "./components/DepartmentList";
import DoctorList from "./components/DoctorList";

const App = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [selectedDept, setSelectedDept] = useState(null);
  const [loading, setLoading] = useState(false);

  // 🔹 Step 1: Load all departments from backend
  useEffect(() => {
    fetch("http://localhost:5000/api/departments")  // <-- Replace with your backend URL
      .then(res => res.json())
      .then(data => setDepartments(data))
      .catch(err => console.error("Error fetching departments:", err));
  }, []);

  // 🔹 Step 2: When user clicks on department, load that department’s doctors
  const handleDeptSelect = async (deptId) => {
    setSelectedDept(deptId);
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:5000/api/doctors/${deptId}`);
      const data = await res.json();
      setDoctors(data);
    } catch (err) {
      console.error("Error fetching doctors:", err);
    } finally {
      setLoading(false);
    }
  };

  const currentDepartment = departments.find(d => d.id === selectedDept) || null;

  return (
    <div style={{ padding: 20, fontFamily: "Segoe UI, Arial, sans-serif" }}>
      <h1 style={{ color: "#004aad", marginBottom: 16 }}>Diagnostic Center</h1>

      {!selectedDept ? (
        <DepartmentList departments={departments} onSelect={handleDeptSelect} />
      ) : (
        <div>
          <button
            onClick={() => setSelectedDept(null)}
            style={{
              marginBottom: 12,
              padding: "6px 10px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: "#f3f3f3",
              cursor: "pointer"
            }}
          >
            ← Back to Departments
          </button>

          {currentDepartment && (
            <div style={{ padding: 12, border: "1px solid #e0e0e0", borderRadius: 8, background: "#fff" }}>
              <h2 style={{ margin: 0 }}>{currentDepartment.name}</h2>
              <p style={{ margin: "6px 0 0", color: "#555" }}>{currentDepartment.description}</p>
            </div>
          )}

          {loading ? <p>Loading doctors...</p> : <DoctorList doctors={doctors} />}
        </div>
      )}
    </div>
  );
};

export default App;
