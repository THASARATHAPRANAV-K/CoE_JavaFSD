const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border p-4 rounded shadow-lg">
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-gray-700">${product.price}</p>
        <button 
          onClick={() => addToCart(product)} 
          className="bg-green-500 text-white px-4 py-2 mt-2 rounded"
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  