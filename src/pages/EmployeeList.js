import React, { useEffect, useState } from "react";
import axios from "../services/api";
import {Link} from "react-router-dom";

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [error, setError] = useState("");

    useEffect(() => {
        axios.get("/employees")
            .then(response => setEmployees(response.data))
            .catch(error => console.error("Error fetching employees:", error));
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this employee?")) {
            try {
                await axios.delete(`/employees/${id}`);
                setEmployees(employees.filter(emp => emp.id !== id)); // Remove from state
            } catch (error) {
                setError("Failed to delete employee");
                console.error("Delete error:", error);
            }
        }
    };

    return (
        <div className="container">
            <h1>Employee List</h1>

            {error && <p className="error">{error}</p>}

            <Link to="/employees/new">
                <button className="add-btn">Add Employee</button>
            </Link>

            <ul>
                {employees.length > 0 ? (
                    employees.map((emp) => (
                        <li key={emp.id} className="employee-card">
                            <span>{emp.name} - {emp.role} - {emp.department}</span>
                            <button className="delete-btn" onClick={() => handleDelete(emp.id)}>Delete</button>
                        </li>
                    ))
                ) : (
                    <p>No employees found.</p>
                )}
            </ul>
        </div>
    );
};

export default EmployeeList;
