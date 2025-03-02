import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Continue shopping</Link></p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-item-image" />
              <h3>{item.name}</h3>
              <p>₹{item.price.toLocaleString("en-IN")}</p>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
          <h3>Total: ₹{total.toLocaleString("en-IN")}</h3>
          <Link to="/checkout" className="checkout-button">
            Proceed to Checkout
          </Link>
        </>
      )}
    </div>
  );
};

export default CartPage;
