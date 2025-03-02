import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa"; // Profile icon

const Profile = () => {
  const { user } = useContext(AuthContext); // Getting user data from context

  return (
    <div className="profile-container">
      <div className="profile-card">
        <FaUserCircle className="profile-icon" />
        <h2>{user?.name || "User Name"}</h2>
        <p><strong>Age:</strong> {user?.age || "N/A"}</p>
        <p><strong>Date of Birth:</strong> {user?.dob || "N/A"}</p>
        <p><strong>Address:</strong> {user?.address || "N/A"}</p>
        <p><strong>State:</strong> {user?.state || "N/A"}</p>
        <p><strong>City:</strong> {user?.city || "N/A"}</p>
        <p><strong>Phone:</strong> {user?.phone || "N/A"}</p>
        <p><strong>Email:</strong> {user?.email || "N/A"}</p>
      </div>
    </div>
  );
};

export default Profile;
