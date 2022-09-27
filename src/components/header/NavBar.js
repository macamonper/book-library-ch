import React from "react";
import { Link } from "react-router-dom";
import "../../styles/styles";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/my-account">My account</Link>
      </div>

      <SearchBar />
    </div>
  );
};
export default NavBar;
