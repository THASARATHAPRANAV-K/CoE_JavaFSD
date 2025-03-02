import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    dob: "",
    address: "",
    state: "",
    city: "",
    phone: "",
    email: "",
    password: "",
  });

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData); // Store all user details in AuthContext
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" required onChange={handleChange} />
        <input type="date" name="dob" placeholder="Date of Birth" required onChange={handleChange} />
        <input type="text" name="address" placeholder="Address" required onChange={handleChange} />
        <input type="text" name="state" placeholder="State" required onChange={handleChange} />
        <input type="text" name="city" placeholder="City" required onChange={handleChange} />
        <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
        <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
        <button type="submit">Signup</button>
      </form>
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
};

export default Signup;
