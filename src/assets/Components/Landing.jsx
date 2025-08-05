import React from "react";
import "../Styles/Landing.css";

const Landing = ({ onGetStarted }) => {
  return (
    <div className="landing">
      <div className="landing-container">
        <div className="landing-content">
          <div className="landing-image">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
              alt="Team collaboration"
            />
          </div>
          <div className="landing-text">
            <h1>Welcome to UserInfo</h1>
            <p>
              UserInfo is your comprehensive platform for managing and
              displaying user information. Our intuitive interface allows you to
              browse through user profiles, view detailed information, and
              connect with users easily. Whether you're managing a team,
              building a community, or simply organizing contacts, UserInfo
              provides the tools you need to stay connected and informed.
            </p>
            <button className="cta-button" onClick={onGetStarted}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
