import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const CreateEmployee = () => {
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        name: "",
        role: "",
        department: "",
    });
    const [error, setError] = useState("");

    // Handle input changes
    const handleChange = (e) => {
        setEmployee({ ...employee, [e.target.name]: e.target.value });
    };

    // Submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            await api.post("/employees", employee);
            navigate("/employees"); // Redirect to employee list after creation
        } catch (error) {
            setError("Failed to create employee. Please try again.");
            console.error("Error:", error);
        }
    };

    return (
        <div className="container">
            <h2>Create New Employee</h2>

            {error && <p className="error">{error}</p>}

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={employee.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Role:</label>
                    <input
                        type="text"
                        name="role"
                        value={employee.role}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Department:</label>
                    <input
                        type="text"
                        name="department"
                        value={employee.department}
                        onChange={handleChange}
                        required
                    />
                </div>

                <button type="submit">Create Employee</button>
            </form>
        </div>
    );
};

export default CreateEmployee;
