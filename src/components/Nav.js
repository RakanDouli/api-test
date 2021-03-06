import React from "react";
import { NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div>
        <NavLink className="navlink" exact to="/">
          Home
        </NavLink>
      </div>
      <div>
        <NavLink className="navlink" to="/Gamelist">
          Discover
        </NavLink>
        <NavLink className="navlink" to="/about">
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
