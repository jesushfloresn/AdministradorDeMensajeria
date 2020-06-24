import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import useLocalStorage from "react-use-localstorage";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  const [token, setToken] = useLocalStorage("timestamp", null);
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        return !!token ? (
          <RouteComponent {...routeProps} />
        ) : (
          <Redirect to={"/login"} />
        );
      }}
    />
  );
};

export default PrivateRoute;
