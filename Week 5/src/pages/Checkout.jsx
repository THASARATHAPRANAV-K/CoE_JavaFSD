import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    const orderDetails = {
      name: user?.name || "Guest",
      email: user?.email || "Not Provided",
      products: cart,
      total: total,
    };

    clearCart();
    navigate("/order-summary", { state: { orderDetails } });
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        {cart.map((item) => (
          <div key={item.id} className="checkout-item">
            <h3>{item.name}</h3>
            <p>₹{item.price.toLocaleString("en-IN")} x {item.quantity}</p>
          </div>
        ))}
      </div>
      <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
