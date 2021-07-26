import React,{useState,useLocation,useEffect} from "react"
import {NavLink} from "react-router-dom"

import './Style/Table.css';

import Alert from '@material-ui/lab/Alert';

 
const TableSelection = ({history}) =>{

  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  console.log("------------",user)

  return(
    <>
    <br/>
    
    <div className="tableSelect">
    {user?null:<center><Alert severity="error" style={{width:'50%'}}>You need to login to see all Predictions !!</Alert></center>}
    <br/>
    <NavLink className="navT navt" exact activeClassName="acT"  to="/data/psar">PSAR Trend</NavLink>
    <NavLink  className="navT" exact activeClassName="acT" to="/data/adx">ADX Indicators</NavLink>
    <NavLink className="navT" exact activeClassName="acT"  to="/data/rsi">RSI Indicators</NavLink>
    <NavLink  className="navT" exact activeClassName="acT" to="/data/macd">MACD Indicators</NavLink>
    <NavLink className="navT" exact activeClassName="acT"  to="/data/mfi">MFI Oscillators</NavLink>
    <NavLink  className="navT" exact activeClassName="acT" to="/data/cci">CCI Oscillators</NavLink>
    <NavLink  className="navT" exact activeClassName="acT" to="/data/wr">William %R Indicators</NavLink>
    <NavLink  className="navT" exact activeClassName="acT" to="/data/bb">Bollinger Bands</NavLink>
    <NavLink  className="navT" exact activeClassName="acT" to="/data/stoch">Stochastic Oscillators</NavLink>
    <NavLink  className="navT navt2" exact activeClassName="acT" to="/data/ichimoku"> Chimoku Cloud</NavLink>     
    </div>
    </>
  )
}

export default TableSelection;