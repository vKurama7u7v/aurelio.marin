import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { map } from "lodash";

import routes from "./routes";

import Navbar from "../screens/components/Navbar/Navbar.jsx";
import Loading from "../screens/components/Loading/Loading.jsx";

export default function Navigation() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showColor, setShowColor] = useState(0);

  const onShowNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
  };

  const onResetShowNavbar = () => {
    if (showNavbar) {
      setShowNavbar(false);
    }
  };

  const onChangeColor = () => {
    if (showColor === 0) {
      return "active__purple";
    } else if (showColor === 1) {
      return "active__blue";
    } else if (showColor === 2) {
      return "active__red";
    } else if (showColor === 3) {
      return "active__orange";
    } else if (showColor === 4) {
      return "active__yellow";
    }
  };

  return (
    <Router>
      {/* ===== NAVBAR ===== */}
      <Navbar
        showNavbar={showNavbar}
        onShowNavbar={onShowNavbar}
        onResetShowNavbar={onResetShowNavbar}
        onChangeColor={onChangeColor}
      />

      {/* ===== RUTAS APP ===== */}
      <Switch>
        <Redirect exact from="/" to="/index" />
        {map(routes, (route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(props) => (
              <React.Suspense fallback={<Loading />}>
                <route.component
                  {...props}
                  showColor={showColor}
                  onChangeColor={onChangeColor}
                  setShowColor={setShowColor}
                />
              </React.Suspense>
            )}
          ></Route>
        ))}
      </Switch>
    </Router>
  );
}
