import React from "react";
import "../Styles/Header.css";

const Header = ({ currentPage, onPageChange }) => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h2>UserInfo</h2>
        </div>
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button
                className={`nav-link ${currentPage === "home" ? "active" : ""}`}
                onClick={() => onPageChange("home")}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  currentPage === "users" ? "active" : ""
                }`}
                onClick={() => onPageChange("users")}
              >
                Users
              </button>
            </li>
            <li className="nav-item">
              <button
                className={`nav-link ${
                  currentPage === "contact" ? "active" : ""
                }`}
                onClick={() => onPageChange("contact")}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
