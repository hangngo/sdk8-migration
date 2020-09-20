import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// import "@gooddata/react-components/styles/css/main.css";

// import { ProjectIdProvider } from "../contexts/ProjectId";
import Login from "./Login";
import Logout from "./Logout";
import Welcome from "./Welcome";
import Home from "./Home";
import Page from "../components/Page";
import { BackendProvider, WorkspaceProvider } from "@gooddata/sdk-ui";
import { workspace } from "../constants/fixtures";
import styles from "./AppRouter.module.scss";
import { useAuth } from "../context/auth";

const AppRouter = () => {
    const { backend } = useAuth();
    return (
        <div className={styles.AppRouter}>
            <BackendProvider backend={backend}>
                <WorkspaceProvider workspace={workspace}>
            <Router>
                {/* ProjectIdProvider depends on Router so it must be nested */}
                {/*<ProjectIdProvider>*/}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/welcome" component={Welcome} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                {/*</ProjectIdProvider>*/}
            </Router>
                </WorkspaceProvider>
            </BackendProvider>
        </div>
    );
};

export default AppRouter;
