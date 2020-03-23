import React from "react";
import { Link, NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <NavLink activeClassName="active" to="/random">
        Random
      </NavLink>
      <NavLink activeClassName="active" to="/favorites">
        Favorites
      </NavLink>
    </nav>
  );
};

export default Nav;
