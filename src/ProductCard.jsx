import React from 'react';
// Import a modern cart icon
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ props}) => {
  const handleBuyNow = () => {
    console.log(`"${name}" has been added to the cart.`);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={props.image} alt={props.name} className="product-image" />
      </div>
      <div className="product-info">
        <h2 className="product-name">{props.name}</h2>
        <p className="product-description">{props.description}</p>
        <div className="product-footer">
          <p className="product-price">₱{props.price}</p>
          <button className="buy-now-button" onClick={handleBuyNow}>
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;