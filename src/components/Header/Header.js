import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// The Header creates links that can be used to navigate
// between routes.

const linkStyle = {
  textDecoration: "none",
  color: "#888"
};

const Header = () => (
  <header>
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/roster" style={linkStyle}>
            Roster
          </Link>
        </li>
        <li>
          <Link to="/schedule" style={linkStyle}>
            Schedule
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
