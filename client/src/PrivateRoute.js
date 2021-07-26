import { Route, Redirect } from "react-router-dom";
import React from "react";
import { connect } from "react-redux";
const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        JSON.parse(localStorage.getItem("profile")).result.admin ? (
          <Component />
        ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
      }
    />
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};
export default connect(mapStateToProps)(PrivateRoute);
