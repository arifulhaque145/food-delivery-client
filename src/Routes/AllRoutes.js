import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthProvider from "../Context/AuthProvider";
import DeliveryProvider from "../Context/DeliveryProvider";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
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
          <Route path="/home" component={Home} />
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <PrivateRoute path="/placeorder">
            <PlaceOrder />
          </PrivateRoute>
          <PrivateRoute path="/login">
            <Login />
          </PrivateRoute>
          <PrivateRoute path="/register">
            <Register />
          </PrivateRoute>
          <Route path="/*" component={NotFound} />
        </DeliveryProvider>
      </AuthProvider>
    </Switch>
  );
}

export default AllRoutes;
