import React from 'react';
// Import a modern cart icon
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ image, name, price, description }) => {
  const handleBuyNow = () => {
    console.log(`"${name}" has been added to the cart.`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={name} className="product-image" />
      </div>
      <div className="product-info">
        <h2 className="product-name">{name}</h2>
        <p className="product-description">{description}</p>
        <div className="product-footer">
          <p className="product-price">₱{price}</p>
          <button className="buy-now-button" onClick={handleBuyNow}>
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;