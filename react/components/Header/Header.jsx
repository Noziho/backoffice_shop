import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = function () {
  return (
    <header>
      <img src='/uploads/logo.png' alt="Shop logo" />
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/promotions">Promotions</Link>
        <Link to="/user-account">User Account</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};
