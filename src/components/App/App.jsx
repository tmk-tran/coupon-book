import React, { useEffect } from "react";
import {
  HashRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import Nav from "../Nav/Nav";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
// ~~~~~~~~~ Components ~~~~~~~~~~
import AboutPage from "../AboutPage/AboutPage";
import TitlePage from "../TitlePage/TitlePage";
import Preface from "../Preface/Preface";
import Rules from "../Rules/Rules";
import FundraisingInfo from "../FundraisingInfo/FundraisingInfo";
import CouponsList from "../CouponsList/CouponsList";
import CouponContact from "../CouponContact/CouponContact";
import InfoPage from "../InfoPage/InfoPage";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";

import "./App.css";

// Theme establishing global color for MUI
const theme = createTheme({
  typography: {
    fontSize: 18,
    fontFamily: 'Lato, "Helvetica Neue", Arial, sans-serif',
  },
  palette: {
    primary: {
      main: "#273b91", // Set to PSG brand blue
    },
  },
});
// end theme

function App() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch({ type: "FETCH_USER" });
  }, [dispatch]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />

            {/* Visiting localhost:3000/about will show the about page. */}
            <Route
              // shows AboutPage at all times (logged in or not)
              exact
              path="/about"
            >
              <AboutPage />
            </Route>

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/ will show the TitlePage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the LoginPage (component).
            Even though it seems like they are different pages, the user is always on localhost:3000/user */}
            <ProtectedRoute
              // logged in shows TitlePage else shows LoginPage
              exact
              path="/user"
            >
              <TitlePage />
            </ProtectedRoute>

            <ProtectedRoute exact path="/preface">
              <Preface />
            </ProtectedRoute>

            <ProtectedRoute exact path="/rules">
              <Rules />
            </ProtectedRoute>

            <ProtectedRoute exact path="/fundraising">
              <FundraisingInfo />
            </ProtectedRoute>

            <ProtectedRoute exact path="/coupons">
              <CouponsList />
            </ProtectedRoute>

            <ProtectedRoute exact path="/coupon-contact">
              <CouponContact />
            </ProtectedRoute>

            <ProtectedRoute
              // logged in shows InfoPage else shows LoginPage
              exact
              path="/info"
            >
              <InfoPage />
            </ProtectedRoute>

            <Route exact path="/login">
              {user.id ? (
                // If the user is already logged in,
                // redirect to the /user page
                <Redirect to="/user" />
              ) : (
                // Otherwise, show the login page
                <LoginPage />
              )}
            </Route>

            <Route exact path="/registration">
              {user.id ? (
                // If the user is already logged in,
                // redirect them to the /user page
                <Redirect to="/user" />
              ) : (
                // Otherwise, show the registration page
                <RegisterPage />
              )}
            </Route>

            <Route exact path="/home">
              {user.id ? (
                // If the user is already logged in,
                // redirect them to the /user page
                <Redirect to="/user" />
              ) : (
                // Otherwise, show the Landing page
                <LandingPage />
              )}
            </Route>

            {/* If none of the other routes matched, we will show a 404. */}
            <Route>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
