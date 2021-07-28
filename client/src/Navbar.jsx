import React from "react"
import './App.css'
import {NavLink} from "react-router-dom"

const Navbar = () =>{
  const check=  JSON.parse(localStorage.getItem("profile"));
  const yes=check &&  check.result.admin;
  return(
    <div style={{display:"flex",width:"100%"}}>

    <NavLink className="nav" exact activeClassName="ac" to="/" style={ yes? {width:"19%"} : {width:"25%"}}>Home</NavLink>
    <NavLink  className="nav" exact activeClassName="ac" to="/about" style={ yes? {width:"19%"} : {width:"25%"}}>About</NavLink>
    <NavLink className="nav" exact activeClassName="ac" to="/stock" style={ yes? {width:"19%"} : {width:"25%"}}>Stock</NavLink>
    <NavLink  className="nav" exact activeClassName="ac" to="/contact" style={ yes? {width:"19%"} : {width:"25%"}}>Contact</NavLink>
    {
   yes ? 
    <NavLink  className="nav" exact activeClassName="ac" to="/admin" style={ yes? {width:"24%"} : {width:"0%"}}>Dashboard</NavLink>
    :
    <></>
    }
    </div>
  )
}

export default Navbar