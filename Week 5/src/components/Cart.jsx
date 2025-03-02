const Cart = ({ cartItems, removeFromCart }) => {
    return (
      <div className="p-4">
        <h2 className="text-xl font-bold">Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((item, index) => (
            <div key={index} className="border p-2 flex justify-between">
              <span>{item.name} - ${item.price}</span>
              <button 
                onClick={() => removeFromCart(item)} 
                className="bg-red-500 text-white px-2 py-1 rounded"
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default Cart;
  