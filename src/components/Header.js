import React from "react";
import { Link } from "react-router-dom";
import "../Header.css";

function Header() {
  return (
    <>
      <div className="list">
        <ul style={{ display: "flex" }}>
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
            Cart
          </Link>
          <Link style={{ color: "white", textDecoration: "none" }} to="/signin">
            Sign In
          </Link>
          <Link
            style={{ color: "white", textDecoration: "none" }}
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
