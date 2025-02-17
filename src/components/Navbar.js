import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cartItems }) => {
  return (
    <nav className="navbar">
      <h1>EZ Tech Store</h1>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart ({cartItems.length})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
