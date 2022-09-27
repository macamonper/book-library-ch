import React from "react";
import { Link } from "react-router-dom"
import "../../styles/styles";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="menu-items">
        <Link to="/">Home</Link>
        <Link to="/my-account">My account</Link>
      </div>

   
    </div>
  );
};
export default NavBar;
