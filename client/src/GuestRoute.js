import { Route, Redirect } from "react-router-dom";
import React from "react";

import Header from './Header';
import Nav from './Navbar'
const GuestRoute = ({ component: Component, ...rest }) => {
  return (
    <>
     <Header/>
        <Nav/>

    <Route 
  {...rest}
      render={props =>       
          <Component {...props} />
       }
    />
   </>
  );
};

export default GuestRoute;
