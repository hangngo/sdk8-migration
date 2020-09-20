import React from "react";

import "@gooddata/sdk-ui-charts/styles/css/main.css";
import "@gooddata/sdk-ui-pivot/styles/css/main.css";
import "@gooddata/sdk-ui-filters/styles/css/main.css";

import {  AuthProvider } from "./context/auth";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <AuthProvider>
                <AppRouter />
        </AuthProvider>
    );
}

export default App;
