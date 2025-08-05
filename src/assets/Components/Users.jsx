import React from "react";
import "../Styles/Users.css";

const Users = ({ user, onBack }) => {
  if (!user) {
    return (
      <div className="users">
        <div className="users-container">
          <h1>No User Selected</h1>
          <p>
            Please go back to the home page and select a user to view details.
          </p>
          <button className="back-button" onClick={onBack}>
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="users">
      <div className="users-container">
        <div className="user-detail">
          <div className="user-header">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="user-detail-image"
            />
            <div className="user-header-info">
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <p className="user-username">@{user.username}</p>
              <p className="user-age">Age: {user.age}</p>
            </div>
          </div>

          <div className="user-details-grid">
            <div className="detail-section">
              <h3>Contact Information</h3>
              <div className="detail-item">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="detail-item">
                <strong>Phone:</strong> {user.phone}
              </div>
              <div className="detail-item">
                <strong>Address:</strong> {user.address?.address},{" "}
                {user.address?.city}, {user.address?.state}
              </div>
            </div>

            <div className="detail-section">
              <h3>Professional Information</h3>
              <div className="detail-item">
                <strong>Company:</strong> {user.company?.name}
              </div>
              <div className="detail-item">
                <strong>Title:</strong> {user.company?.title}
              </div>
              <div className="detail-item">
                <strong>Department:</strong> {user.company?.department}
              </div>
            </div>

            <div className="detail-section">
              <h3>Personal Information</h3>
              <div className="detail-item">
                <strong>Gender:</strong> {user.gender}
              </div>
              <div className="detail-item">
                <strong>Birth Date:</strong> {user.birthDate}
              </div>
              <div className="detail-item">
                <strong>Blood Group:</strong> {user.bloodGroup}
              </div>
              <div className="detail-item">
                <strong>Height:</strong> {user.height} cm
              </div>
              <div className="detail-item">
                <strong>Weight:</strong> {user.weight} kg
              </div>
            </div>

            <div className="detail-section">
              <h3>Banking Information</h3>
              <div className="detail-item">
                <strong>Card Number:</strong> **** **** ****{" "}
                {user.bank?.cardNumber?.slice(-4)}
              </div>
              <div className="detail-item">
                <strong>Card Type:</strong> {user.bank?.cardType}
              </div>
              <div className="detail-item">
                <strong>Currency:</strong> {user.bank?.currency}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
