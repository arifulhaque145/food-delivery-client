import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "../Context/AuthProvider";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import Register from "../Pages/Register";

function AllRoutes() {
  return (
    <>
      <Switch>
        <AuthProvider>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </AuthProvider>
      </Switch>
    </>
  );
}

export default AllRoutes;
