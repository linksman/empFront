import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import App from "./App";

const Login = () => {
    const [user, setUser] = useState(() => {
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    const handleSuccess = async (credentialResponse) => {
        try {
            const res = await axios.post("http://localhost:5000/auth/google", {
                token: credentialResponse.credential,
            });

            setUser(res.data);
            localStorage.setItem("user", JSON.stringify(res.data))
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user"); // Remove user data on logout
    };

    return (
        <div>
            {user ? (
                    <>
                        <div>
                            <h2>Welcome, {user.name}</h2>
                            <img src={user.picture} alt="Profile"/>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                         <App/>
                    </>
            ) : (
                <GoogleLogin onSuccess={handleSuccess} onError={() => console.log("Login Failed")} />
            )}
        </div>
    );
};

export default Login;
