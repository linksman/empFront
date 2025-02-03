import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EmployeeList from "./pages/EmployeeList";
import CreateEmployee from "./pages/CreateEmployee";
import Navbar from "./components/Navbar";
import "./styles.css";

const App = () => {
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? "dark-mode" : ""}>
            <Router>
                <Navbar toggleDarkMode={() => setDarkMode(!darkMode)} darkMode={darkMode} />
                <button className="toggle-dark-mode" onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
                </button>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employees" element={<EmployeeList />} />
                    <Route path="/employees/new" element={<CreateEmployee />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;
