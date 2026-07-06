import "./Profile.css";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  const userData =
    JSON.parse(localStorage.getItem("popxUser")) || {};

  return (
    <div className="profile-page">
      <div className="page-header">
        <h2 className="page-title profile-title">
          Account Settings
        </h2>

        <button
          type="button"
          className="back-btn"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>

      <div className="profile-card">
        <div className="profile-info">
          <div className="profile-image-wrapper">
            <img
              src="https://i.pravatar.cc/100"
              alt="Profile"
              className="profile-image"
            />

            <div className="camera-icon">
              📷
            </div>
          </div>

          <div>
            <h3>
              {userData.fullName || "Marry Doe"}
            </h3>

            <p>
              {userData.email ||
                "marrydoe@gmail.com"}
            </p>
          </div>
        </div>

        <div className="profile-description">
          <p>
            Lorem Ipsum Dolor Sit Amet,
            Consetetur Sadipscing Elitr,
            Sed Diam Nonumy Eirmod Tempor
            Invidunt Ut Labore Et Dolore
            Magna Aliquyam Erat, Sed Diam
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;