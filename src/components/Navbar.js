import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import navbar-specific styles

const Navbar = ({ toggleDarkMode, darkMode }) => {
    return (
        <nav className="navbar">
            <div className="nav-brand">
                <Link to="/">🌟 Employee Manager</Link>
            </div>

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/employees">Employees</Link></li>
                <li><Link to="/employees/new" className="add-employee-btn">+ Add Employee</Link></li>
            </ul>

            {/* 🌙 Dark Mode Toggle */}
            <button className="dark-mode-toggle" onClick={toggleDarkMode}>
                {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
            </button>
        </nav>
    );
};

export default Navbar;
