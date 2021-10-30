import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "../Context/AuthProvider";
import DeliveryProvider from "../Context/DeliveryProvider";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Order from "../Pages/Order";
import PlaceOrder from "../Pages/PlaceOrder";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

function AllRoutes() {
  return (
    <Switch>
      <AuthProvider>
        <DeliveryProvider>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <PrivateRoute exact path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute exact path="/placeorder">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute exact path="/login">
            <Login />
          </PrivateRoute>
          <PrivateRoute exact path="/register">
            <Register />
          </PrivateRoute>
          {/* <Route path="/*" component={NotFound} /> */}
        </DeliveryProvider>
      </AuthProvider>
    </Switch>
  );
}

export default AllRoutes;
