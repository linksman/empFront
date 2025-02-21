import React from "react";
import ReactDOM from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./login";

const clientId = "778973255874-r2hevgukkhpgp5roo53be29g1m5bu7qa.apps.googleusercontent.com";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GoogleOAuthProvider clientId={clientId}>
        <Login />
    </GoogleOAuthProvider>
);
