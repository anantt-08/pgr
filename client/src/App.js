import './App.css';
import React from 'react'
import Header from './Header';
import {BrowserRouter,Route, Switch,Redirect} from 'react-router-dom'
import Stock from './Stock'
import About from './About'
import Home from './Home.js'
import Gallery from './Gallery'
import Career from './Career'
import Contact from './Contact'
import Nav from './Navbar'
import Button from '@material-ui/core/Button';
import ResetPassword from "./resetPassword";
import forgetPassword from "./forgetpassword";
import Login from './Login'
import dashboard from "./Dashboard";
import GuestRoute from "./GuestRoute";
import 'react-notifications/lib/notifications.css';
import PrivateRoute from "./PrivateRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
   <Route path="/change-password/:slug" exact component={ResetPassword} />
          <GuestRoute path="/forget-password" exact component={forgetPassword} />
          <GuestRoute exact path="/" component={Home}/>
          <GuestRoute exact path="/data/:id" component={Stock} />
          <GuestRoute exact path="/about" component={About}/>
          <GuestRoute exact path="/stock" component={Stock}/>
          <GuestRoute exact path="/gallery" component={Gallery}/>
          <GuestRoute exact path="/career" component={Career}/>
          <GuestRoute exact path="/contact" component={Contact}/>
          <GuestRoute exact path="/login" component={Login}/>
           <PrivateRoute path="/admin" exact component={dashboard} />
             <Redirect to="/"/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
