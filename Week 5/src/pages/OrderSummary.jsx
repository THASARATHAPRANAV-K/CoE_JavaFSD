import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const OrderSummary = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderDetails } = location.state || {};
  const { user } = useContext(AuthContext);

  const [currentDate, setCurrentDate] = useState("");
  const [currentTime, setCurrentTime] = useState("");
  const [deliveryDate, setDeliveryDate] = useState("");

  useEffect(() => {
    const now = new Date();
    setCurrentDate(now.toLocaleDateString("en-IN"));
    setCurrentTime(now.toLocaleTimeString("en-IN"));

    const deliveryDays = Math.floor(Math.random() * 5) + 3;
    const delivery = new Date(now);
    delivery.setDate(delivery.getDate() + deliveryDays);
    setDeliveryDate(delivery.toLocaleDateString("en-IN"));
  }, []);

  if (!orderDetails) {
    return <h2 className="text-center">No order details found. Redirecting...</h2>;
  }

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <p><strong>Name:</strong> {user?.name || "Guest"}</p>
      <p><strong>Email:</strong> {user?.email || "Not Provided"}</p>
      <p><strong>Phone:</strong> {user?.phone || "Not Provided"}</p>
      <p><strong>Address:</strong> {user?.address || "Not Provided"}</p>
      <p><strong>State:</strong> {user?.state || "Not Provided"}</p>
      <p><strong>City:</strong> {user?.city || "Not Provided"}</p>
      <p><strong>Order Date:</strong> {currentDate}</p>
      <p><strong>Order Time:</strong> {currentTime}</p>
      <p><strong>Expected Delivery:</strong> {deliveryDate}</p>
      <h3>Ordered Products:</h3>
      <ul>
        {orderDetails.products.map((product, index) => (
          <li key={index} className="order-item">
            {product.name} - ₹{product.price.toLocaleString("en-IN")} x {product.quantity}
          </li>
        ))}
      </ul>
      <h3>Total Amount: ₹{orderDetails.total.toLocaleString("en-IN")}</h3>
      <button onClick={() => navigate("/")} className="home-button">
        Back to Home
      </button>
    </div>
  );
};

export default OrderSummary;
