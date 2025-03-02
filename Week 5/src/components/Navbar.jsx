import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* SkylineShopper Logo */}
        <Link to="/" className="logo">
          SkylineShopper
        </Link>

        {/* Navigation Links */}
        <div className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          {user ? (
            <>
              <Link to="/profile" className="nav-link">Profile</Link>
              <button onClick={logout} className="logout-button">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="nav-link">Login</Link>
              <Link to="/signup" className="nav-link">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
