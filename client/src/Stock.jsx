import React, { useState } from "react";
import "./App.css";
import Nav from "./Navbar";
import Tables from "./components/Table";
import TableSelection from "./components/TabelSelection";
import SearchBar from "./components/SearchBar";
// SSEARCH BAR
import "./components/Style/SearchBar.css";

const Stock = ({ history }) => {
  const [name, setName] = useState("");
  const [whole, setwhole] = useState(null);
  const [historical, setHistorical] = useState(false);
  return name == "" ? (
    <div className="SearchBar">
      <SearchBar
        name={name}
        setName={setName}
        whole={whole}
        setwhole={setwhole}
      />
    </div>
  ) : (
    <>
      <div className="SearchBar">
        <SearchBar
          name={name}
          setName={setName}
          whole={whole}
          setwhole={setwhole}
        />
      </div>

      <div
        style={{ display: "flex", flexDirection: "column", overflowX: "auto" }}
      >
        <TableSelection whole={whole} />
      </div>

      <div className="tablesCSS">
        <Tables
          history={history}
          whole={whole}
          setwhole={setwhole}
          name={name}
        />
      </div>
    </>
  );
};

export default Stock;
