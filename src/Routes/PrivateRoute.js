import React from "react";
import { Redirect, Route } from "react-router-dom";
import Loader from "../Components/Loader";
import useAuth from "../Hooks/useAuth";

function PrivateRoute({ children, ...rest }) {
  let { user, isLoading } = useAuth();
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;
