import React from "react";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>Email: info@userinfo.com | Phone: (555) 123-4567</p>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 UserInfo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
