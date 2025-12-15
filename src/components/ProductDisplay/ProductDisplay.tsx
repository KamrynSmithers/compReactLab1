import React from "react";
import { ProductDisplayProps } from "../../types";

const ProductDisplay: React.FC<ProductDisplayProps> = ({ product }) => {
  return (
    <div className="border rounded-lg p-6 shadow-md max-w-md">
      <img 
        src="./src/assets/appleheadphones.jpg"
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-600 mb-4">{product.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-3xl font-bold text-blue-600">
          ${product.price.toFixed(2)}
        </span>
        <span className={`px-3 py-1 rounded ${product.inStock ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>
      <button 
        className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
        disabled={!product.inStock}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDisplay;