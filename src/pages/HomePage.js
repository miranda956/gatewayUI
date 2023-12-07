import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect, useLocation } from "react-router-dom";
import { Routes } from "../routes";

// pages

import DashboardOverview from "./dashboard/DashboardOverview";
import Transactions from "./Transactions";
import Channels from "./Channels";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import ForgotPassword from "./redirects_and_errors/ForgotPassword";
import ResetPassword from "./redirects_and_errors/ResetPassword";
import Lock from "./redirects_and_errors/Lock";
import NotFoundPage from "./redirects_and_errors/NotFound";
import ServerError from "./redirects_and_errors/ServerError";
import UserManagement from "./UserManagement";
import Merchants from "./Merchants";
import Services from "./Services";
import Reports from "./Reports";

// components
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";

import { useAuthContext } from "../components/Contexts/AuthContext";

//protected pages

const RouteWithLoader = ({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          {" "}
          <Preloader show={loaded ? false : true} /> <Component {...props} />{" "}
        </>
      )}
    />
  );
};

const RouteWithSidebar = ({ component: Component, protectedRoute, ...rest }) => {
  const [loaded, setLoaded] = useState(false);
  const [authLoading, setAuthLoading] = useState(true);
  const { user, dispatch } = useAuthContext();
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setAuthLoading(false);
      setLoaded(true);
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch]);

  const localStorageIsSettingsVisible = () => {
    return localStorage.getItem("settingsVisible") === "false" ? false : true;
  };

  const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    localStorage.setItem("settingsVisible", !showSettings);
  };

  if (protectedRoute && authLoading) {
    return <Preloader show={true} />;
  }

  if (protectedRoute && !user) {
    return <Redirect to={{ pathname: Routes.Signin.path, state: { from: location } }} />;
  }

  return (
    <Route
      {...rest}
      render={(props) => (
        <>
          <Preloader show={loaded ? false : true} />
          <Sidebar />

          <main className="content">
            <Navbar />
            <Component {...props} />
            <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
          </main>
        </>
      )}
    />
  );
};

export default () => (
  <Switch>
    <RouteWithSidebar exact path={Routes.DashboardOverview.path} component={DashboardOverview} />
    <RouteWithLoader exact path={Routes.Presentation.path} component={Presentation} />
    <RouteWithLoader exact path={Routes.Signin.path} component={Signin} />
    <RouteWithLoader exact path={Routes.Signup.path} component={Signup} />
    <RouteWithLoader exact path={Routes.ForgotPassword.path} component={ForgotPassword} />
    <RouteWithLoader exact path={Routes.ResetPassword.path} component={ResetPassword} />
    <RouteWithLoader exact path={Routes.Lock.path} component={Lock} />
    <RouteWithLoader exact path={Routes.NotFound.path} component={NotFoundPage} />
    <RouteWithLoader exact path={Routes.ServerError.path} component={ServerError} />

    {/* protected pages */}

    <RouteWithSidebar exact path={Routes.Transactions.path} protectedRoute={true} component={Transactions} />
    <RouteWithSidebar exact path={Routes.Channels.path} protectedRoute={true} component={Channels} />
    <RouteWithSidebar exact path={Routes.Usermanagement.path} protectedRoute={true} component={UserManagement} />
    <RouteWithSidebar exact path={Routes.Merchants.path} protectedRoute={true} component={Merchants} />
    <RouteWithSidebar exact path={Routes.Services.path} protectedRoute={true} component={Services} />
    <RouteWithSidebar exact path={Routes.Reports.path} protectedRoute={true} component={Reports} />

    <Redirect to={Routes.NotFound.path} />
  </Switch>
);
