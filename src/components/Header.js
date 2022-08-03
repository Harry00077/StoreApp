import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Header.css";

function Header() {
  const { pathname } = useLocation();
  return (
    <>
      <div className="list">
        <ul style={{ display: "flex" }}>
          <Link
            style={{ color: pathname === "/" ? "white" : "#2bbcce" }}
            to="/"
          >
            Home
          </Link>
          <Link
            style={{ color: pathname === "/cart" ? "white" : "#2bbcce" }}
            to="/cart"
          >
            Cart
          </Link>
          <Link
            style={{ color: pathname === "/signin" ? "white" : "#2bbcce" }}
            to="/signin"
          >
            Sign In
          </Link>
          <Link
            style={{ color: pathname === "/signout" ? "white" : "#2bbcce" }}
            to="/signout"
          >
            Sign Out
          </Link>
        </ul>
      </div>
    </>
  );
}

export default Header;
