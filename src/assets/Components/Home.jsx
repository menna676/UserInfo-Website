import React from "react";
import "../Styles/Home.css";

const Home = ({ users, loading, onUserSelect }) => {
  if (loading) {
    return (
      <div className="home">
        <div className="loading">
          <h2>Loading users...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="home">
      <div className="home-container">
        <h1>User List</h1>
        <div className="user-grid">
          {users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-avatar">
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                />
              </div>
              <div className="user-info">
                <h3>
                  {user.firstName} {user.lastName}
                </h3>
                <p className="user-email">{user.email}</p>
                <p className="user-role">{user.company?.title || "Employee"}</p>
                <p className="user-company">
                  {user.company?.name || "Company"}
                </p>
              </div>
              <button
                className="view-profile-btn"
                onClick={() => onUserSelect(user)}
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
