import React, { useState, useLocation, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./Style/Table.css";

import Alert from "@material-ui/lab/Alert";

const TableSelection = ({ whole }) => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const handleclick = (e) => {
    if (!whole) {
      e.preventDefault();
    }
  };
  return (
    <>
      {user ? (
        <></>
      ) : (
        <center style={{ margin: "20px auto 0px auto" }}>
          <Alert severity="error">
            You need to login to see PGR Predictions !!
          </Alert>
        </center>
      )}
      <div className="tableSelect">
        <NavLink
          className="navT navt"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/psar"
        >
          PSAR Trend
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/adx"
        >
          ADX Indicators{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/rsi"
        >
          RSI Indicators{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/macd"
        >
          MACD Indicators{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/mfi"
        >
          MFI Oscillators{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/cci"
        >
          CCI Oscillators{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/wr"
        >
          William %R Indicators{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/bb"
        >
          Bollinger Bands{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/stoch"
        >
          Stochastic Oscillators{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
        <NavLink
          className="navT navt2"
          exact
          activeClassName="acT"
          onClick={handleclick}
          to="/data/ichimoku"
        >
          {" "}
          Chimoku Cloud{" "}
          {!whole ? (
            <CircularProgress
              style={{ width: "16px", height: "16px", color: "white" }}
            />
          ) : (
            ""
          )}{" "}
        </NavLink>
      </div>
    </>
  );
};

export default TableSelection;
