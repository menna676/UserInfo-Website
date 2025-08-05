const UserDetail = ({ user, setCurrentPage }) => {
  if (!user) {
    return <div className="error">User not found</div>;
  }

  return (
    <div className="user-detail-page">
      <div className="container">
        <button className="back-button" onClick={() => setCurrentPage("users")}>
          ← Back to Users
        </button>

        <div className="user-detail-card">
          <div className="user-header">
            <img
              src={user.image}
              alt={`${user.firstName} ${user.lastName}`}
              className="user-detail-avatar"
            />
            <div className="user-header-info">
              <h1>
                {user.firstName} {user.lastName}
              </h1>
              <p className="user-title">{user.company?.title}</p>
              <p className="user-company">{user.company?.name}</p>
            </div>
          </div>

          <div className="user-details-grid">
            <div className="detail-section">
              <h3>Personal Information</h3>
              <div className="detail-item">
                <strong>Email:</strong> {user.email}
              </div>
              <div className="detail-item">
                <strong>Phone:</strong> {user.phone}
              </div>
              <div className="detail-item">
                <strong>Age:</strong> {user.age}
              </div>
              <div className="detail-item">
                <strong>Gender:</strong> {user.gender}
              </div>
              <div className="detail-item">
                <strong>Birth Date:</strong> {user.birthDate}
              </div>
            </div>

            <div className="detail-section">
              <h3>Address</h3>
              <div className="detail-item">
                <strong>Street:</strong> {user.address?.address}
              </div>
              <div className="detail-item">
                <strong>City:</strong> {user.address?.city}
              </div>
              <div className="detail-item">
                <strong>State:</strong> {user.address?.state}
              </div>
              <div className="detail-item">
                <strong>Country:</strong> {user.address?.country}
              </div>
            </div>

            <div className="detail-section">
              <h3>Professional</h3>
              <div className="detail-item">
                <strong>Company:</strong> {user.company?.name}
              </div>
              <div className="detail-item">
                <strong>Department:</strong> {user.company?.department}
              </div>
              <div className="detail-item">
                <strong>Title:</strong> {user.company?.title}
              </div>
            </div>

            <div className="detail-section">
              <h3>Additional Info</h3>
              <div className="detail-item">
                <strong>Username:</strong> {user.username}
              </div>
              <div className="detail-item">
                <strong>Blood Group:</strong> {user.bloodGroup}
              </div>
              <div className="detail-item">
                <strong>Eye Color:</strong> {user.eyeColor}
              </div>
              <div className="detail-item">
                <strong>Height:</strong> {user.height} cm
              </div>
              <div className="detail-item">
                <strong>Weight:</strong> {user.weight} kg
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
